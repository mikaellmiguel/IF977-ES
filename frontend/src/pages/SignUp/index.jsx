import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Form, Left, Img, Buttons} from "./styles";
import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { validarEmail } from "../../utils/validarEmail";
import { useNavigate } from "react-router-dom";  

export function SignUp() {

    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleSignUp() {
        
        // Validações
        if(email == "" || name == "" || password == "" || confirmPassword == "") {
            toast.error("Preencha todos os campos");
            return;
        }

        if(validarEmail(email) === false) {
            toast.error("E-mail inválido");
            return;
        }

        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!strongPasswordRegex.test(password)) {
            toast.error("A senha deve ter no mínimo 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial");
            return;
        }
        
        if (password !== confirmPassword) {
            toast.error("As senhas não coincidem");
            return;
        }

        try {
            await api.post("/users", {
                email,
                name,
                password
            });
            toast.success("Usuário cadastrado com sucesso!");
        } catch (error) {
            if(error.response.data.message ) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Erro ao cadastrar usuário, tente novamente mais tarde");
            }
        }
    }

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
                        <Button onClick={() => handleSignUp()}>Cadastrar</Button>
                        <Button onClick={() => navigate("/login")}>Voltar para Login</Button>
                </Buttons>
            </Left>
            <Img></Img>
        </Container>
    )
}