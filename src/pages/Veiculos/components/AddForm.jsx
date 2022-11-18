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
    const [clientes, setClientes] = useState([])

    function refreshPage() {
        window.location.reload()
    }
    const onSubmit = async (data) => {
        console.log(data)
        await axios.post('http://localhost:5277/api/Veiculo', {
            ...data
        })
        navigate('/veiculos')
    }
    useEffect(() => {
        getCliente()
    }, [])

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
            <Form.Group>
                <Form.Control type="text" placeholder="marca " name="marca" {...register('marca')} />
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="modelo" name="modelo" {...register('modelo')} />
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="placa" name="placa" {...register('placa')} />
            </Form.Group>
            <Form.Select aria-label="Default select example" {...register('tamanho')}>
                <option>Selecione</option>
                <option value="Carro">Carro</option>
                <option value="Moto">Moto</option>
                <option value="Caminhao">Caminhão</option>
                <option value="Onibus">Onibus</option>
            </Form.Select>
            <Form.Group>
                <Form.Control type="text" placeholder="ano" name="ano" {...register('ano')} />
            </Form.Group>
            <Form.Select aria-label="Default select example" {...register('combustivel')}>
                <option>Selecione</option>
                <option value="Gasolina">Gasolina</option>
                <option value="Etanol">Etanol</option>
                <option value="GNV">GNV </option>
                <option value="GNV">Diesel</option>
            </Form.Select>
            <Button variant="success" type="submit" block onClick={refreshPage}>
                Adicionar Veiculos
            </Button>
        </Form>
    )
}

export default AddForm
