import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './pages/Dashboard'
import Clientes from './pages/Clientes'
import Veiculos from './pages/Veiculos'
import OrdemDeServico from './pages/Orcamentos'
import EditForm from './pages/Veiculos/components/EditForm'
import EditFormClient from './pages/Clientes/components/EditForm'
import EditFormOrcamentos from './pages/Orcamentos/components/EditForm'





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


                </Route>
                <Route path="/register" element={<OrdemDeServico />} />
            </Routes>
        </Router>
    )
}

export default App
