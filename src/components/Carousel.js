import React, {Fragment} from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ movie }) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <Container style={{marginTop:'80px'}}>
      <div className="clearfix mt-5 mb-2">
        <h4 className="float-left">Films Polulaires</h4>
        <Link className="float-right text-uppercase" to="/allfilms">
          Voir tous les films
        </Link>
      </div>
      <Slider {...settings}>
        {movie.map(function(movie) {
          return (
            <Fragment>
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
        })}
      </Slider>
    </Container>
  );
}
