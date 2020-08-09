import React, { useEffect,useState } from "react";
import Carousel from "../../components/Carousel";
import { HomeWrapper } from "./style";
import axios from 'axios';
import { APIKey } from '../../APIKey';

const Accueil = () => {
  const [topFilms, setTopFilms] = useState([]);
  const getTopMovie = async() =>{
    await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=en-US&page=20`)
    .then(res=>{
      setTopFilms(res.data.results);
    })
    .catch(err=>console.log(err));
  }  
  useEffect(()=>{
    getTopMovie();
  },[]);
  return (
    <HomeWrapper>
      <Carousel movie={topFilms} />
    </HomeWrapper>
  );
}
export default Accueil;