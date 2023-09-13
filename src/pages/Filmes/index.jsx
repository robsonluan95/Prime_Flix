import React from 'react'
import "./FilmeFav.css"
import { useEffect,useState  } from 'react'
import {useNavigate} from "react-router-dom"
import { toast } from 'react-toastify'

const Filmes = () => {

  const [FilmesFav,setFilmeFav]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    const meusFilmes=localStorage.getItem("@filmesFav")
    const Filmes=JSON.parse(meusFilmes)||[]
    setFilmeFav(Filmes)
  },[])

  function handleNavigate(FilmesFav){
    navigate(`/filme/${FilmesFav}`)
    
  }
  function handleDelete(filmeid) {
    toast.success("Filme removido com sucesso!")
  
    const listaFilmes = FilmesFav.filter(item => item.id !== filmeid);
  
    localStorage.setItem('@filmesFav', JSON.stringify(listaFilmes));
  
    setFilmeFav(listaFilmes);
  }
  console.log(FilmesFav)

  if(FilmesFav.length===0){
    return(
      <div className='container-texto'>
        <p>Não há filmes favoritos</p>
      </div>
    )
  }

  return (
    <div>
        {FilmesFav?(FilmesFav.map((filme)=>(
            <div className='filmeFav'>
              <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}  />
              
              <div className='container-conteudo'>
                <div className='fundo-filme-container'>{filme&&(<h1 className='name-filme'>{filme.title}</h1>)} </div>
                
                <div className='container-indece'>
                  <div><span>Avaliação: </span><span className='indice'>{filme.vote_average.toFixed(2)}</span></div>
                  <div><span>Votos: </span><span  className='indice'>{filme.vote_count}</span></div>
                </div>
                <div className='container-botoes'>
                  <button onClick={()=>handleNavigate(filme.id)} className='btn-detalhes'>Detalhes</button>
                  <button onClick={()=>handleDelete(filme.id)} className='btn-excluir'>Deletar</button>
                </div>
                
              </div>
              
            </div>
          ))
        ):(
          <div>
            <p>Não há filmes favoritos</p>
          </div>
        
        )}
    </div>
  )
}

export default Filmes