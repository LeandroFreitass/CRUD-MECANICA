
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
      await axios.post("http://localhost:5277/api/OrdemDeServico", {
        ...data,
      });
      navigate("/");
    };

     return (
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="idCliente *"
                name="idCliente"
                required
                {...register("idCliente")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="idVeiculo *"
                name="idVeiculo"
                required
                {...register("idVeiculo")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="nomeMecanico"
                name="nomeMecanico"
                {...register("nomeMecanico")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="defeitoReclamado"
                name="defeitoReclamado"
                {...register("defeitoReclamado")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="diagnostico"
                name="diagnostico"
                {...register("diagnostico")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="DataPgto"
                name="DataPgto"
                {...register("DataPgto")}
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
                type="text"
                placeholder="FormaPgto"
                name="FormaPgto"
                {...register("FormaPgto")}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="ValorPgto"
                name="ValorPgto"
                {...register("ValorPgto")}
            />
        </Form.Group>
        <Button variant="success" type="submit" block>
            Add New Employee
        </Button>
    </Form>

     )
}

export default AddForm;