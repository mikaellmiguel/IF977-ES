import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Form, Left, Img, Buttons} from "./styles";
import { useState } from "react";

export function SignUp() {
    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <Container>
            <Left>
                <img src="src/assets/logo.svg" alt="Logo"/>
                <h1>Cadastrar-se</h1>
                <Form>
                    <Input type="email" name="email" label="E-mail" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <Input type="text" name="name" label="Nome" value={name} onChange={(event) => setName(event.target.value)}/>
                    <Input type="password" name="password" label="Senha" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    <Input type="password" name="confirmPassword" label="Confirmar Senha" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/>
                </Form>
                <Buttons>
                        <Button>Cadastrar</Button>
                        <Button>Voltar para Login</Button>
                </Buttons>
            </Left>
            <Img></Img>
        </Container>
    )
}