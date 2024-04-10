import React from "react";

function Navbar() {
  return (
    <>
      <div className=" bg-indigo-900 text-white flex justify-center py-4">
        <div className="text-xl flex content-center font-bold uppercase px-4">
          <h1 className="px-6">Blog pessoal</h1>

          <div className="flex gap-4">
            <div className="hover:underline">Postagens</div>
            <div className="hover:underline">Temas</div>
            <div className="hover:underline">Cadastrar Tema</div>
            <div className="hover:underline">Perfil</div>
            <div className="hover:underline">Sair</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
