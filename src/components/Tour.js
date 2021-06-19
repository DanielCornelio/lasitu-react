import React from 'react';
import Title from '../components/Title'
import foto1 from '../assets/img/DSC00019-2.jpg'
import foto2 from '../assets/img/max.JPG'
import foto3 from '../assets/img/julio.jpg'



import '../assets/styles/Tour.css'
const Tour = () => {
    return (  
        <div className="tour">
            <div className="tituloTour">
                <Title
                    titulo="Próximos Conciertos"
                />
            </div>
            <div className="presentaciones">
                <div className="presentacionItem">
                    <div className="itemFoto">
                        <img src={foto1} alt="con1"/>
                    </div>
                    <div className="itemDesc">
                        <h2>Auditorio Nacional - México</h2>
                        <h2>25/09/2021</h2>
                    </div>
                    <div className="itemTicket">
                        <button>Ticket</button>
                    </div>
                </div>
                <hr/>
                <div className="presentacionItem">
                    <div className="itemFoto">
                        <img src={foto2} alt="con2"/>
                    </div>
                    <div className="itemDesc">
                        <h2>Auditorio Nacional - México</h2>
                        <h2>25/09/2021</h2>
                    </div>
                    <div className="itemTicket">
                        <button>Ticket</button>
                    </div>
                </div>
                <hr/>
                <div className="presentacionItem">
                    <div className="itemFoto">
                        <img src={foto3} alt="con3"/>
                    </div>
                    <div className="itemDesc">
                        <h2>Auditorio Nacional - México</h2>
                        <h2>25/09/2021</h2>
                    </div>
                    <div className="itemTicket">
                        <button>Ticket</button>
                    </div>
                </div>
                
            </div>

        </div>
    );
}
 
export default Tour;