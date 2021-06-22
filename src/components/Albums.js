import React from 'react';
import Title from '../components/Title'
import '../assets/styles/Albums.css'

import fantasma from '../assets/img/albums/fantasma.jpg'
import feroz from '../assets/img/albums/feroz.jpg'
import lasitud from '../assets/img/albums/lasitud.jpg'


const Albums = () => {
    return (  
        <div className="albums">
            
            <div className="tituloAlbums">
                <Title
                    titulo="Albums"
                />
            </div>
            <div className="albumItems">
                <div className="item">
                    <img src={lasitud} alt="lasitud" />
                    <h3>Lasitud</h3>
                </div>
                <div className="item">
                    <img src={fantasma} className="borde" alt="fantasma" />
                    <h3>Fantasma</h3>
                </div>
                <div className="item">
                    <img src={feroz} alt="feroz" />
                    <h3>Feroz</h3>
                </div>

            </div>

        </div>
    );
}
 
export default Albums;