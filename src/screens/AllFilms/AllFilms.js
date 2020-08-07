import React,{useState, useEffect} from 'react'
import { ContainerCard } from './style';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import Chargement from '../../components/Chargement';

const AllFilms = () => {
    const [dataFilms, setDataFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [filmsByPage] = useState(10);

    const getAllFilms = async () => {
        let apiKey = "02689249b40636b114a2add6006bff65";
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
        .then(res => {
            setLoading(true);
            setDataFilms(res.data.results);
            setLoading(false);
        })
        .catch(err => {
            console.error(err); 
        })
    }
    useEffect(()=>{
        getAllFilms();
    },[]);

    const indexOfLastFilm = currentPage * filmsByPage;
    const indexOfFistFilm = indexOfLastFilm - filmsByPage;
    const currentFilm = dataFilms.slice(indexOfFistFilm, indexOfLastFilm); 

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <ContainerCard>  
        <div className="ligne"> 
        {!loading ?
            currentFilm.map(film=>{
                return(
                    <div className="card" key={film.id}>
                        <img style={{width:'100%'}} src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt=""/>
                        <div className="card-body">
                        <p>
                            {film.original_title}
                        </p>
                        <Link to={`/films/${film.id}`} className="btn">Voir le detail</Link>
                    </div>
                    </div>
                )
            }): <Chargement/>
        }
        </div>
        <div style={{margin:'0 auto', width:'50px'}}>
        <Pagination filmsByPage={filmsByPage} totalFilm={dataFilms.length} paginate={paginate}/>
        </div>
  </ContainerCard>
    )
}

export default AllFilms;
