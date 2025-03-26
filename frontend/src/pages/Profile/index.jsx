import { Input } from "../../components/Input";
import { SideBar } from "../../components/SideBar";
import { Container, Content, Form, Options, ModalContent, StyledModal, ModalActions} from "./styles";
import { Button } from "../../components/Button";
import { FaBucket } from "react-icons/fa6";
import { FaSave, FaKey } from "react-icons/fa";
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
    const navigate = useNavigate();
    
    // Modals state
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    
    // Delete account modal state
    const [deletePassword, setDeletePassword] = useState("");
    
    // Change password modal state
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

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
                data: { password: deletePassword } 
            });
            localStorage.removeItem("@Geomundo:user");
            localStorage.removeItem("@Geomundo:token");
            toast.success("Conta deletada com sucesso");
            navigate("/");
            setIsDeleteModalOpen(false);
        } catch {
            toast.error("Erro ao deletar conta. Verifique sua senha.");
        }
    }

    async function handleChangePassword() {
        if (newPassword !== confirmNewPassword) {
            toast.error("Senhas não coincidem");
            return;
        }

        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!strongPasswordRegex.test(newPassword)) {
            toast.error("A senha deve ter no mínimo 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial");
            return;
        }
        
        try {
            await api.put(`users/password`, {
                currentPassword,
                newPassword
            });
            
            user.password = newPassword;
            localStorage.setItem("@Geomundo:user", JSON.stringify(user));
            toast.success("Senha atualizada com sucesso");
            setIsPasswordModalOpen(false);


            setCurrentPassword("");
            setNewPassword("");
            setConfirmNewPassword("");
        } catch  {
            toast.error("Erro ao atualizar senha. Verifique seus dados.");
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
                    <Button onClick={() => setIsPasswordModalOpen(true)}>
                        <FaKey /> Alterar Senha de Acesso
                    </Button>
                    <Button onClick={() => setIsDeleteModalOpen(true)}>
                        <FaBucket /> Deletar Conta
                    </Button>
                </Options>
            </Content>

            <StyledModal
                isOpen={isDeleteModalOpen}
                onRequestClose={() => setIsDeleteModalOpen(false)}
                contentLabel="Confirmar Exclusão de Conta"
            >
                <ModalContent>
                    <h2>Confirmar Exclusão de Conta</h2>
                    <p>Para deletar sua conta, por favor insira sua senha:</p>
                    <Input 
                        type="password" 
                        placeholder="Senha" 
                        label="Senha" 
                        value={deletePassword}
                        onChange={event => setDeletePassword(event.target.value)}
                    />
                    <ModalActions>
                        <Button 
                            onClick={() => setIsDeleteModalOpen(false)}
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


            <StyledModal
                isOpen={isPasswordModalOpen}
                onRequestClose={() => setIsPasswordModalOpen(false)}
                contentLabel="Alterar Senha"
            >
                <ModalContent>
                    <h2>Alterar Senha de Acesso</h2>
                    <Input 
                        type="password" 
                        placeholder="Senha Atual" 
                        label="Senha Atual" 
                        value={currentPassword}
                        onChange={event => setCurrentPassword(event.target.value)}
                    />
                    <Input 
                        type="password" 
                        placeholder="Nova Senha" 
                        label="Nova Senha" 
                        value={newPassword}
                        onChange={event => setNewPassword(event.target.value)}
                    />
                    <Input 
                        type="password" 
                        placeholder="Confirmar Nova Senha" 
                        label="Confirmar Nova Senha" 
                        value={confirmNewPassword}
                        onChange={event => setConfirmNewPassword(event.target.value)}
                    />
                    <ModalActions>
                        <Button 
                            onClick={() => setIsPasswordModalOpen(false)}
                            style={{ backgroundColor: '#f0f0f0', color: 'black' }}
                        >
                            Cancelar
                        </Button>
                        <Button 
                            onClick={handleChangePassword}
                            style={{ backgroundColor: 'green' }}
                        >
                            Confirmar
                        </Button>
                    </ModalActions>
                </ModalContent>
            </StyledModal>
        </Container>
    )
}