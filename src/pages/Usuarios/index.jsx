import React from 'react'
import UsuariosList from './components/UsuariosList';
// import ClientesContextProvider from './contexts/ClientesContext';
import './index.css'

export default function Usuarios() {
	return (
	    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          
            <UsuariosList />
        
        </div>
      </div>
    </div>

	)
}
