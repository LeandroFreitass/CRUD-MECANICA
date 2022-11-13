import React from 'react'
import DefeitoseServicosList from './components/DefeitoseServicosList';
import DefeitoseServicosContextProvider from './contexts/DefeitoseServicosContext';
import './index.css'

export default function DefeitoseServicos() {
  return (
    <div className="container-xl">
    <div className="table-responsive">
      <div className="table-wrapper">
        <DefeitoseServicosContextProvider>
          <DefeitoseServicosList />
        </DefeitoseServicosContextProvider>
      </div>
    </div>
  </div>
  )
}
