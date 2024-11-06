import React from 'react';
import Styles from "./footer.module.css";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className={Styles.container}>
            {/* Navigation Section */}
            <div className={Styles.navigationContainer}>
                <div className={Styles.navigationLinks}>
                    <span>CAREERS</span>
                    <span>CONTACT US</span>
                    <span>NEWS & EVENTS</span>
                </div>
                <div className={Styles.socialIcons}>
                    <span className={Styles.dividerVertical}></span>
                    <FaLinkedinIn 
                        size={20}
                        style={{ cursor: 'pointer' }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#FDB815'} 
                        onMouseOut={(e) => e.currentTarget.style.color = '#FFFFFF'}
                    />
                    <FaInstagram 
                        size={20}
                        style={{ cursor: 'pointer' }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#FDB815'} 
                        onMouseOut={(e) => e.currentTarget.style.color = '#FFFFFF'}
                    />
                    <FaFacebookF 
                        size={20}
                        style={{ cursor: 'pointer' }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#FDB815'} 
                        onMouseOut={(e) => e.currentTarget.style.color = '#FFFFFF'}
                    />
                </div>
            </div>
            
            {/* Newsletter Section */}
<div className={Styles.newsletterContainer}>
    <div className={Styles.emailSection}>
        <span>Monthly Design Insights & News from HGA</span>
        <div className={Styles.inputGroup}>
            <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className={Styles.input}
            />
            <button className={Styles.button}>
                SIGN UP
            </button>
        </div>
    </div>
</div>
            
            {/* Bottom Section */}
            <div className={Styles.bottomContainer}>
                <span className={Styles.copyright}>
                    © HGA 2024 All Rights Reserved
                </span>
                <span>PRIVACY POLICY</span>
            </div>
        </footer>
    );
};

export default Footer;