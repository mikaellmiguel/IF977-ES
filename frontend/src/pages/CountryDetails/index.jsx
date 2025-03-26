import { Button } from "../../components/Button";
import { Container, Sidebar, BackButton, CountryName, InfoList, InfoItem, MainContent, SectionTitle, Description, Grid, GridItem } from "./styles";
import { IoLocationSharp, IoPerson, } from "react-icons/io5";
import { TiWorld } from "react-icons/ti";
import { MdAttachMoney } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { OSMMap } from "../../components/OSMMap";


export function CountryDetails() {

  const navigate = useNavigate();
  const {ccn3} = useParams();
  const [country, setCountry] = useState({});
  const [checkFavorite, setCheckFavorite] = useState(false);
  
  useEffect(() => {
    async function getCountry() {
      const response = await api.get(`/countries/${ccn3}`);
      setCountry(response.data);
    }
    getCountry();
  }, [ccn3]);

  useEffect(() => {
    async function checkFavoriteCountry() {
      try {
        await api.get(`/favorites/${ccn3}`);
        setCheckFavorite(true);
      } catch {
        setCheckFavorite(false);
      }
    }
    checkFavoriteCountry();
  }, [ccn3, checkFavorite]);

  async function handleFavorites() {
    if(checkFavorite) {
      await api.delete(`/favorites/${ccn3}`);
    } else {
      await api.post(`/favorites/${ccn3}`);
    }
    setCheckFavorite(!checkFavorite);
  }
  
  return (
    <Container>
      {/* Sidebar */}
      <Sidebar>
        <BackButton onClick={() => navigate(-1)}>← Voltar</BackButton>
        <img src={country.flag} alt={`Bandeira do ${country.name}`} />
        <CountryName>{country.name || "País"}</CountryName>
        <InfoList>
          <InfoItem><TiWorld /> {country.continents || "Continente"}</InfoItem>
          <InfoItem><IoLocationSharp /> {country.capital || "Capital"}</InfoItem>
          <InfoItem><IoPerson /> {country.population || "Nº População"}</InfoItem>
          <InfoItem><MdAttachMoney /> {(country.currency && Object.values(country.currency)[0]?.name) || "Moeda"} ({(country.currency && Object.values(country.currency)[0]?.symbol) || "Símbolo"})</InfoItem>
          <InfoItem><FaClock /> {country.timezones || "Fuso horário Principal"}</InfoItem>
        </InfoList>
        <Button onClick={() => handleFavorites()}>{checkFavorite ? "★ Remover dos Favoritos" : "☆ Adicionar aos Favoritos"}</Button>
      </Sidebar>

      <MainContent>
        <SectionTitle>Descrição Geral</SectionTitle>
        <Description>
          {country.summary || "Informações não disponíveis"}
        </Description>

        <Grid>
          <GridItem>
            <SectionTitle>Línguas</SectionTitle>
            <ul>
              {country.languages && Object.values(country.languages).map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </GridItem>
          <GridItem>
            <SectionTitle>Mapa</SectionTitle>
            <OSMMap osmUrl={country.map} />
          </GridItem>
        </Grid>
      </MainContent>
    </Container>
  );
}