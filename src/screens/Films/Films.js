import React, { useEffect, useState } from "react";
import Axios from "axios";
import { APIKey } from '../../APIKey';

export default function SingleMoviesPage(props) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${APIKey}&language=en-US`
    )
      .then(res => {
        setMovie(res.data);
        console.log(res.data);
      })
      .catch(err => console.error(err));
  }, [props.match.params.id]);
  return (
    <div className="container" style={{marginTop:'80px'}}>
        <div className="row">
          <div className="col-md-4">
            <img 
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
            className="thumbnail" 
            alt={movie.title} 
            style={{width:'100%'}}
            />
          </div>
          <div className="col-md-8">
            <h1 className="mb-4">{movie.title}</h1>
            {/* <ul className="pst-group"> */}
            <p>
                <strong>Genre:</strong> 
                {Array.isArray(movie.genres) &&
                 movie.genres.map(el => <span  key={el.id} className="ml-2">{el.name+','}</span>)}
              </p>
              <p>
                <strong>Langue originale:</strong> {movie.original_language === "en" ? "Anglais": "Français"}
              </p>
              <p>
                <strong>Date de sortie:</strong> {movie.release_date}
              </p>
              <p>
                <strong>Nombre de vote:</strong> {movie.vote_count}
              </p>
              <p>
                <strong>Moyenne des votes:</strong> {movie.vote_average}
              </p>
              <p>
                <strong>Popularité:</strong> {movie.popularity}
              </p>
              <p>
                <strong>Slogan:</strong> {movie.tagpne}
              </p>
              <p>
                <strong>Sociétés de production:</strong>
                {Array.isArray(movie.genres) &&
                 movie.production_companies.map(el => <span key={el.id} className="ml-2">{el.name+','}</span>)}
              </p>
              <p>
                <strong>Pays de production:</strong>
                {Array.isArray(movie.genres) &&
                 movie.production_countries.map(el => <span  key={el.id} className="ml-2">{el.name+','}</span>)}
              </p>
              <p>
                <strong>Description:</strong> {movie.overview}
              </p>
            {/* </ul> */}
          </div>
        </div>
      </div>
  );
}
