import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { NavWrapper } from "./style";
import { Link, useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Navbars(){
  const history = useHistory();

  const onRecherche = () => {
      history.push('/recherche');
  }
  return (
    <NavWrapper>
      <Container>
        <Navbar expand="lg" fixed="top" style={{background:'#2B3B51',marginBottom:'100px'}}>
          <Link to="/" style={{color:'#C4C4C4', fontSize:'26px', fontWeight:900}}> 
            {/* <img src="/image/logo.svg" /> */}
            BEST FIMLS
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline onSubmit={onRecherche}>
              <FaSearch
              style={{cursor:'pointer'}}
              onClick={onRecherche}/>
              <FormControl
                type="text"
                placeholder="Chercher votre films ici..."
                className="mr-sm-1"
              />
            </Form>
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">
                Acceuil
              </Link>
              <Link to="/allfilms" className="nav-link">
                Films
              </Link>
              <Link to="/allseries" className="nav-link">
                Series
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </NavWrapper>
  );
}
