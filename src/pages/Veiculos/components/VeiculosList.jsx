import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {VeiculosContext} from '../contexts/VeiculosContext';
import Employee from './Veiculos';
import AddForm from './AddForm';
// import Pagination from './Pagination';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCar,FaTrash, FaEdit } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";

import '../index.css'
import { Link } from 'react-router-dom';

const EmployeeList = () => {

    const {sortedEmployees} = useContext(VeiculosContext);
    const [aPIData, setAPIData] = useState([])

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    useEffect(() => {
        getProducts();
      }, []);
      
      const getProducts = async () => {
        const response = await axios.get("http://localhost:5277/api/Veiculo");
        setAPIData(response.data);
      };

      const deleteProduct = async (idVeiculo) => {
        await axios.delete(`http://localhost:5277/api/Veiculo/${idVeiculo}`);
        getProducts();
        
    }

  

    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Cadastro de <b>Veiculos</b></h2>
            </div>
            <div className="col-sm-6">
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><FaCar style={{display:'inline-flex', margin:'0px 0px 0px 10px'}}/> <span>Cadastro</span></Button>					
            </div>
        </div>
    </div>

    <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>placa</th>
                  <th>Tipo</th>
                  <th>Ano Fab.</th>
                  <th>Tipo Cob.</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                {aPIData.map((product, index) => (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.marca}</td>
                    <td>{product.modelo}</td>
                    <td>{product.placa}</td>
                    <td>{product.tamanho}</td>
                    <td>{product.ano}</td>
                    <td>{product.combustivel}</td>
                    <td>

                    <Link to={"/editMa/" + product.id} data-toggle="tooltip">
                    <FaEdit/>
                      </Link>
                      
                      <a
                        onClick={() => deleteProduct(product.id)}
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
            Adicionar Veiculos
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

export default EmployeeList;