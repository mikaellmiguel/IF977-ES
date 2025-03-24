import { CountryCardExtend } from "../../components/CountryCardExtend";
import { SearchBar } from "../../components/SearchBar";
import { SideBar } from "../../components/SideBar";
import { Container, Content, CountryList } from "./styles";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Favorites () {
    
    const [favorites, setFavorites] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    useEffect(() => { 
        async function listFavorites() {
            if(search===""){
                const response = await api.get("/favorites");
                setFavorites(response.data);
            }
            else {
                const response = await api.get(`/favorites/name/${search}`);
                setFavorites(response.data);
            }
        }
        listFavorites();
    }, [search]);
    
    return(
        <div>
            <Container>
                <SideBar />
                <Content>
                    <SearchBar placeholder="Pesquisar" value={search} onChange={event => setSearch(event.target.value)}/>
                    <CountryList>
                        {favorites && favorites.map((favorite, index) => (
                            <CountryCardExtend key={index} name={favorite.country_name} flag={favorite.flag} area={favorite.area} population={favorite.population} capital={favorite.capital} onClick={() => navigate(`/country/${favorite.ccn3}`)}/>
                        ))}
                    </CountryList>
                </Content>
            </Container>

        </div>
    )
}