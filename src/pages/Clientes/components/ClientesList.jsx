import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {ClientesContext} from '../contexts/ClientesContext';
import Employee from './Clientes';
import AddForm from './AddForm';
import Pagination from './Pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";

import '../index.css'
import { Link } from 'react-router-dom';

const ClientesList = () => {

    // const {sortedEmployees} = useContext(VeiculosContext);
    const [aPIData, setAPIData] = useState([])

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    // const [currentPage, setCurrentPage] = useState(1);
    // const [employeesPerPage] = useState(2)


    // const showToastMessage = () => {
    //     toast.success('Success Notification !', {
    //         position: toast.POSITION.TOP_RIGHT
    //     });
    // };

    // const handleShowAlert = () => {
    //     setShowAlert(true);
    //     setTimeout(()=> {
    //         setShowAlert(false);
    //     }, 2000)
    // }

    // useEffect(() => {
    //     handleClose();

    //     return () => {
    //         showToastMessage();
    //     }
    // }, [sortedEmployees])

    useEffect(() => {
        getProducts();
      }, []);
      
      const getProducts = async () => {
        const response = await axios.get("http://localhost:5277/api/Cliente");
        setAPIData(response.data);
      };

    // const indexOfLastEmployee = currentPage * employeesPerPage;
    // const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    // const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    // const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage);

  

    return (
    <>
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
                  <th>ID</th>
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
                    <td>{index + 1}</td>
                    <td >{item.nomeCompleto}</td>
                    <td >{item.cpf}</td>
                    <td >{item.dataNasc}</td>
                    <td >{item.celular}</td>
                    <td >{item.email}</td>
                    <td >{item.enderecoCompleto}</td>
                    <td>
                      <Link to={"/editMa/" + item.id} data-toggle="tooltip">
                        <i class="material-icons">&#xE254;</i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

    {/* <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentEmployees ={currentEmployees}
                sortedEmployees = {sortedEmployees} /> */}

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
    </>
    )

}

export default ClientesList;