import axios from "axios";

const API_URL = "http://localhost:5277/api/";

const user = JSON.parse(localStorage.getItem('user'));


const getPublicContent = () => {
    return axios.get(API_URL + "veiculo");
}

const getMecanicoBoard = async() => {
    return await axios.get(API_URL + "cliente", { headers: {
        Authorization: 'Bearer' + user.token} });
    };

    const UserService = {
     getPublicContent,
     getMecanicoBoard
    };


    export default UserService;
