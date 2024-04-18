import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Home from "./pages/Home/Home";
import { AuthProvider } from "./contexts/AuthContext";
import ListaTemas from "./components/temas/listaTemas/ListaTemas";
import FormularioTema from "./components/temas/formularioTema/FormularioTema";
import DeletarTemas from "./components/temas/deletarTemas/DeletarTemas";
import ListaPostagem from "./components/postagens/listaPostagem/ListaPostagem";
import FormularioPostagem from "./components/postagens/formularioPostagem/FormularioPostagem";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/cadastroTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTemas />} />
              <Route path="/postagens" element={<ListaPostagem />} />
              <Route
                path="/cadastroPostagem"
                element={<FormularioPostagem />}
              />
              <Route
                path="/editarPostagem/:id"
                element={<FormularioPostagem />}
              />
              <Route
                path="/deletarPostagem/:id"
                element={<DeletarPostagem />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
