import React from 'react'
import ClientesList from './components/ClientesList';
// import ClientesContextProvider from './contexts/ClientesContext';
import './index.css'

export default function Clientes() {
	return (
	    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          
            <ClientesList />
        
        </div>
      </div>
    </div>

	)
}
