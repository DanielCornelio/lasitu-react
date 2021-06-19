import React from 'react';
import CardEventos from './CardEvento';
import '../assets/styles/ProximosEventos.css'
import Title from './Title';
import Subtitle from './Subtitle';
const ProximosEventos = () => {
    return ( 
        <div className="eventos" >
            <div className="tituloEventos">
                <Title
                    titulo="Próximos Eventos"
                />
                <Subtitle
                    subtitulo="Aquí puedes obtener información sobre las fechas de los próximas participaciones de Lasitud."
                />
            </div>
            <div className="proximosEventos">
                <CardEventos
                    lugar="MEXICO"
                    fecha="25/09/2021"
                />
                <CardEventos
                    lugar="NEW YORK"
                    fecha="25/09/2021"
                />
                <CardEventos
                    lugar="PARIS"
                    fecha="25/09/2021"
                />
                <CardEventos
                    lugar="BERLIN"
                    fecha="25/09/2021"
                />
            </div>
        </div>
    );
}
 
export default ProximosEventos;