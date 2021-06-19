import React from 'react';
import error from '../assets/img/14.svg'
import Title from './Title';
import Subtitle from './Subtitle'

import '../assets/styles/Error.css'


const Error = () => {
    return (  
        <div className="error">
            <div>
                <Title
                    titulo="Oops! Error 404"
                />
                <Subtitle
                    subtitulo="No podemos encontrar la página que buscas"
                />
            </div>

            <div className="img404">
                <img src={error} alt="404" />
            </div>
        </div>
    );
}
 
export default Error;