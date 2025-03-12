import { FaHome, FaStar, FaUser, FaPowerOff } from "react-icons/fa";
import { Sidebar, MenuItem, BottomMenu } from "./style";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

 export function SideBar() {
  
  const navigate = useNavigate();
  const { signOut } = useAuth();
      
  function handleSignOut() {
    signOut();
    navigate("/");
    window.location.reload();
  }

  function handleNavigateToHome() {
    if(window.location.pathname != "/") {
      navigate("/");
    }

  }

  function handleNavigateToFavorites() {
    if(window.location.pathname != "/favorites") {
      navigate("/favorites");
    }
  }

  function handleNavigateToProfile() {
    if(window.location.pathname != "/profile") {
      navigate("/profile");
    }
  }

  return (
    <Sidebar>
      <img src="src/assets/logo.svg" alt="Logo" width={100}/>
      <MenuItem onClick={handleNavigateToHome}>
        <FaHome /> Início
      </MenuItem>
      <MenuItem onClick={handleNavigateToFavorites}>
        <FaStar /> Favoritos
      </MenuItem>
      <BottomMenu>
        <MenuItem  onClick={handleNavigateToProfile}>
          <FaUser /> Perfil
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          <FaPowerOff /> Sair
        </MenuItem>
      </BottomMenu>
    </Sidebar>
  );
};

