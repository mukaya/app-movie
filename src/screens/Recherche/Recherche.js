import React, {useState, useEffect, Fragment} from 'react'
import Spinner from '../../components/Spinner';
import { ContainerCard } from '../AllFilms/style';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch ,useSelector } from 'react-redux';

const Recherche = () => {
    const dispatch = useDispatch();
    const {dataSearch} = useSelector((state)=>{
        return state.dataFilms;
    });
    const {loading} = useSelector((state)=>{
        return state.dataFilms;
    });
    console.log(loading);
    const [dataFilms, setDataFilms] = useState([]);
    const getAllFilms = async () =>{
        dispatch({type:"LOADING",payload:true})
        let apiKey = "02689249b40636b114a2add6006bff65";
        await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
        .then(res => {
            setDataFilms(res.data.results);
            dispatch({type:"LOADING",payload:false})
        })
        .catch(err => {
            console.error(err); 
        })
    }
    useEffect(()=>{
        getAllFilms();
    },[]);
    const filmsFind = dataFilms.filter((film) => {
        return film.original_title.toLowerCase().includes(dataSearch.toLowerCase());  
      });
    return (
        <ContainerCard>
            <div className="ligne">
           {
              filmsFind.length ? filmsFind.map(film=>{
                   return(
                       <Fragment>
                        <div className="card" >
                            <img style={{width:'100%'}} src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt=""/>
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
