import React from 'react'
import { useState,useEffect } from 'react'
import {useParams,useNavigate} from "react-router-dom"
import api from '../../services/api'
import Loading from '../../components/loading/loading'
import "./filme.css"
import {toast} from 'react-toastify'

const index = () => {
  const [filmeDetails,setFilmesDetrails]=useState()
  const [loading,setLoading]=useState(true)
  const [listFilme,setListFilme]=useState([])
  const [filmeAdd,setFilmeAdd]=useState(false)
  const navigate=useNavigate()

    const {id}= useParams()
  
    useEffect(()=>{
      const loadingDetails=async()=>{
         await api.get(`/movie/${id}`,{
            params:{
              api_key:"5f0afc8c7af609f0ecd479b8d5bfa989",
              language:"pt-BR"
            }
          }).then((resposta)=>{
            setFilmesDetrails(resposta.data)
            console.log(resposta.data)
            setLoading(false)
          }).catch(()=>{
            console.log("Filme Não Encontrado")
            navigate("/",{replace:true})
            return;
          })
      }
      loadingDetails()

      return()=>{
        console.log("demontado")
      }
    },[id,navigate])

    function handleSave(filmeDetails){
      const minhaLista=localStorage.getItem("@filmesFav")
      let filmesSalvos=JSON.parse(minhaLista)||[];

      const hasFilme=filmesSalvos.some((filmesSalvo)=>filmesSalvo.id===filmeDetails.id)

      if (hasFilme){
        setFilmeAdd(true)
        toast.warn("Este filme ja foi adicionado!")
        
        return
      }

      filmesSalvos.push(filmeDetails)
      localStorage.setItem("@filmesFav",JSON.stringify(filmesSalvos));

      toast.success("Filme salvo com sucesso!")
      console.log(filmesSalvos);
      
    }

    
    if (loading){
      return (
        <Loading/>
      )
    }
    return (
      <div className='filmeDetails'>
        <img src={`https://image.tmdb.org/t/p/original/${filmeDetails.backdrop_path}`} alt={filmeDetails.title}  />
        <h1>{filmeDetails&&(<h1>{filmeDetails.title}</h1>)}</h1> 
        <h3>Sinopse</h3>
        <span>{filmeDetails.overview}</span>
        <div className='container-avaliation'>
          <div><span >Avaliação: </span><span className='indice'>{filmeDetails.vote_average}</span></div>
          <div><span>Votos: </span><span  className='indice'>{filmeDetails.vote_count}</span></div>
        </div>
        <div className='area-button'>
          <button onClick={()=>handleSave(filmeDetails)}>Salvar</button>
          <button><a target='blank' rel='external' href={`https://www.youtube.com/results?search_query=${filmeDetails.title} trailer`}>Trailer</a></button>
        </div>
        <div>
          {filmeAdd&&(<span>Esse Filme ja foi Adicionado!</span>)}
        </div>
      </div>
  ) 
}

export default index