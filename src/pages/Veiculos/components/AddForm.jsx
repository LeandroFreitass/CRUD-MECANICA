
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
      await axios.post("http://localhost:5277/api/Veiculo", {
        ...data,
      });
      navigate("/");
    };
  
  
     return (

        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="idCliente "
                    name="idCliente"
                    {...register("idCliente")}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="marca "
                    name="marca"
                    {...register("marca")}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="modelo"
                    name="modelo"
                    {...register("modelo")}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="placa"
                    name="placa"
                    {...register("placa")}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="tamanho"
                    name="tamanho"
                    {...register("tamanho")}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="ano"
                    name="ano"
                    {...register("ano")}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="combustivel"
                    name="combustivel"
                    {...register("combustivel")}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Employee
            </Button>
        </Form>

     )
}

export default AddForm;