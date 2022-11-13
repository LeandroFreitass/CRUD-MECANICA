import React from 'react'
import OrcamentosList from './components/OrcamentosList';
import OrcamentosContextProvider from './contexts/OrcamentosContext';
import './index.css'

export default function Orcamentos() {
  return (
    <div className="container-xl">
    <div className="table-responsive">
      <div className="table-wrapper">
        <OrcamentosContextProvider>
          <OrcamentosList />
        </OrcamentosContextProvider>
      </div>
    </div>
  </div>
  )
}
