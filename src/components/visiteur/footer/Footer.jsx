import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footerPages">
            <h4>Pages</h4>
            <ul>
                <Link className="routerFooter" to ="/"> <li> Accueil </li> </Link>
                <Link className="routerFooter" to ="/prestations"> <li>Prestations</li> </Link>
                <Link className="routerFooter" to ="/book"> <li>Book</li> </Link> 
                <Link className="routerFooter" to ="/rendezvous"> <li>Prendre RDV</li> </Link>
                <Link className="routerFooter" to ="/about"> <li>Contact</li> </Link>
            </ul>
            </div>
        </div>
    )
}

export default Footer
