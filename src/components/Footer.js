import React from 'react';
import { Container } from 'react-bootstrap';
import facebook from './images/Facebook.png'
import Twitter from './images/Twitter.png'
import yt from './images/YouTube.png'
const Footer = () => {
    return (
        <Container className="text-center">
            <a href="https://www.facebook.com"><img src={facebook} alt="" /></a>
            <a href="https://www.youtube.com"><img src={Twitter} alt="" /></a>
            <a href="https://www.twitter.com"><img src={yt} alt="" /></a>
        </Container>
    );
};

export default Footer;