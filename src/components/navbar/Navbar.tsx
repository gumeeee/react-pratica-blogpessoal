import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";

function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta("O Usuário foi deslogado com sucesso!", "sucesso");
    navigate("/login");
  }

  let navbarComponent;

  if (usuario.token !== "") {
    navbarComponent = (
      <div className="w-full bg-gradient-to-t from-teal-400 to-yellow-200 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">Blog do Gui</div>

          <div className="flex gap-4">
            <Link
              to="/login"
              className="bg-gradient-to-r from-green-400 to-blue-500 rounded p-1 hover:from-pink-500 hover:to-yellow-500"
            >
              Login
            </Link>
            <Link
              to="/home"
              className="bg-gradient-to-r from-green-400 to-blue-500 rounded p-1 hover:from-pink-500 hover:to-yellow-500"
            >
              Home
            </Link>
            <Link
              to="/postagens"
              className="bg-gradient-to-r from-green-400 to-blue-500 rounded p-1 hover:from-pink-500 hover:to-yellow-500"
            >
              Postagens
            </Link>
            <Link
              to="/temas"
              className="bg-gradient-to-r from-green-400 to-blue-500 rounded p-1 hover:from-pink-500 hover:to-yellow-500"
            >
              Temas
            </Link>
            <Link
              to="/cadastroTema"
              className="bg-gradient-to-r from-green-400 to-blue-500 rounded p-1 hover:from-pink-500 hover:to-yellow-500"
            >
              Cadastrar tema
            </Link>
            <Link
              to="/perfil"
              className="bg-gradient-to-r from-green-400 to-blue-500 rounded p-1 hover:from-pink-500 hover:to-yellow-500"
            >
              Perfil
            </Link>
            <Link
              to=""
              onClick={logout}
              className="bg-gradient-to-r from-green-400 to-blue-500 rounded p-1 hover:from-pink-500 hover:to-yellow-500"
            >
              Sair
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;
