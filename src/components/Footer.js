import React from 'react';
import '../assets/styles/Footer.css'
import Logo from '../assets/img/lasitud_blanco.png'


const Footer = () => {
    return (  
        <div className="footer">

            <ul>
                <li><a href="https://www.facebook.com/lasitudoficial" target="_balnk"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#twt" ><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="https://open.spotify.com/artist/1zQ7Htx1vh0vmCHmxVVG0d?si=RlfogoEOSSuTZyxvQ45Kkw"><i className="fa fa-spotify" aria-hidden="true"></i></a></li>
                <li><a href="https://lasitud.bandcamp.com/" ><i className="fa fa-bandcamp" aria-hidden="true"></i></a></li>
                <li><a href="#insta" ><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="#yt" ><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
            </ul>

            <div className="logoFooter">
                <img src={Logo} className="logoImagen" alt="logo"/>
            </div>

        </div>
    );
}
 
export default Footer;