import React from 'react';
import Albums from '../components/Albums'
import Footer from '../components/Footer'
import LastSingle from '../components/LastSingle'


const Musica = () => {
    return (  
        <div className="content">
            <LastSingle/>
            <Albums/>
            <Footer/>
        </div>
    );
}
 
export default Musica;