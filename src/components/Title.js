import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/Title.css'

const Title = (props) => {
    return (
        <div className="title">
            <h2>{props.titulo}</h2>
        </div>
    );
}

Title.propType={
    titulo: PropTypes.string.isRequired
}
 
export default Title;