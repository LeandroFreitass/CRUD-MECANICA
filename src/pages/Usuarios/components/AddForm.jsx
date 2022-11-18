
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css'
import { phoneMask } from "../../../components/maskara/mask";
import { IMaskInput } from "react-imask";
import InputMask from "react-input-mask";




const AddForm = () =>{
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, setFocus } = useForm();
  
    function refreshPage(){ 
        window.location.reload(); 
    }
    const onSubmit = async (data) => {
      await axios.post("http://localhost:5277/api/Usuario", {
        ...data,
      });
      navigate("/usuarios");
    };
  
     return (
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="username "
                name="username"
                maxLength={15}
                {...register("username")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="senha "
                name="senha"
                minLength={8}
                maxLength={10}
                {...register("senha")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder=" role: cliente ou mecanico"
                name="role"
                {...register("role")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder=" isMecanico: true ou false"
                name="isMecanico"
                {...register("isMecanico")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="email@example.com"
                name="email"
                maxLength={100}
                {...register("email")}
            />
        </Form.Group>
        <Button variant="success" type="submit" block onClick={ refreshPage }>
            Adicionar Usuário
        </Button>
    </Form>

     )
}

export default AddForm;