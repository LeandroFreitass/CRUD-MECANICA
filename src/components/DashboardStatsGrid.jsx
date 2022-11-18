import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function DashboardStatsGrid() {
    const [aPIData, setAPIData] = useState([])
    const [veiculo, setVeiculo] = useState([])

    useEffect(() => {
        getProducts()
        getVeiculos()
    }, [])

    const getProducts = async () => {
        const response = await axios.get('http://localhost:5277/api/ordemdeservico')
        setAPIData(response.data)
    }

    const getVeiculos = async () => {
        const response = await axios.get('http://localhost:5277/api/Veiculo')
        setVeiculo(response.data)
    }

    return (
        <div style={{ margin: '0px 0px 0px 130px'}}>
            {aPIData.map((item, index) => (
                <Card style={{ width: '30rem', display:'inline-flex', margin: '10px 0px 0px 10px'}}>
                    <Card.Body>
                        <Card.Title> Mecanico responsavel - {item.nomeMecanico}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted" style={{fontWeight:'bold'}}> Numero do Veiculo - {item.idVeiculo}</Card.Subtitle>
                        <Card.Text>
                                   <view style={{color:'red'}}>Diagnostico informado pelo mecanico</view> - {item.diagnostico}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}
