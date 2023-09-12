import {useEffect,useState,React} from 'react'
import {Link} from 'react-router-dom'
import api from "../../services/api"
import "./Home.css"
import Loading from '../../components/loading/loading'

const Home = () => {


  const [filmes,setFilmes]=useState([])
  const [loading,setLoading]=useState(true)
 
  useEffect(()=>{
    async function loadFilmes(){
      try{
        const [filmesResponse]=  await Promise.all([
          api.get("movie/now_playing",{
            params:{
              api_key:"5f0afc8c7af609f0ecd479b8d5bfa989",
              language:"pt-BR",
              page:1,
            }
          })
        ]) 
        const filmesData= filmesResponse.data.results
        setFilmes(filmesData)
      } catch (error){
        console.error(error)
      }
    }
    setLoading(false)
    loadFilmes()
  },[])

  if (loading){
    return(
      <Loading/>
    )
    
  }
  return (
    <article className='filmes'>
        {filmes.map((filme)=>(
           
          <div className='filme-container' key={filme.id}>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}  />
            <Link className='container-link' to={`/filme/${filme.id}`} >Acessar</Link>
          </div>          
        ))} 
    </article>
  )
  
}

export default Home