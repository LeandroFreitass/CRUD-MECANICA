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

    <div className="content-list-employees-main" style={{background:'white', width:'1250px', height:'200px', borderRadius:'10px'}}>
        <Form onSubmit={updateProduct}>
         <div className="first-line-type-date" style={{margin:'10px 0px 10px 10px'}}>
            <div className="first-line-corretion-size">
             <Form.Group >
                <Form.Control
                    type="text"
                    placeholder="cpf *"
                    name="cpf"
                    value={cpf}
                    onChange={ (e) => setCpf(e.target.value) }
                />
            </Form.Group>
            </div>
            <div className="first-line-corretion-size">
            <Form.Group style={{width:'230px'}}>
                <Form.Control
                    type="text"
                    placeholder="Nome Completo *"
                    name="nomeCompleto"
                    value={nomeCompleto}
                    onChange={(e)=> setNomeCompleto(e.target.value)}
                />
            </Form.Group>
            </div>
            <div className="first-line-corretion-size">
            <Form.Group style={{width:'110px',margin: '0px 0px 0px 50px'}}>
                <Form.Control
                     type="text"
                    placeholder="DataNasc"
                    name="DataNasc"
                    value={dataNasc}
                    onChange={(e)=> setDataNasc(e.target.value)}
                />
            </Form.Group>
            </div>
            </div>
    
        <div className="second-line-type-date" style={{margin:'0px 0px 10px 10px'}}>
            <div className="second-line-corretion-size">
            <Form.Group style={{width:'680px'}}>
                <Form.Control
                    type="text"
                    placeholder="EnderecoCompleto"
                    name="EnderecoCompleto"
                    value={enderecoCompleto}
                    onChange={(e)=> setEnderecoCompleto(e.target.value)}
                />
            </Form.Group>
            </div>
            <div className="second-line-corretion-size">

            <Form.Group style={{width:'180px',margin: '0px 0px 0px 498px'}}>
                <Form.Control
                    type="text"
                    placeholder="celular"
                    name="celular"
                    value={celular}
                    onChange={(e)=> setCelular(e.target.value)}
                />
            </Form.Group>
            </div>
            <div className="second-line-corretion-size">
            <Form.Group style={{width:'350px',margin: '0px 0px 0px 500px'}}>
                <Form.Control
                    type="text"
                    placeholder="celular"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
            </Form.Group>
            </div>
            </div>
            <div className="second-line-corretion-size" style={{margin: '0px 0px 0px 1110px'}}>
            <Button variant="success" type="submit" block>
                Edit Employee
            </Button>
            </div>
        </Form>

            </div>

     )
}

export default EditForm;