import React from 'react';
import vk from "../assets/img/icons/vk.svg";
import ig from "../assets/img/icons/instagram.svg";
import gh from "../assets/img/icons/gitHub.svg";
import li from "../assets/img/icons/linkedIn.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="https://github.com/TerehovAleksey">
                                <img src={gh} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://www.linkedin.com/in/terehov-aleksey">
                                <img src={li} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://www.instagram.com/alekseyterehoff">
                                <img src={ig} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://vk.com/terehoff85">
                                <img src={vk} alt="Link"/>
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
