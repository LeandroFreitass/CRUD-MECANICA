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
import Logout from './components/Logout/Logout'


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
                {currentUser ? (<Route path="/" element={<Layout />}/>) : (<Route path="/" element={<h1>Tickets de OS - não autorizado</h1>}/>)}
                    <Route index element={<Dashboard />} />
                {currentUser ?( <Route path="clientes" element={<Clientes />} />) : (<Route path="clientes" element={<h1>Lista de clientes - não autorizado </h1>} />)}
                    <Route path="veiculos" element={<Veiculos />} />
                    {currentUser ? (<Route path="ordemDeServico" element={<OrdemDeServico />}/>): (<Route path="ordemDeServico" element={<h1>Ordens de Serviço - não autorizado</h1>}/>)}
                    {currentUser ? (<Route path="/editMa/:id" element={<EditForm />} />) :(<Route path="/editMa/:id" element={<h1>Edição de veículos - não autorizado</h1>} />)}
                    {currentUser ? (<Route path="/client/:id" element={<EditFormClient />}/>) : (<Route path="/client/:id" element={<h1>Edição de cliente - não autorizado</h1>}/>) }
                    {currentUser ? (<Route path="/ordemDeServico/:id" element={<EditFormOrcamentos />} />) : (<Route path="/ordemDeServico/:id" element={<h1> Listagem da ordem de serviço -  não autorizado</h1>}/>)}
                    {currentUser ? (<Route path="usuarios" element={<Usuarios />}/>) : (<Route path="usuarios" element={<h1>Ecossistema de configurações do Usuário - não autorizado</h1>}/>)}
                    <Route path="registrarUsuario" element={<RegistrarUsuario />}/>
                    
                    {currentUser? (<Route path="logout" element={<Logout/>}/>) : (<Route path="login" element={<Login/>}/>) }
        
                <Route path="/register" element={<OrdemDeServico />} />
            </Routes>
        </Router>
    )
}

export default App
