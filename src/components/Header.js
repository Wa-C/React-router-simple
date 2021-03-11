import React from 'react';
import { Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import picture from './images/headerimage.jpg'
import './Header.css'

const Header = () => {
    return (
        
            <Container>
                <div className="row">
                    <div className="col-md-12">
                <img style={{height:'300px',width:'1500px'}} src = {picture} alt=""></img>
                </div>
                </div>
            </Container>
        
    );
};

export default Header;