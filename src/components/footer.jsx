import React from 'react';
import './footer.css';
import KonectarLogo from "../assets/Konectar Logo.png";

const Footer = () => {
    return (
        <>
           <section class="footer">
        <div class="top-footer">
            <div class="logo-container">
                <img src={KonectarLogo} alt="Konectar Logo"/>
            </div>

            <div class="newletter-text">
                <p>
                 Subscribe to our newsletter to get first-hand updates
                </p>
            </div>

            <div class="input-and-action-button">
                <div class="newsletter-input">
                    <input type="email" placeholder="Enter email" id="email" name="email"/>
                </div> 
                
                <div class="footer-button">
                    <button type="submit" id="button">Subscribe</button>
                </div>
            </div>
        </div>

        <div class="mid-footer">
            <div class="logo-and-socials">
                <div class="logo-container">
                <img src={KonectarLogo} alt="Konectar Logo"/>
                </div>

                <div class="logo-text">
                    <p>Connecting Farms to Businesses: Nigeria's leading Marketplace for fresh Fruits and Vegetables</p>
                </div>

                <div class="socials">
                    <div class="heading">
                        <h3>Social Media</h3>
                    </div>
        
                    <div class="socials-icon">
                        <div class="social1"><i class="fa-brands fa-x-twitter"></i></div>
        
                        <div class="social1"><i class="fa-brands fa-instagram"></i></div>
        
                        <div class="social1"><i class="fa-brands fa-linkedin"></i></div>
                    </div>
                </div>
            </div>

            <div class="company">
                <div class="company-header">
                    <h3>Company</h3>
                </div>

                <div class="textlink-groups">
                    <div class="textlinks">
                        <a href="">About</a>
                    </div>
                    <div class="textlinks">
                        <a href="">Contact</a>
                    </div>
                    <div class="textlinks">
                        <a href="">Blog</a>
                    </div>
                </div>
            </div>

            <div class="company">
                <div class="company-header">
                    <h3>Resources</h3>
                </div>

                <div class="textlink-groups">
                    <div class="textlinks">
                        <a href="">Products</a>
                    </div>
                    <div class="textlinks">
                        <a href="">Blog</a>
                    </div>
                    <div class="textlinks">
                        <a href="">FAQs</a>
                    </div>
                </div>
            </div>

            <div class="company">
                <div class="company-header">
                    <h3>Legal</h3>
                </div>

                <div class="textlink-groups">
                    <div class="textlinks">
                        <a href="">Terms and Conditions</a>
                    </div>
                    <div class="textlinks">
                        <a href="">Privacy Policy</a>
                    </div>
                    <div class="textlinks">
                        <a href="">FAQs</a>
                    </div>
                </div>
            </div>

            <div class="company1">
                <div class="company-header">
                    <h3>Contact</h3>
                </div>

                <div class="paragraph-groups">
                    <div class="textlinks">
                        <p>Address: 12b Capital Road, Lagos</p>
                    </div>
                    <div class="textlinks">
                        <p>Phone: +2348065125745</p>
                    </div>
                    <div class="textlinks">
                        <p>Konectar.ag@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom-footer">
            <p>Konectar Copyright, 2024. All rights reserved</p>
        </div>

    </section>
  
        </>
    );
};

export default Footer;
