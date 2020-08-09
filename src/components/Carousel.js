import React, {Fragment} from "react";
import { Container, Card, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ movie }) {
  
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        {movie.map(function(movie) {
          return (
            <Fragment key={movie.id}>
              <Link to={`/films/${movie.id}`}>
                <Col xs={12}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                  </Card>
                </Col>
              </Link>
            </Fragment>
          );
        })
      }
      </Slider>
    </Container>
  );
}
