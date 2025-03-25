import { Input } from "../../components/Input";
import { SideBar } from "../../components/SideBar";
import { Container, Content, Form, Options } from "./styles";
import {Button} from "../../components/Button";
import { FaBucket} from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { useState } from "react";

export function Profile() {

    const user = JSON.parse(localStorage.getItem("@Geomundo:user"));
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    
    return (
        <Container>
            <SideBar />
            <Content>
                <Form>
                    <Input type="text" placeholder="Nome" label="Nome" value={name} onChange={event => setName(event.target.value)}/>
                    <Input type="email" placeholder="Email" label="Email" value={email} onChange={event => setEmail(event.target.value)}/>
                </Form>
                <Options>
                    <Button><FaSave/> Salvar Alterações</Button>
                    <Button>Alterar Senha de Acesso</Button>
                    <Button><FaBucket /> Deletar Conta</Button>
                </Options>
            </Content>
        </Container>
    )
}