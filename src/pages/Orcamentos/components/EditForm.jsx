import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'

const EditForm = () => {
    const [idCliente, setIdCliente] = useState('')
    const [idVeiculo, setIdVeiculo] = useState('')
    const [nomeMecanico, setNomeMecanico] = useState('')
    const [defeitoReclamado, setDefeitoReclamado] = useState('')
    const [diagnostico, setDiagnostico] = useState('')
    const [dataPgto, setDataPgto] = useState('')
    const [formaPgto, setFormaPgto] = useState('')
    const [valorPgto, setValorPgto] = useState('')

    const navigate = useNavigate()
    const { id } = useParams()

    const updateProduct = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:5277/api/OrdemDeServico/${id}`, {
            idCliente: idCliente,
            idVeiculo: idVeiculo,
            nomeMecanico: nomeMecanico,
            defeitoReclamado: defeitoReclamado,
            diagnostico: diagnostico,
            dataPgto: dataPgto,
            formaPgto: formaPgto,
            valorPgto: valorPgto
        })
        navigate('/')
    }

    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5277/api/OrdemDeServico/${id}`)
        setIdCliente(response.data.idCliente)
        setIdVeiculo(response.data.idVeiculo)
        setNomeMecanico(response.data.nomeMecanico)
        setDefeitoReclamado(response.data.defeitoReclamado)
        setDiagnostico(response.data.diagnostico)
        setDataPgto(response.data.dataPgto)
        setFormaPgto(response.data.formaPgto)
        setValorPgto(response.data.valorPgto)
    }

    return (
        <div
            className="content-list-employees-main"
        
        >
            <Form onSubmit={updateProduct}>
                <div className="first-line-type-date" style={{ margin: '10px 0px 10px 10px' }}>
                    <div className="first-line-corretion-size">
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="idCliente *"
                                name="idCliente"
                                value={idCliente}
                                required
                                onChange={(e) => setIdCliente(e.target.value)}
                            />
                        </Form.Group>
                    </div>
                    <div className="first-line-corretion-size">
                        <Form.Group style={{ width: '230px' }}>
                            <Form.Control
                                type="text"
                                placeholder="idVeiculo"
                                name="idVeiculo"
                                value={idVeiculo}
                                required
                                onChange={(e) => setIdVeiculo(e.target.value)}
                            />
                        </Form.Group>
                    </div>
                    <div className="first-line-corretion-size">
                        <Form.Group style={{ width: '360px', margin: '0px 0px 0px 50px' }}>
                            <Form.Control
                                type="text"
                                placeholder="Nome Mecanico"
                                name="Nome Mecanico"
                                value={nomeMecanico}
                                required
                                onChange={(e) => setNomeMecanico(e.target.value)}
                            />
                        </Form.Group>
                    </div>
                </div>

                <div className="second-line-type-date" style={{ margin: '0px 0px 10px 10px' }}>
                    <div className="second-line-corretion-size">
                        <Form.Group style={{ width: '220px' }}>
                            <Form.Control
                                type="text"
                                placeholder="Defeito Reclamado"
                                name="Defeito Reclamado"
                                value={defeitoReclamado}
                                required
                                onChange={(e) => setDefeitoReclamado(e.target.value)}
                            />
                        </Form.Group>
                    </div>
                    <div className="second-line-corretion-size">
                        <Form.Group style={{ width: '180px', margin: '0px 0px 0px 40px' }}>
                            <Form.Control
                                type="text"
                                placeholder="Diagnostico"
                                name="Diagnostico"
                                value={diagnostico}
                                required
                                onChange={(e) => setDiagnostico(e.target.value)}
                            />
                        </Form.Group>
                    </div>
                    <div className="second-line-corretion-size">
                        <Form.Group style={{ width: '180px', margin: '0px 0px 0px 40px' }}>
                            <Form.Control
                                type="date"
                                placeholder="Data Pagamento"
                                name="Data Pagamento"
                                value={dataPgto}
                                onChange={(e) => setDataPgto(e.target.value)}
                            />
                        </Form.Group>
                    </div>
                    <div className="second-line-corretion-size">
                        <Form.Group style={{ width: '150px', margin: '0px 0px 0px 40px' }}>
                            <Form.Control
                                type="text"
                                placeholder="Forma Pagamento"
                                name="Forma Pagamento"
                                value={formaPgto}
                                onChange={(e) => setFormaPgto(e.target.value)}
                            />
                        </Form.Group>
                    </div>
                    <div className="second-line-corretion-size">
                        <Form.Group style={{ width: '350px', margin: '0px 0px 0px 10px' }}>
                            <Form.Control
                                type="text"
                                placeholder="Valor Pago"
                                name="Valor Pago"
                                value={valorPgto}
                                onChange={(e) => setValorPgto(e.target.value)}
                            />
                        </Form.Group>
                    </div>

                </div>
                <div className="second-line-corretion-size" style={{ margin: '0px 0px 0px 1000px' }}>
                    <Button variant="success" type="submit" block>
                        Edit Employee
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default EditForm
