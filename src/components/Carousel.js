import React, {Fragment,useState} from "react";
import { Container, Card, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from './Spinner';
import ModalDetail from '../components/ModalDetail';

export default function Carousel({ movie }) {
    const [MonFilm, setMonFilm] = useState('');
    
    const [showM, setShowM] = useState(false);
    const handleClose = () => {
      setShowM(false);
    }
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

 

  return (
    <Container style={{marginTop:'80px', marginBottom:'80px'}}>
      <div className="clearfix mt-5 mb-2">
        <Row>
          <Col>
            <h4 className="float-left">Top Films</h4>
          <Link className="float-right text-uppercase" to="/allfilms">
            Voir tous les films
        </Link>
          </Col>
        </Row>
      </div>
      <Slider {...settings}>
        {
        movie.length ?
        movie.map(function(movie) {
          return (
            <Fragment key={movie.id}>
              <div>
                <Col xs={12}>
                  <Card>
                    <Card.Img
                      variant="top"
                      style={{width:'100%',
                      height:'100%', cursor:'pointer'}} 
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      onClick={()=>{
                        setMonFilm(movie.id);
                        setShowM(true);
                    }}
                    />
                  </Card>
                </Col>
              </div>
            </Fragment>
          );
        })
        : <Spinner/>
      }
      </Slider>
      <ModalDetail handleShow={showM} handleClose={handleClose} id={MonFilm}/>
    </Container>
  );
}
