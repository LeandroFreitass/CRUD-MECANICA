import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css'

const EditForm = () =>{

    const [cpf, setCpf] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [enderecoCompleto, setEnderecoCompleto] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
  
    const navigate = useNavigate();
    const { id } = useParams();

    const updateProduct = async (e) => {
        e.preventDefault(); 
        await axios.put(`http://localhost:5277/api/cliente/${id}`,{
            cpf: cpf,
            nomeCompleto: nomeCompleto,
            dataNasc: dataNasc,
            enderecoCompleto: enderecoCompleto,
            celular: celular,
            email: email,
        });
        navigate("/clientes")
    }

    useEffect(() => {
        getProductById()
      }, []);

      const getProductById = async () => {
        const response = await axios.get(`http://localhost:5277/api/cliente/${id}`);
        setCpf(response.data.cpf);
        setNomeCompleto(response.data.nomeCompleto);
        setDataNasc(response.data.dataNasc);
        setEnderecoCompleto(response.data.enderecoCompleto);
        setCelular(response.data.celular);
        setEmail(response.data.email);
    }

     return (

        <Form onSubmit={updateProduct}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="cpf *"
                    name="cpf"
                    value={cpf}
                    onChange={ (e) => setCpf(e.target.value) }
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="nomeCompleto *"
                    name="nomeCompleto"
                    value={nomeCompleto}
                    onChange={(e)=> setNomeCompleto(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                     type="text"
                    placeholder="DataNasc"
                    rows={3}
                    name="DataNasc"
                    value={dataNasc}
                    onChange={(e)=> setDataNasc(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="EnderecoCompleto"
                    name="EnderecoCompleto"
                    value={enderecoCompleto}
                    onChange={(e)=> setEnderecoCompleto(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="celular"
                    name="celular"
                    value={celular}
                    onChange={(e)=> setCelular(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="celular"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit Employee
            </Button>
        </Form>

     )
}

export default EditForm;