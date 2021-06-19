import React from 'react';
import Title from '../components/Title'
import '../assets/styles/Team.css'
import Subtitle from '../components/Subtitle'

import avatar1 from '../assets/img/avatar/avatar1.svg'
import avatar2 from '../assets/img/avatar/avatar2.svg'
import avatar3 from '../assets/img/avatar/avatar3.svg'
import avatar4 from '../assets/img/avatar/avatar4.svg'
import avatar5 from '../assets/img/avatar/avatar5.svg'




const Team = () => {
    return (  
        <div className="team">
            <div className="tituloTeam">
                <Title
                    titulo="Conocenos"
                />
                <Subtitle
                    subtitulo="Lasitud es una banda de Villahermosa, Tabasco, con una propuesta que mezcla la experimentación y estridencia del Shoegaze, las armonías suaves del Dream Pop y la sensibilidad del Post-Rock, obteniendo como resultado un sonido profundo y lleno de texturas."
                />
            </div>

            <div className="people">
                <div className="peopleItem">
                    <div className="avatar">
                        <img src={avatar1} alt="avatar1"/>
                    </div>
                    <div className="descripcion">
                        <h2>Andres Contreras</h2>
                        <p>Guitarra</p>
                    </div>
                </div>
                <div className="peopleItem">
                    <div className="avatar">
                        <img src={avatar2} alt="avatar2"/>
                    </div>
                    <div className="descripcion">
                        <h2>Julio Beli</h2>
                        <p>GUITARRA / VOZ</p>
                    </div>
                </div>
                <div className="peopleItem">
                    <div className="avatar">
                        <img src={avatar3} alt="avatar2"/>
                    </div>
                    <div className="descripcion">
                        <h2>Paola Gavilla</h2>
                        <p>SYTH / VOZ</p>
                    </div>
                </div>
                <div className="peopleItem">
                    <div className="avatar">
                        <img src={avatar4} alt="avatar2"/>
                    </div>
                    <div className="descripcion">
                        <h2>Jose Gorrochotegui</h2>
                        <p>BATERIA</p>
                    </div>
                </div>
                <div className="peopleItem">
                    <div className="avatar">
                        <img src={avatar5} alt="avatar2"/>
                    </div>
                    <div className="descripcion">
                        <h2>Max Campos</h2>
                        <p>BAJO</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default Team;