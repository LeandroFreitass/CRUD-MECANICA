import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './pages/Dashboard'
import Clientes from './pages/Clientes'
import Veiculos from './pages/Veiculos'
import Mecanico from './pages/Mecanicos'
import Orcamentos from './pages/Orcamentos'
import DefeitoseServicos from './pages/DefeitoseServicos'




function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="clientes" element={<Clientes />} />
                    <Route path="veiculos" element={<Veiculos />} />
                    <Route path="mecanico" element={<Mecanico />} />
                    <Route path="defeitoseserviços" element={<DefeitoseServicos />} />
                    <Route path="orcamentos" element={<Orcamentos />} />
                </Route>
                <Route path="/register" element={<Orcamentos />} />
            </Routes>
        </Router>
    )
}

export default App
