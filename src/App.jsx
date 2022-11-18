import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import EntrarUsuario from './pages/EntrarUsuario';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="clientes" element={<Clientes />} />
                    <Route path="veiculos" element={<Veiculos />} />
                    <Route path="ordemDeServico" element={<OrdemDeServico />} />
                    <Route path="/editMa/:id" element={<EditForm />} />
                    <Route path="/client/:id" element={<EditFormClient />} />
                    <Route path="/ordemDeServico/:id" element={<EditFormOrcamentos />} />
                    <Route path="usuarios" element={<Usuarios />}/>
                    <Route path="registrarUsuario" element={<RegistrarUsuario />}/>
                    <Route path="entrarUsuario" element={<EntrarUsuario/>}/>
           </Route>
                <Route path="/register" element={<OrdemDeServico />} />
            </Routes>
        </Router>
    )
}

export default App
