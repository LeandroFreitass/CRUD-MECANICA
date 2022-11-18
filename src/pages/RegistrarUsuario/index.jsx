import React from 'react'
import AddFormUsuario from './components/AddFormUsuario';
// import ClientesContextProvider from './contexts/ClientesContext';
import './index.css'

export default function registrarUsuario() {
	return (
	    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          
            <AddFormUsuario />
        
        </div>
      </div>
    </div>

	)
}
