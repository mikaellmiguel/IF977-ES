import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Form, Left, Img, Buttons} from "./styles";

export function SignIn() {

    return (
        <Container>
            <Left>
                <img src="src/assets/logo.svg" alt="Logo"/>
                <h1>Bem-Vindo ao Geomundo!</h1>
                <Form>
                    <Input type="email" name="email" label="E-mail"/>
                    <Input type="password" name="password" label="Senha"/>
                </Form>
                <Buttons>
                        <Button>Entrar</Button>
                        <Button>Cadastrar-se</Button>
                </Buttons>
            </Left>
            <Img></Img>
        </Container>
    )
}