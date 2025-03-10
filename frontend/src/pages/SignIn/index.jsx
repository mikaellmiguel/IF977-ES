import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Form, Left, Img, Buttons} from "./styles";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { toast } from "react-toastify";
import { validarEmail } from "../../utils/validarEmail";

export function SignIn() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signIn} = useAuth();

    function handleSignIn(){

        if (email === "" || password === "") {
            toast.error("Preencha todos os campos");
            return;
        }

        if(validarEmail(email) === false) {
            toast.error("E-mail inválido");
            return;
        }
        signIn({email, password})
    }
    

    return (
        <Container>
            <Left>
                <img src="src/assets/logo.svg" alt="Logo"/>
                <h1>Bem-Vindo ao Geomundo!</h1>
                <Form>
                    <Input type="email" name="email" label="E-mail" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <Input type="password" name="password" label="Senha" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </Form>
                <Buttons>
                        <Button onClick={() => handleSignIn()}>Entrar</Button>
                        <Button>Cadastrar-se</Button>
                </Buttons>
            </Left>
            <Img></Img>
        </Container>
    )
}