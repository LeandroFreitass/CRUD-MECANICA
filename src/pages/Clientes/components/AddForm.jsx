
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css'



const AddForm = () =>{
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, setFocus } = useForm();
  
    const onSubmit = async (data) => {
      console.log(data);
      await axios.post("http://localhost:5277/api/cliente", {
        ...data,
      });
      navigate("/");
    };
  
     return (
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="cpf "
                name="cpf"
                {...register("cpf")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="nomeCompleto "
                name="nomeCompleto"
                {...register("nomeCompleto")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="DataNasc"
                name="DataNasc"
                {...register("DataNasc")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="EnderecoCompleto"
                name="EnderecoCompleto"
                {...register("EnderecoCompleto")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="celular"
                name="celular"
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
        <Button variant="success" type="submit" block>
            Add New Employee
        </Button>
    </Form>

     )
}

export default AddForm;