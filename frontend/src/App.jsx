import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import { initiateSocket, subscribeToEvent, disconnectSocket } from './socket.service'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    InputGroup,
    Table,
} from 'reactstrap'

import './index.css'


export function App() {
    const [inputUser, setInputUser] = useState('')
    const [inputPoints, setInputPoints] = useState('')
    const [inputDetail, setInputDetail] = useState('')
    const [modalAdd, setModalAdd] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)

    const toggleModalAdd = () => setModalAdd(!modalAdd)
    const toggleModalSuccess = () => setModalSuccess(!modalSuccess)

    const save = async () => {
        if (inputUser === null || inputUser === '') {
            alert('El campo usuario es obligatorio')
            return true
        }

        if (inputPoints === null || inputPoints === '') {
            alert('El campo puntos es obligatorio')
            return true
        }

        if (inputDetail === null || inputDetail === '') {
            alert('El campo detalle es obligatorio')
            return true
        }

        const data = {
            points: Number(inputPoints),
            detail: inputDetail,
        }

        const url = `http://localhost:3000/users/${inputUser}/acumular`

        const response = await axios.post(url, data)

        if (response && response.data.result) {
            setModalAdd(false)
            setModalSuccess(true)
            setTimeout(() => {
                setModalSuccess(false)
            }, 1000)
        } else {
            alert('A ocurrido un error. Por favor vuelva a intentarlo')
        }
    }

    /*useEffect(() => {
        initiateSocket()
        subscribeToEvent('test')
    }, [])*/
    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <h1 className="text-center">Bienvenid@</h1>
                    <div className="col-md-12 mt-5">
                        <Button
                            className="float-end mb-3"
                            color="primary"
                            onClick={toggleModalAdd}
                        >
                            Agregar
                        </Button>
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Usuario</th>
                                    <th>Puntos</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center" colSpan="4">
                                        No existen usuario
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalAdd} toggle={toggleModalAdd}>
                <ModalHeader>Agregar puntos</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <Input
                            type="text"
                            placeholder="Usuario"
                            value={inputUser}
                            onChange={(e) => {
                                setInputUser(e.target.value)
                            }}
                        />
                        <Input
                            type="number"
                            placeholder="Puntos"
                            value={inputPoints}
                            onChange={(e) => {
                                setInputPoints(e.target.value)
                            }}
                        />
                    </InputGroup>
                    <Input
                        className="mt-3"
                        type="textarea"
                        placeholder="Detalle"
                        value={inputDetail}
                        onChange={(e) => {
                            setInputDetail(e.target.value)
                        }}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleModalAdd}>
                        Cancelar
                    </Button>{' '}
                    <Button color="primary" onClick={save}>
                        Guardar
                    </Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={modalSuccess} toggle={toggleModalSuccess}>
                <ModalBody>
                    <div className="success-checkmark">
                        <div className="check-icon">
                            <span className="icon-line line-tip"></span>
                            <span className="icon-line line-long"></span>
                            <div className="icon-circle"></div>
                            <div className="icon-fix"></div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}
