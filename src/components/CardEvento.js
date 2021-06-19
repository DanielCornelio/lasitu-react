import React from 'react';
import PropTypes from 'prop-types'
import '../assets/styles/CardEvento.css'

const CardEventos = (props) => {
    return (  
        <div className="cardEvento">
            <h1>{props.lugar}</h1>
            <h4>{props.fecha}</h4>

        </div>
    );
}

CardEventos.propType={
    lugar: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired

}

export default CardEventos;