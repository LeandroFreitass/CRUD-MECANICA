import React from 'react'
import MecanicosList from './components/MecanicosList';
import MecanicosContextProvider from './contexts/MecanicosContext';
import './index.css'

export default function Mecanico() {
	return (
	    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <MecanicosContextProvider>
            <MecanicosList />
          </MecanicosContextProvider>
        </div>
      </div>
    </div>

	)
}
