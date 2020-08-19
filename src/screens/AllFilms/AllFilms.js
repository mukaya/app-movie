import React,{useState, useEffect} from 'react'
import { ContainerCard } from './style';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import {APIKey} from '../../APIKey';
import Spinner from '../../components/Spinner';
import ModalDetail from '../../components/ModalDetail';

const AllFilms = () => {
    const [MonFilm, setMonFilm] = useState(''); 
    const [showM, setShowM] = useState(false);
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

    const handleClose = () => {
        setShowM(false);
    }

    // const pagination = (activePage) => {
    //     setCurentPagePagination(activePage);
    //   };

    return (
        <ContainerCard>
         <ModalDetail handleShow={showM} handleClose={handleClose} id={MonFilm}/>
        <div className="ligne"> 
        {
            currentFilm.length ?
            currentFilm.map(film=>{
                return(
                    <div className="card" key={film.id}>
                        <img 
                        style={{width:'100%',
                        height:'100%', cursor:'pointer'}} 
                        src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} 
                        alt=""
                        onClick={()=>{
                            setMonFilm(film.id);
                            setShowM(true);
                        }}
                        />
                    </div>
                )
            })
            : <Spinner/>
        }
        </div>
        <div style={{margin:'20px auto', width:'50px'}}>
        <Pagination filmsByPage={filmsByPage} totalFilm={dataFilms.length} paginate={paginate} currentPage={currentPage}/>
            {/* <Pagination
              activePage={curentPagePagination}
              totalPages={dataFilms.total_pages}
              setActivePage={pagination}
            /> */}
        </div>
  </ContainerCard>
    )
}

export default AllFilms;
