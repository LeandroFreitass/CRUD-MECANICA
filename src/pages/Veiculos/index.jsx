import React from 'react'
import VeiculosList from './components/VeiculosList';
import VeiculosContextProvider from './contexts/VeiculosContext';
import './index.css'

export default function Veiculos() {
  return (
    <div className="container-xl">
    <div className="table-responsive">
      <div className="table-wrapper">
        <VeiculosContextProvider>
          <VeiculosList />
        </VeiculosContextProvider>
      </div>
    </div>
  </div>
  )
}
