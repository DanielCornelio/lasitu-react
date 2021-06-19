import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Conciertos from '../pages/Conciertos';
import Musica from '../pages/Musica';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Conocenos from '../pages/Conocenos';
import Contacto from '../pages/Contacto';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
    return (  
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/contacto" component={Contacto}/>
                <Route exact path="/conocenos" component={Conocenos}/>
                <Route exact path="/musica" component={Musica}/>
                <Route exact path="/conciertos" component={Conciertos}/>
                <Route exact path="/" component={Home}/>
                <Route path="*" component={NotFound}/>


            </Switch>
        </Router>

    );
}
 
export default AppRouter;