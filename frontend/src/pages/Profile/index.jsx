import { Input } from "../../components/Input";
import { SideBar } from "../../components/SideBar";
import { Container, Content, Form, Options, ModalContent, StyledModal, ModalActions} from "./styles";
import { Button } from "../../components/Button";
import { FaBucket } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { validarEmail } from "../../utils/validarEmail";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement('#root');

export function Profile() {
    const user = JSON.parse(localStorage.getItem("@Geomundo:user"));
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSaveChanges() {
        if(!validarEmail(email)) {
            toast.error("Email inválido");
            return;
        }
        
        const updatedUser = {
            name,
            email
        }

        try {
            await api.put(`users/`, updatedUser);
            localStorage.setItem("@Geomundo:user", JSON.stringify({...user, ...updatedUser}));
            toast.success("Informações do usuário atualizadas com sucesso");
        } catch  {
            toast.error("Erro ao atualizar informações do usuário");
        }
    }

    async function handleDeleteAccount() {
        try {
            await api.delete(`users/`, { 
                data: { password } 
            });
            localStorage.removeItem("@Geomundo:user");
            localStorage.removeItem("@Geomundo:token");
            toast.success("Conta deletada com sucesso");
            navigate("/");
            setIsModalOpen(false);
        } catch {
            toast.error("Erro ao deletar conta. Verifique sua senha.");
        }
    }
    
    return (
        <Container>
            <SideBar />
            <Content>
                <Form>
                    <Input 
                        type="text" 
                        placeholder="Nome" 
                        label="Nome" 
                        value={name} 
                        onChange={event => setName(event.target.value)}
                    />
                    <Input 
                        type="email" 
                        placeholder="Email" 
                        label="Email" 
                        value={email} 
                        onChange={event => setEmail(event.target.value)}
                    />
                </Form>
                <Options>
                    <Button onClick={handleSaveChanges}>
                        <FaSave/> Salvar Alterações
                    </Button>
                    <Button>Alterar Senha de Acesso</Button>
                    <Button onClick={() => setIsModalOpen(true)}>
                        <FaBucket /> Deletar Conta
                    </Button>
                </Options>
            </Content>

            <StyledModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Confirmar Exclusão de Conta"
            >
                <ModalContent>
                    <h2>Confirmar Exclusão de Conta</h2>
                    <p>Para deletar sua conta, por favor insira sua senha:</p>
                    <Input 
                        type="password" 
                        placeholder="Senha" 
                        label="Senha" 
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <ModalActions>
                        <Button 
                            onClick={() => setIsModalOpen(false)}
                            style={{ backgroundColor: '#f0f0f0', color: 'black' }}
                        >
                            Cancelar
                        </Button>
                        <Button 
                            onClick={handleDeleteAccount}
                            style={{ backgroundColor: 'red' }}
                        >
                            Confirmar Exclusão
                        </Button>
                    </ModalActions>
                </ModalContent>
            </StyledModal>
        </Container>
    )
}