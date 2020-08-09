import React,{useState, useEffect} from 'react'
import { ContainerCard } from './style';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import {APIKey} from '../../APIKey';
import Spinner from '../../components/Spinner';

const AllFilms = () => {
    const [dataFilms, setDataFilms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filmsByPage] = useState(8);
  
    const getAllFilms = async () => {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}&language=en-US`)
        .then(res => {
            setDataFilms(res.data.results);
        })
        .catch(err => {
            console.error(err); 
        })
    }
    useEffect(()=>{
        getAllFilms();
    },[dataFilms]);

    const indexOfLastFilm = currentPage * filmsByPage;
    const indexOfFistFilm = indexOfLastFilm - filmsByPage;
    const currentFilm = dataFilms.slice(indexOfFistFilm, indexOfLastFilm); 

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <ContainerCard>  
        <div className="ligne"> 
        {
            currentFilm.length ?
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
            })
            : <Spinner/>
        }
        </div>
        <div style={{margin:'20px auto', width:'50px'}}>
        <Pagination filmsByPage={filmsByPage} totalFilm={dataFilms.length} paginate={paginate} currentPage={currentPage}/>
        </div>
  </ContainerCard>
    )
}

export default AllFilms;
