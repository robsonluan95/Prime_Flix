import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'


const Header = () => {


  return (
    <header>
        <Link className='logo' to="/">Prime Flix</Link>
        <Link className="favoritos" to="/favorito">Meus Filmes</Link>
    </header>
        
  )
}

export default Header