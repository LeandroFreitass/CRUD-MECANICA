import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css'


const EditForm = () =>{
    const [idCliente, setIdCliente] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [placa, setPlaca] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [ano, setAno] = useState('');
    const [combustivel, setCombustivel] = useState('');
  
    const navigate = useNavigate();
    const { id } = useParams();

    const updateProduct = async (e) => {
        e.preventDefault(); 
        await axios.put(`http://localhost:5277/api/Veiculo/${id}`,{
            idCliente: idCliente,
            marca: marca,
            modelo: modelo,
            placa: placa,
            tamanho: tamanho,
            ano: ano,
            combustivel: combustivel,
        });
        navigate("/")
    }

    useEffect(() => {
        getProductById()
      }, []);

      const getProductById = async () => {
        const response = await axios.get(`http://localhost:5277/api/Veiculo/${id}`);
        setIdCliente(response.data.idCliente);
        setMarca(response.data.marca);
        setModelo(response.data.modelo);
        setPlaca(response.data.placa);
        setTamanho(response.data.tamanho);
        setAno(response.data.ano);
        setCombustivel(response.data.combustivel);
    }
     return (

        <Form onSubmit={updateProduct}>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="idCliente "
                name="idCliente"
                value={idCliente}
                onChange={ (e) => setIdCliente(e.target.value) }
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="marca "
                name="marca"
                value={marca}
                onChange={ (e) => setMarca(e.target.value) }
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="modelo"
                name="modelo"
                value={modelo}
                onChange={ (e) => setModelo(e.target.value) }
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="placa"
                name="placa"
                value={placa}
                onChange={ (e) => setPlaca(e.target.value) }
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="tamanho"
                name="tamanho"
                value={tamanho}
                onChange={ (e) => setTamanho(e.target.value) }
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="ano"
                name="ano"
                value={ano}
                onChange={ (e) => setAno(e.target.value) }
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="combustivel"
                name="combustivel"
                value={combustivel}
                onChange={ (e) => setCombustivel(e.target.value) }
            />
        </Form.Group>
        <Button variant="success" type="submit" block>
            editar
        </Button>
    </Form>

     )
}

export default EditForm;