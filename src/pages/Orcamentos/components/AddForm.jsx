import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'

const AddForm = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, setValue, setFocus } = useForm()
    const [veiculo, setVeiculo] = useState([])
    const [clientes, setClientes] = useState([])

    function refreshPage() {
        window.location.reload()
    }
    const onSubmit = async (data) => {
        console.log(data)
        await axios.post('http://localhost:5277/api/OrdemDeServico', {
            ...data
        })
        navigate('/ordemDeServico')
    }

    useEffect(() => {
        getVeiculo()
        getCliente()
    }, [])

    const getVeiculo = async () => {
        const response = await axios.get('http://localhost:5277/api/Veiculo')
        setVeiculo(response.data)
    }

    const getCliente = async () => {
        const response = await axios.get('http://localhost:5277/api/Cliente')
        setClientes(response.data)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Select aria-label="Default select example" required {...register('idCliente')}>
                <option>Selecione</option>
                {clientes.map((cliente, index) => (
                    <option value={cliente.id}>{cliente.nomeCompleto}</option>
                ))}
            </Form.Select>
            <Form.Select aria-label="Default select example" required {...register('idVeiculo')}>
                <option>Selecione</option>
                {veiculo.map((veiculos, index) => (
                    <option value={veiculos.id}>{veiculos.modelo}</option>
                ))}
            </Form.Select>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Nome Mecanico"
                    name="nomeMecanico"
                    required
                    {...register('nomeMecanico')}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Defeito Reclamado"
                    name="defeitoReclamado"
                    required
                    {...register('defeitoReclamado')}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Diagnostico" name="diagnostico" required {...register('diagnostico')} />
            </Form.Group>

            <Form.Group>
                <Form.Control type="date" placeholder="Data Pagamento" name="DataPgto" required {...register('DataPgto')} />
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Forma Pagamento" name="FormaPgto" {...register('FormaPgto')} />
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Valor Pago" name="ValorPgto" {...register('ValorPgto')} />
            </Form.Group>

            <Button variant="success" type="submit" block onClick={refreshPage}>
                Adicionar Ordem de Serviço
            </Button>
        </Form>
    )
}

export default AddForm
