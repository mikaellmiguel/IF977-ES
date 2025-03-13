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


export function CountryDetails() {

  const navigate = useNavigate();
  const {ccn3} = useParams();
  const [country, setCountry] = useState({});
  
  useEffect(() => {
    async function getCountry() {
      console.log(ccn3);
      const response = await api.get(`/countries/${ccn3}`);
      setCountry(response.data);
    }
    getCountry();
  }, [ccn3]);

  
  return (
    <Container>
      {/* Sidebar */}
      <Sidebar>
        <BackButton onClick={()=> navigate(-1)}>← Voltar</BackButton>
        <img src={country.flag} alt={`Bandeira do ${country.name}`} />
        <CountryName>{country.name || "País"}</CountryName>
        <InfoList>
          <InfoItem><TiWorld/> {country.continents || "Continente"}</InfoItem>
          <InfoItem><IoLocationSharp/>{country.capital || "Capital"}</InfoItem>
          <InfoItem><IoPerson/> { country.population || "Nº População"}</InfoItem>
          <InfoItem><MdAttachMoney/> {(country.currency && Object.values(country.currency)[0]?.name) || "Moeda"} ({ (country.currency && Object.values(country.currency)[0]?.symbol) || "Símbolo"})</InfoItem>
          <InfoItem><FaClock/> { country.timezones ||"Fuso horário Principal"}</InfoItem>
        </InfoList>
        <Button>★ Remover dos Favoritos</Button>
      </Sidebar>

      {/* Main Content */}
      <MainContent>
        <SectionTitle>Descrição Geral</SectionTitle>
        <Description>
          (EM DESENVOLVIMENTO) Localizado em [continente/região], este território abrange uma área de aproximadamente
          [área em km²] e possui uma população estimada de [número de habitantes]. Sua capital é
          [nome da capital], e o idioma oficial é [idioma]. Conhecido por [característica notável],
          sua economia é impulsionada por setores como [principais setores econômicos].
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
            <SectionTitle>Fronteiras</SectionTitle>
            <ul>
              <li>Em Desenvolvimento</li>
              <li>Em Desenvolvimento</li>
              <li>Em Desenvolvimento</li>
            </ul>
          </GridItem>
          <GridItem>
            <SectionTitle>Mapa</SectionTitle>
            <p>Em Desenvolvimento</p>
          </GridItem>
        </Grid>
      </MainContent>
    </Container>
  );
}