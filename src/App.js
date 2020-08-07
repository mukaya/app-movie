import React,{Suspense} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Accueil from './screens/Accueil';
import Films from './screens/Films/Films';
import "bootstrap/dist/css/bootstrap.min.css";
import AllFilms from './screens/AllFilms/AllFilms';

const App = () =>{
  return (
   <BrowserRouter>
    <NavBar/>
    <Suspense fallback={"Chargement..."}>
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/films/:id" component={Films} />
        <Route exact path="/allfilms" component={AllFilms} />
      </Switch>
    </Suspense>
   </BrowserRouter>
  );
}

export default App;
