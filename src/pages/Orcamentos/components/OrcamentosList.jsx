import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {OrcamentosContext} from '../contexts/OrcamentosContext';
import Employee from './Orcamentos';
import AddForm from './AddForm';
import Pagination from './Pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaMoneyBill, FaTrash, FaEdit  } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";

import '../index.css'
import { Link } from 'react-router-dom';

const EmployeeList = () => {

    const [aPIData, setAPIData] = useState([])
    
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        getProducts();
      }, []);
      
      const getProducts = async () => {
        const response = await axios.get("http://localhost:5277/api/ordemdeservico");
        setAPIData(response.data);
      };

      const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5277/api/OrdemDeServico/${id}`);
        getProducts();
        
    }
  

    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Cadastro de <b>Ordens de Serviços</b></h2>
            </div>
            <div className="col-sm-6">
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><FaMoneyBill style={{display:'inline-flex', margin:'0px 0px 0px 10px'}}/> <span>Cadastro</span></Button>					
            </div>
        </div>
    </div>

    <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Nome Mecanico</th>
                  <th>Defeito Reclamado</th>
                  <th>Diagnostico</th>
                  <th>Data de Pagamento</th>
                  <th>Forma de Pagamento</th>
                  <th>Valor Pago(R$)</th>
                  <th style={{width:'80px'}}>Ação</th>
                </tr>
              </thead>
              <tbody>
                {aPIData.map((product, index) => (
                  <tr key={product.id}>
                    <td>{product.nomeMecanico}</td>
                    <td>{product.defeitoReclamado}</td>
                    <td>{product.diagnostico}</td>
                    <td>{product.dataPgto}</td>
                    <td>{product.formaPgto}</td>
                    <td>{product.valorPgto}</td>
                    <td>    
                      <Link to={"/ordemDeServico/" + product.id} data-toggle="tooltip">
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
            Ordem de Serviço
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