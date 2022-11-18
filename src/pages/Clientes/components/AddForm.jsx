
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
      await axios.post("http://localhost:5277/api/cliente", {
        ...data,
      });
      navigate("/clientes");
    };
  
     return (
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="cpf "
                name="cpf"
                maxLength={11}
                {...register("cpf")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="nome Completo "
                name="nomeCompleto"
                {...register("nomeCompleto")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="date"
                placeholder="Data Nasc."
                name="DataNasc"
                {...register("DataNasc")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="Endereco Completo"
                name="EnderecoCompleto"
                {...register("EnderecoCompleto")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="celular"
                name="celular"
                maxLength={11}
                {...register("celular")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="email"
                name="email"
                {...register("email")}
            />
        </Form.Group>
        <Button variant="success" type="submit" block onClick={ refreshPage }>
            Adicionar Clientes
        </Button>
    </Form>

     )
}

export default AddForm;