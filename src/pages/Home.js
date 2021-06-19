import React from 'react';
import Banner from '../components/Banner';
import ProximoConcierto from '../components/ProximoConcierto';
import ProximosEventos from '../components/ProximosEventos';

import Footer from '../components/Footer';

const Home = () => {
    return (  
        <div className="content">
            <Banner/>
            <ProximoConcierto/>
            <ProximosEventos/>
            <Footer/>
        </div>
    );
}
 
export default Home;