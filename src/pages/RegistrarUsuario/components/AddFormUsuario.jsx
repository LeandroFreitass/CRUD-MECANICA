
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


export default function AddFormUsuario() {

const user = JSON.parse(localStorage.getItem("user"));

useEffect{
    axios.(urlAPI, {headers: {Authorization: 'Bearer' + user.token}})
    .then.setState({lista_usuario: resp.data });
},
(error) => { const _mens = (error.response &&
     error.response.data && 
     error.response.data.message) ||
      error.message || error.toString();
    this.setState({mens: _mens});
}

render(){
    return(
        <Main title = {title}> 
        {(this.mens) ? "Erro" + this.mens: this.renderForm(), this.renderTable()} </Main>
    )
}

const AddFormUsuario = () =>{
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, setFocus } = useForm();
  

    function refreshPage(){ 
        window.location.reload(); 
    }
    const onSubmit = async (data) => {
      await axios.post("http://localhost:5277/api/Usuario", {
        ...data,
      });
      navigate("/registrarusuario");
    };
  
     return (
        <>
        <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Registro de <b> Usuário </b></h2>
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
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="role"
                name="role"
                {...register("role")}
            />
        </Form.Group>
            <Form.Group>
            <Form.Control
                type="text"
                placeholder="email"
                name="email"
                maxLength={100}
                {...register("email")}
            />
        </Form.Group>
        <Button variant="success" type="submit" block onClick={ refreshPage }>
            Adicionar Usuário
        </Button>
    </Form>
   </>

     )
}

}