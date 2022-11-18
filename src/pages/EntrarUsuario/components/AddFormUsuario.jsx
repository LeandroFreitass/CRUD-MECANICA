
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




const AddFormUsuario = () =>{
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, setFocus } = useForm();
  
    function refreshPage(){ 
        window.location.reload(); 
    }
    const onSubmit = async (data) => {
      await axios.post("http://localhost:5277/api/Home/login", {
        ...data,
      });
      navigate("/entrarusuario");
    };
  
     return (
        <>
        <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2> Logar <b> Usuário </b></h2>
                <br/><br/>
                </div>
               </div> 
               </div>
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
        <Button variant="success" type="submit" block onClick={ refreshPage }>
            Fazer login/entrar
        </Button>
    </Form>
   </>

     )
}

export default AddFormUsuario;