import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AddForm from './AddForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser,FaTrash, FaEdit  } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";

import '../index.css'
import { Link } from 'react-router-dom';
import { cpfMask, phoneMask } from '../../../components/maskara/mask';
import UserService  from '../../../services/UserService';

const title = "Cadastro de Alunos";

export default function ClientesList() {

  

    const [aPIData, setAPIData] = useState([])


    const [abrindo, setAbrindo] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
   
    const tentativaAbrir = () => setAbrindo(true);
    const tentativaFechar = () => setAbrindo(false);
   
     const [lista, setLista] = useState([]);
     const [mens, setMens] = useState([]);

    useEffect(() => {
        getProducts();
        UserService.getMecanicoBoard().then(
          (response) => {
            console.log("useEffect getMecanicoBoard" + response.data)
            setLista(response.data);
            setMens(null);
          },
          (error) => {
            const _mens =
            (error.response && error.response.data && error.response.data.message) ||
            error.message || error.toString(); setMens(_mens); console.log("_mens: " + _mens);
          }
      
        );
      }, []);
      
      const getProducts = async () => {
        const response = await axios.get("http://localhost:5277/api/Cliente");
        setAPIData(response.data);
      };


      const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5277/api/Cliente/${id}`);
        getProducts();
        
    }


    return (
    <>
    if(UserService.)
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Cadastro de <b>Clientes</b></h2>
            </div>
            <div className="col-sm-6">
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><FaUser style={{display:'inline-flex', margin:'0px 0px 0px 10px'}}/> <span>Cadastro</span></Button>					
            </div>
        </div>
    </div>

    <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  {/* <th>ID</th> */}
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Data Nascimento</th>
                  <th>Celular</th>
                  <th>Email</th>
                  <th>Endereço</th>
                  <th style={{width:'30px'}}>Ação</th>
                </tr>
              </thead>
              <tbody>
                {aPIData.map((item, index) => (
                  <tr key={item.id}>
                    {/* <td>{index + 1}</td> */}
                    <td style={{fontSize:'12px'}}>{item.nomeCompleto}</td>
                    <td style={{fontSize:'12px'}}>{cpfMask(item.cpf)}</td>
                    <td style={{fontSize:'12px'}}>{item.dataNasc}</td>
                    <td style={{fontSize:'12px'}}>{phoneMask(item.celular)}</td>
                    <td style={{fontSize:'12px'}}>{item.email}</td>
                    <td style={{fontSize:'12px'}}>{item.enderecoCompleto}</td>
                    <td>
                      <Link to={"/client/" + item.id} data-toggle="tooltip">
                        <FaEdit/>
                      </Link>

                      <a
                        onClick={() => deleteProduct(item.id)}
                        data-toggle="tooltip"
                        style={{ color: "red", cursor: 'pointer' }}
                      >
                        <FaTrash/>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Employee
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>



    <Modal show={abrindo} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
            Adicionar Clientes
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar Modal
                </Button>
        </Modal.Footer>
    </Modal>
    </>

    )

}


return(
  <div title={title}>
{(mens) ? "Problema com conexão ou autorização (contactar administrador)." : renderTable()}

</div>
)