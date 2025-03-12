import { CountryCard } from "../../components/CountryCard";
import { SearchBar } from "../../components/SearchBar";
import { SideBar } from "../../components/SideBar";
import { Container, Content, CountryList } from "./styles";
import { api } from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";

export function Homepage() {

    
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");

    useEffect( () => {
        async function listCountries(){
            if(search===""){
                const response = await api.get("/countries");
                setCountries(response.data);
            }
            else {
                const response = await api.get(`/countries/name/${search}`);
                setCountries(response.data);
            }
        }
        listCountries();
    }, [search]);

    return (
        <Container>
            <SideBar></SideBar>
            <Content>
                <SearchBar placeholder="Pesquisar" value={search} onChange={(event) => setSearch(event.target.value)}/>
                <CountryList>
                    {countries && countries.map((country, index) => (

                        <CountryCard key={index} name={country.name} flag={country.flag}/>

                    ))}
                </CountryList>
            </Content>
        </Container>
    )

}