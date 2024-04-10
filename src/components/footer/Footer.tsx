import React from "react";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-indigo-900 text-white py-4">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Blog pessoal Guilherme Moura | Copyright
          </p>
          <p className="text-lg">Acesse minhas redes sociais</p>
        </div>

        <div className="flex gap-2">
          <LinkedinLogo size={48} weight="bold" />
          <InstagramLogo size={48} weight="bold" />
          <GithubLogo size={48} weight="bold" />
        </div>
      </div>
    </>
  );
}

export default Footer;
