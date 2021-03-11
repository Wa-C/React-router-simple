import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaYoutube } from '@fortawesome/free-solid-svg-icons'
import { AiFillFacebook } from "react-icons/fa";
import {faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <Container className="text-center">
            {/* <FontAwesomeIcon icon={FaYoutube} /> */}
            {/* <AiFillFacebook /> */}
            <FontAwesomeIcon icon={['fab', faFacebook]} />
        </Container>
    );
};

export default Footer;