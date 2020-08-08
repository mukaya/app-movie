import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import Carousel from "../components/Carousel";
import { HomeWrapper } from "./style";

export default function Accueil() {
  const [nowPlaying, setnowPlaying] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);
  const [topRated, settopRated] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, []);
  const getAllMovies = async () => {
    let apiKey = "de08f93ecdae7e1e97d442421d8f6997";
    const allMovies = await Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=6`);
    // const allMovies = await Axios.all([
    //   Axios.get(
    //     `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    //   ),
    //   Axios.get(
    //     `c`
    //   ),
    //   Axios.get(
    //     `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    //   )
    // ]);
    // setnowPlaying(allMovies[0].data.results);
    // setpopularMovies(allMovies[1].data.results);
    // settopRated(allMovies[2].data.results);

    setnowPlaying(allMovies.data.results);
  };

  return (
    <HomeWrapper>
      <Carousel movie={nowPlaying} />
    </HomeWrapper>
  );
}
