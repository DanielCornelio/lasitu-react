import React from 'react';
import '../assets/styles/FormContacto.css'
import Title from '../components/Title'

const FormContacto = () => {
    return ( 
         <div className="contacto">
             <div className="tituloContacto">
             <Title
                titulo="Contacto"
            />
            </div>
            <div className="formContacto">            
                <div className="generalForm">
                    <h2>Informes</h2>
                    <p><span>Email:</span> info@lasitud.com</p>
                    <p><span>Telefono:</span> (123) 456 7890</p>

                </div>
                <form>
                    <label htmlFor="nombre">Nombre:</label>                    
                    <input type="text" id="nombre" />   
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" />
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea name="textarea" rows="10" cols="50"></textarea>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    );
}
 
export default FormContacto;