import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
export default function SingleMoviesPage(props) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=02689249b40636b114a2add6006bff65&language=en-US`
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
        {/* <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About </h3>
              {movie.Plot}
              <hr />
              <a
                href={'https://www.imdb.com/title/' + movie.imdbID}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on IMDB
              </a>
              <Link to="/" className="btn btn-default text-light">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    // <Container className="mt-5">
    //   <Row>
    //     <Col md="6">
    //       <img
    //         src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    //         alt=""
    //       />
    //     </Col>
    //     <Col md="6">
    //       <h2>{movie.title}</h2>
    //       <p>{movie.overview}</p>
    //       <ul>
    //         <li>Revenue:{movie.revenue}</li>
    //         <li>Popularity:{movie.popularity}</li>
    //         <li>original_language:{movie.original_language}</li>
    //         <li>
    //           Generes:
    //           {Array.isArray(movie.genres) &&
    //             movie.genres.map(el => <span className="ml-2">{el.name}</span>)}
    //         </li>
    //         <li>release_date:{movie.release_date}</li>
    //       </ul>
    //     </Col>
    //   </Row>
    // </Container>
  );
}
