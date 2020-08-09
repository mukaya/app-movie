import React, {useState, useEffect, Fragment} from 'react'
import Spinner from '../../components/Spinner';
import { ContainerCard } from '../AllFilms/style';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useSelector } from 'react-redux';
import {APIKey} from '../../APIKey';

const Recherche = () => {
    let {dataSearch} = useSelector((state)=>{
        return state.dataFilms;
    });
    const [dataFilms, setDataFilms] = useState([]);
    const getAllFilms = async () =>{
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${dataSearch}`)
        .then(res => {
            setDataFilms(res.data.results);
        })
        .catch(err => {
            console.error(err); 
        })
   }
    useEffect(()=>{
        getAllFilms();
    },[dataSearch]);
    return (
        <ContainerCard>
            <div className="ligne">
           {
              dataFilms.length ? dataFilms.map(film=>{
                   return(
                       <Fragment>
                        <div className="card" >
                            <img style={{width:'100%'}} src={`${film.poster_path ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`:null}`} alt=""/>
                            <div className="card-body">
                            <p>
                                {film.original_title}
                            </p>
                            <Link to={`/films/${film.id}`} className="btn">Voir le detail</Link>
                        </div>
                        </div>
                       </Fragment>
                   );
               })
               : <Spinner/>
           }
            </div>
        </ContainerCard>
    )
}

export default Recherche
