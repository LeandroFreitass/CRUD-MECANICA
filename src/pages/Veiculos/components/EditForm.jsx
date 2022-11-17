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

        <div className="content-list-employees-main" style={{background:'white', width:'775px', height:'200px', borderRadius:'10px',margin: '0px 0px 0px 250px'}}>
            <Form onSubmit={updateProduct}>
             <div className="first-line-type-date" style={{margin:'10px 0px 10px 10px'}}>
                <div className="first-line-corretion-size">
                 <Form.Group >
                    <Form.Control
                        type="text"
                        placeholder="cpf *"
                        name="cpf"
                        value={idCliente}
                        onChange={ (e) => setIdCliente(e.target.value) }
                    />
                </Form.Group>
                </div>
                <div className="first-line-corretion-size">
                <Form.Group style={{width:'230px'}}>
                    <Form.Control
                        type="text"
                        placeholder="Marca *"
                        name="marca"
                        value={marca}
                        onChange={(e)=> setMarca(e.target.value)}
                    />
                </Form.Group>
                </div>
                <div className="first-line-corretion-size">
                <Form.Group style={{width:'130px',margin: '0px 0px 0px 50px'}}>
                    <Form.Control
                         type="text"
                        placeholder="modelo"
                        name="modelo"
                        value={modelo}
                        onChange={(e)=> setModelo(e.target.value)}
                    />
                </Form.Group>
                </div>
                <div className="first-line-corretion-size">
                <Form.Group style={{width:'180px'}}>
                    <Form.Control
                        type="text"
                        placeholder="EnderecoCompleto"
                        name="EnderecoCompleto"
                        value={placa}
                        onChange={(e)=> setPlaca(e.target.value)}
                    />
                </Form.Group>
                </div>
                </div>
        
            <div className="second-line-type-date" style={{margin:'0px 0px 10px 10px'}}>
                <div className="second-line-corretion-size">
                <Form.Group style={{width:'180px',margin: '0px 0px 0px 0px'}}>
                    <Form.Control
                        type="text"
                        placeholder="celular"
                        name="celular"
                        value={tamanho}
                        onChange={(e)=> setTamanho(e.target.value)}
                    />
                </Form.Group>
                </div>
                <div className="second-line-corretion-size">
                <Form.Group style={{width:'180px',margin: '0px 0px 0px 0px'}}>
                    <Form.Control
                        type="text"
                        placeholder="celular"
                        name="email"
                        value={ano}
                        onChange={(e)=> setAno(e.target.value)}
                    />
                </Form.Group>
                </div>
                <div className="second-line-corretion-size">
                <Form.Group style={{width:'150px',margin: '0px 0px 0px 0px'}}>
                    <Form.Control
                        type="text"
                        placeholder="celular"
                        name="email"
                        value={combustivel}
                        onChange={(e)=> setCombustivel(e.target.value)}
                    />
                </Form.Group>
                </div>
                </div>
                <div className="second-line-corretion-size" style={{margin: '0px 0px 0px 630px'}}>
                <Button variant="success" type="submit" block>
                    Edit Employee
                </Button>
                </div>
            </Form>
    
                </div>
    
         )
    }

export default EditForm;