import React,{useState,Fragment, useEffect} from 'react';
import {Modal, Image} from 'react-bootstrap';
import axios from "axios";
import { APIKey } from '../APIKey';

const ModalDetail = ({handleShow,handleClose, id}) => {
  const [movie, setMovie] = useState({});
  //const [show, setShow] = useState(handleShow);
  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

    useEffect(()=>{
     //if(id){
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
      .then(res => {
        setMovie(res.data);
        console.log(res.data);
      }).catch(err => console.error(err));
    // }
    },[id]);
    return (
      <Fragment>
        <Modal show={handleShow}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
          <Modal.Header closeButton>
          <Modal.Title>{movie.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
            <div className="row">
          <div className="col-md-4">
            <Image 
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
            alt={movie.title} 
            style={{width:'100%'}}
            thumbnail
            />
          </div>
          <div className="col-md-8">
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
          </div>
          </div>
          </div>
          </Modal.Body>
          <Modal.Footer>
                <div>
                  <br/>
                </div>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }

export default ModalDetail;