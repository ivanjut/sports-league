import React, { Component } from 'react';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaRegCopyright, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';


class Footer extends Component {

    render() {
        return (
            <footer class='footer'>
                <div class='container'>
                    <div class='footer-item' id='phone-container'>
                        <div class='icon-container'><FiPhoneCall class='icon'/></div>
                        (123) 456 - 7890
                    </div>
                    <div class='footer-item' id='email-container'>
                        <div class='icon-container'><FiMail class='icon'/></div>
                        team@sportsleague.com
                    </div>
                    <div class='footer-item' id='social-media-container'>
                        <div class='icon-container' onClick={()=> window.open("https://www.linkedin.com/company/sportsleague/")}>
                            <FaLinkedin class='icon' id='linkedin-icon'/>
                        </div>
                        <div class='icon-container' onClick={()=> window.open("https://www.facebook.com/profile.php?id=100085263819214")}>
                            <FaFacebook class='icon' id='facebook-icon'/>
                        </div>
                        <div class='icon-container' onClick={()=> window.open("http://www.instagram.com/_sportsleague_/")}>
                            <FaInstagram class='icon' id='instagram-icon'/>
                        </div>
                    </div>
                    <div class='footer-item' id='copyright-container'>
                        <div class='copyright-container'><FaRegCopyright/></div> 
                        SportsLeague.
                    </div>
                </div>
            </footer>
        )
    }

}

export default Footer;