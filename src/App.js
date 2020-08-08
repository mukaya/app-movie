import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Accueil from './screens/Accueil';
import Films from './screens/Films/Films';
import "bootstrap/dist/css/bootstrap.min.css";
import AllFilms from './screens/AllFilms/AllFilms';
import Footer from './components/Footer';
import Recherche from './screens/Recherche/Recherche';

const App = () =>{
  return (
   <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/films/:id" component={Films} />
        <Route exact path="/allfilms" component={AllFilms} />
        <Route exact path="/recherche" component={Recherche}/>
      </Switch>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
