import { React, useState } from "react";
import { useNavigate } from "route-router";

import "./Login.css";

import AuthService from "./components/services/AuthService";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage]   = useState("");
    const navigate = useNavigate();

const handleChangeUsername = (e) =>
{
    setUsername(e.target.value),
    setMessage("");
}

const handleChangePassword = (e) =>
{
    setPassword(e.target.value),
    setMessage("");
}

    async function handleSubmit(evento) {
        evento.preventDefault();
        const userFom = { username, password }; 

        if (!username || !password) {
            setMessage("Preencha o username e a senha para continuar!");
        } else {
           AuthService.login(username, password).then(
            () => {
                console.log("localStorage: " + localStorage.getItem("user"));
                navigate();
                window.location.reload();
            },
            (error) => {
              const resMessage =
              (error.response &&
               error.response.data &&
               error.response.data.message) ||
                error.message ||
                error.toString();
                setMessage(resMessage);  
                 } 
              );
           }
        
        }

return (
    <div className= "content">
        <h1 className="tituloAuth"> Login </h1>
        <form onSubmit={handleSubmit} className="formLogin" >
            <div>
                <label className="lblLogin" htmlFor="username"> Username: </label>
                <input
                 type="text"
                 value={username}
                 placeholder="Digite o e-mail"
                 className="inputAuth"
                 onChange={({ y } => { 
                    handleChangeUsername(y);
                    })}
                />
                </div>

                <div>
                <label className="lblLogin" htmlFor="senha"> Senha: </label>
                <input
                 type="password"
                 value={password}
                 placeholder="Digite a senha"
                 className="inputAuth"
                 
                />  
                    </div>

                <button type="submit"> Login </button>
                <h4 className ="msgErro"> {message} </h4>
                </form>
                </div>
          );

}
