import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import Countdown from './Countdown';
import '../assets/styles/ProximoConcierto.css'

const ProximoConcierto = () => {
    return (  
        <div className="proximoConcierto">
            <Title
                    titulo="Siguiente Concierto"
                />
                <div  className="subtitulo">
            <Subtitle
                    subtitulo="Auditorio Nacional, 24 de junio 2021, 20:30  "
                   
                />
                </div>
            <Countdown/>
        </div>
    );
}
 
export default ProximoConcierto;