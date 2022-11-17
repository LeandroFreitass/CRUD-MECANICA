import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css'

const EditForm = () =>{

    const [idCliente, setIdCliente] = useState('');
    const [idVeiculo, setIdVeiculo] = useState('');
    const [nomeMecanico, setNomeMecanico] = useState('');
    const [defeitoReclamado, setDefeitoReclamado] = useState('');
    const [diagnostico, setDiagnostico] = useState('');
    const [dataPgto, setDataPgto] = useState('');
    const [formaPgto, setFormaPgto] = useState('');
    const [valorPgto, setValorPgto] = useState('');


  
    const navigate = useNavigate();
    const { id } = useParams();

    const updateProduct = async (e) => {
        e.preventDefault(); 
        await axios.put(`http://localhost:5277/api/OrdemDeServico/${id}`,{
            idCliente: idCliente,
            idVeiculo: idVeiculo,
            nomeMecanico: nomeMecanico,
            defeitoReclamado: defeitoReclamado,
            diagnostico: diagnostico,
            dataPgto: dataPgto,
            formaPgto: formaPgto,
            valorPgto: valorPgto,
        });
        navigate("/")
    }

    useEffect(() => {
        getProductById()
      }, []);

      const getProductById = async () => {
        const response = await axios.get(`http://localhost:5277/api/OrdemDeServico/${id}`);
        setIdCliente(response.data.idCliente);
        setIdVeiculo(response.data.idVeiculo);
        setNomeMecanico(response.data.nomeMecanico);
        setDefeitoReclamado(response.data.defeitoReclamado);
        setDiagnostico(response.data.diagnostico);
        setDataPgto(response.data.dataPgto);
        setFormaPgto(response.data.formaPgto);
        setValorPgto(response.data.valorPgto);

    }

     return (

        <Form onSubmit={updateProduct}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="idCliente *"
                    name="idCliente"
                    value={idCliente}
                    onChange={ (e) => setIdCliente(e.target.value) }
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="idVeiculo *"
                    name="idVeiculo"
                    value={idVeiculo}
                    onChange={(e)=> setIdVeiculo(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                     type="text"
                    placeholder="nomeMecanico"
                    name="nomeMecanico"
                    value={nomeMecanico}
                    onChange={(e)=> setNomeMecanico(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="defeitoReclamado"
                    name="defeitoReclamado"
                    value={defeitoReclamado}
                    onChange={(e)=> setDefeitoReclamado(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="diagnostico"
                    name="diagnostico"
                    value={diagnostico}
                    onChange={(e)=> setDiagnostico(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="DataPgto"
                    name="DataPgto"
                    value={dataPgto}
                    onChange={(e)=> setDataPgto(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="FormaPgto"
                    name="FormaPgto"
                    value={formaPgto}
                    onChange={(e)=> setFormaPgto(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="ValorPgto"
                    name="ValorPgto"
                    value={valorPgto}
                    onChange={(e)=> setValorPgto(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit Employee
            </Button>
        </Form>

     )
}

export default EditForm;