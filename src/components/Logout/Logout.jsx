import { useEffect } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router";


export default function Logout() {

    const navigate = useNavigate();

    useEffect(() => {
        AuthService.logout();
        console.log("logout");
        navigate("/login");
        window.location.reload();
    }, []);

    return (
        <div> Logout efetuado com sucesso !</div>
    )
}