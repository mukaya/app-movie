import React,{useState} from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { NavWrapper } from "./style";
import { Link, useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useDispatch} from 'react-redux';

export default function Navbars(){
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const history = useHistory();
  const onRecherche = (e) => {
      setSearch(e.target.value);
      dispatch({type:'SEARCH_FILM',payload:search});
      history.push('/recherche');
  }
  return (
    <NavWrapper>
      <Container>
        <Navbar expand="lg" style={{background:'#2B3B51',marginBottom:'100px',position:"fixed",top:0,left:0,width:'100%',zIndex:2}}>
          <Link to="/" style={{color:'#C4C4C4', fontSize:'26px', fontWeight:900}}> 
            <span style={{color:"blue"}}>BEST</span> FIMLS
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
              <FaSearch
              style={{cursor:'pointer'}}
              />
              <FormControl
                type="text"
                placeholder="Chercher votre films ici..."
                className="mr-sm-1"
                onChange={onRecherche}
              />
            </Form>
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">
                Acceuil
              </Link>
              <Link to="/allfilms" className="nav-link">
                Films
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </NavWrapper>
  );
}
