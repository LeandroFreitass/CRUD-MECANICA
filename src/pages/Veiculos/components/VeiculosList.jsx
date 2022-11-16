import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {VeiculosContext} from '../contexts/VeiculosContext';
import Employee from './Veiculos';
import AddForm from './AddForm';
// import Pagination from './Pagination';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCar } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";

import '../index.css'

const EmployeeList = () => {

    const {sortedEmployees} = useContext(VeiculosContext);
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
        const response = await axios.get("http://localhost:5277/api/Veiculo");
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
                  <th>IDCliente</th>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>placa</th>
                  <th>Tipo</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                {aPIData.map((product, index) => (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.idCliente}</td>
                    <td>{product.marca}</td>
                    <td>{product.modelo}</td>
                    <td>{product.placa}</td>
                    <td>{product.tamanho}</td>
                    <td></td>
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

export default EmployeeList;