import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/Subtitle.css'

const Subtitle = (props) => {
    return (
        <div className="subtitle">
            <p>{props.subtitulo}</p>
        </div>
    );
}

Subtitle.propTypes = {
    subtitulo: PropTypes.string.isRequired
}
 
export default Subtitle
