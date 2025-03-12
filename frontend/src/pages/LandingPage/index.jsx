import { Button } from "../../components/Button";
import { Container, Content, Header, Img, Logo, Options, TextContent } from "./styles";
import { useNavigate } from "react-router-dom";


export function LandingPage() {
  
  const navigate = useNavigate();

  function handleNavigateToSignIn() {
    navigate("/login");
  }

  function handleNavigateToSignUp() { 
    navigate("/register");
  }
  
  return (
    <Container>
      <Header>
        <Logo>
          <img src="src/assets/logo.svg" alt="Logo" />
          <h1>GeoMundo</h1>
        </Logo>
        <Options>
          <Button onClick={handleNavigateToSignIn}>Entrar</Button>
          <Button onClick={handleNavigateToSignUp}>Cadastre-se</Button>
        </Options>
       
      </Header>
      <Content>
        <TextContent>
          <span>Saiba mais sobre cada país</span>
          <h1>GeoMundo: Conheça os Países, <br/> Explore o Planeta.</h1>
          <p>O GeoMundo é sua plataforma de referência para explorar o mundo.</p>
          <p>Descubra informações detalhadas sobre países, incluindo dados geográficos, descrições rápidas e mapas interativos. Ideal para estudantes, viajantes e curiosos por conhecimento.</p>
          <Button onClick={handleNavigateToSignUp}>Começe a sua Jornada!</Button>
        </TextContent>
        <Img />
      </Content>
    </Container>
  );
}