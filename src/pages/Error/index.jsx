import React from 'react'
import "./Error.css"
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div className="text-center">
        <h1 >Error 404</h1>
        <h2>Página não encontrada!</h2>
        <Link to="/" >Vejas todos os filmes!</Link>
        
    </div>
  )
}

export default Error