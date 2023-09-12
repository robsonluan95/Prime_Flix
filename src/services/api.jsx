import axios from 'axios';

// BASE da URL:: https://api.themoviedb.org/3/
// URL da API:: /now_playing?language=en-US&page=1'
//https://api.themoviedb.org/3/movie/now_playing?api_key=5f0afc8c7af609f0ecd479b8d5bfa989&language=en-US&page=1
const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/"
})
export default api;