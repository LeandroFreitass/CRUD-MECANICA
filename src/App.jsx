import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from "react"
import Layout from './components/shared/Layout'
import Dashboard from './pages/Dashboard'
import Clientes from './pages/Clientes'
import Veiculos from './pages/Veiculos'
import OrdemDeServico from './pages/Orcamentos'
import EditForm from './pages/Veiculos/components/EditForm'
import EditFormClient from './pages/Clientes/components/EditForm'
import EditFormOrcamentos from './pages/Orcamentos/components/EditForm'
import Usuarios from './pages/Usuarios'
import RegistrarUsuario from './pages/RegistrarUsuario'
import AuthService from './services/AuthService'
import Login from './components/Login/Login'
import Logout from './components/Login/Logout'


function App() {

    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if(user){
            setCurrentUser(user);
        }
    },[]);

    return (
        <Router>
            <Routes>
                {currentUser ? (<Route path="/" element={<Layout />}>) : (<Route path="/" element={<Main Title = "Tickets de OS"><div> Não autorizado! </div></Main>}/>) }
                    <Route index element={<Dashboard />} />
                {currentUser ?( <Route path="clientes" element={<Clientes />} />) : (<Route path="clientes" element={<Main title = "Lista de clientes"><div> Não autorizado! </div></Main>} />)}
                    <Route path="veiculos" element={<Veiculos /><Main title="Veiculos"> <div>Acervo de veiculos....</div></Main>} />
                    {currentUser ? (<Route path="ordemDeServico" element={<OrdemDeServico />}>): (<Route path="ordemDeServico" element={<Main Title = "Ordens de Serviço"><div>Não autorizado!</div></Main>}/>)}
                    {currentUser ? (<Route path="/editMa/:id" element={<EditForm />} />) :(<Route path="/editMa/:id" element={<Main title="Edição de veículos"><div>Não autorizado! </div></Main>} />)}
                    {currentUser ? (<Route path="/client/:id" element={<EditFormClient />}) : (<Route path="/client/:id" element={<Main title="Edição de cliente!"><div>Não autorizado! </div>}) />
                    {currentUser ? (<Route path="/ordemDeServico/:id" element={<EditFormOrcamentos />} />) : (<Route path="/ordemDeServico/:id" element={<Main Title = "Listage da ordem de servico"><div> Não autorizado! </div></Main>}/>)}
                    {currentUser ? (<Route path="usuarios" element={<Usuarios />) : (<Route path="usuarios" element={<Main title = "Ecossistema de configurações do Usuário"><div> Não autorizado! </div></Main>)}/>
                    <Route path="registrarUsuario" element={<RegistrarUsuario />}/>
                    
                    {currentUser? (<Route path="logout" element={<Logout/>}/>) : (<Route path="login" element={<Login/>}/>) }
           </Route>
                <Route path="/register" element={<OrdemDeServico />} />
            </Routes>
        </Router>
    )
}

export default App
