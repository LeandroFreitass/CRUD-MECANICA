import {useContext, useState, useEffect} from 'react';
import {UsuariosContext} from '../contexts/UsuariosContext';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm'
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";

import '../index.css'



const Usuarios = ({employee}) => {

    const {deleteEmployee} = useContext(UsuariosContext)

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [employee])

    return (
        <>
            <td>{employee.username}</td>
            <td>{employee.senha}</td>
            <td>{employee.role}</td>
            <td>{employee.isMecanico}</td>
            <td>{employee.email}</td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal"><FaEdit/></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => deleteEmployee(employee.id)}  className="btn text-danger btn-act" data-toggle="modal"><FaRegTrashAlt /></button>
                </OverlayTrigger>
                
                
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Employee
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm theEmployee={employee} />
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

export default Usuarios;