import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css'

const EditForm = () =>{

    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [role, setRole] = useState('');
    const [isMecanico, setIsMecanico] = useState('');
    const [email, setEmail] = useState('');
  
    const navigate = useNavigate();
    const { id } = useParams();

    const updateProduct = async (e) => {
        e.preventDefault(); 
        await axios.put(`http://localhost:5277/api/usuario/${id}`,{
            username: username,
            senha: senha,
            role: role,
            isMecanico: isMecanico,
            email: email,
        });
        navigate("/usuarios")
    }

    useEffect(() => {
        getProductById()
      }, []);

      const getProductById = async () => {
        const response = await axios.get(`http://localhost:5277/api/usuario/${id}`);
        setUsername(response.data.username);
        setSenha(response.data.senha);
        setRole(response.data.role);
        setIsMecanico(response.data.isMecanico);
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
                    placeholder="username *"
                    name="username"
                    value={username}
                    onChange={ (e) => setUsername(e.target.value) }
                />
            </Form.Group>
            </div>
            <div className="first-line-corretion-size">
            <Form.Group style={{width:'230px'}}>
                <Form.Control
                    type="text"
                    placeholder="Senha *"
                    name="senha"
                    minLength={8}
                    maxLength={10}
                    value={senha}
                    onChange={(e)=> setSenha(e.target.value)}
                />
            </Form.Group>
            </div>
            <div className="first-line-corretion-size">
            <Form.Group style={{width:'110px',margin: '0px 0px 0px 50px'}}>
                <Form.Control
                     type="text"
                    placeholder="cliente ou mecanico"
                    name="role"
                    value={role}
                    onChange={(e)=> setRole(e.target.value)}
                />
            </Form.Group>
            </div>
            </div>
    
        <div className="second-line-type-date" style={{margin:'0px 0px 10px 10px'}}>
            <div className="second-line-corretion-size">
            <Form.Group style={{width:'680px'}}>
                <Form.Control
                    type="text"
                    placeholder="true ou false"
                    name="isMecanico"
                    value={isMecanico}
                    onChange={(e)=> setIsMecanico(e.target.value)}
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