import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
export default function SingleMoviesPage(props) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=de08f93ecdae7e1e97d442421d8f6997&language=en-US`
    )
      .then(res => {
        setMovie(res.data);
        console.log(res.data);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="container" style={{marginTop:'80px'}}>
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.title}</h2>
            <ul className="list-group">
            <li className="list-group-item">
                <strong>Genre:</strong> 
                {Array.isArray(movie.genres) &&
                 movie.genres.map(el => <span  key={el.id} className="ml-2">{el.name+','}</span>)}
              </li>
              <li className="list-group-item">
                <strong>Langue originale:</strong> {movie.original_language === "en" ? "Anglais": "Français"}
              </li>
              <li className="list-group-item">
                <strong>Date de sortie:</strong> {movie.release_date}
              </li>
              <li className="list-group-item">
                <strong>Nombre de vote:</strong> {movie.vote_count}
              </li>
              <li className="list-group-item">
                <strong>Moyenne des votes:</strong> {movie.vote_average}
              </li>
              <li className="list-group-item">
                <strong>Popularité:</strong> {movie.popularity}
              </li>
              <li className="list-group-item">
                <strong>Slogan:</strong> {movie.tagline}
              </li>
              <li className="list-group-item">
                <strong>Sociétés de production:</strong>
                {Array.isArray(movie.genres) &&
                 movie.production_companies.map(el => <span key={el.id} className="ml-2">{el.name+','}</span>)}
              </li>
              <li className="list-group-item">
                <strong>Pays de production:</strong>
                {Array.isArray(movie.genres) &&
                 movie.production_countries.map(el => <span  key={el.id} className="ml-2">{el.name+','}</span>)}
              </li>
              <li className="list-group-item">
                <strong>Description:</strong> {movie.overview}
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}
