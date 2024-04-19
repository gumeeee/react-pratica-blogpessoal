import { useContext } from "react";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  const { usuario, handleLogout } = useContext(AuthContext);

  let footerComponent;

  let data = new Date().getFullYear();

  if (usuario.token !== "") {
    footerComponent = (
      <>
        <div className="flex flex-col items-center justify-center bg-indigo-900 text-white py-4">
          <div className="container flex flex-col items-center py-4">
            <p className="text-xl font-bold">
              Blog pessoal Guilherme Moura (gumee) | Copyright
            </p>
            <p className="text-lg">Acesse minhas redes sociais</p>
          </div>

          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/guilherme-moura-13a991259/"
              target="_blank"
            >
              <LinkedinLogo size={48} weight="bold" />
            </a>
            <InstagramLogo size={48} weight="bold" />
            <a href="https://github.com/gumeeee" target="_blank">
              <GithubLogo size={48} weight="bold" />
            </a>
          </div>
        </div>
      </>
    );
  }

  return <>{footerComponent}</>;
}

export default Footer;
