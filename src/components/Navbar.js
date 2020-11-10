import React, {useState} from 'react';
import './Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const scrollToTop = () => {
        scroll.scrollToTop();
        closeMobileMenu();
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link 
                        className="navbar-logo" 
                        onClick={scrollToTop}
                        to="introduction"
                        smooth={true}
                        >
                        Melissa Appolis
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                         <Link
                            activeClass="active"
                            to="introduction"
                            className="nav-links" 
                            onClick={closeMobileMenu}
                            spy={true}
                            smooth={true}
                            duration={900}
                            offset={-80}
                            >
                             Home
                         </Link>
                     </li>
                     <li className="nav-item">
                         <Link
                            activeClass="active"
                            to="about"
                            className="nav-links" 
                            onClick={closeMobileMenu}
                            spy={true}
                            smooth={true}
                            duration={900}
                            offset={-80}
                            >
                             About
                         </Link>
                     </li>
                     <li className="nav-item">
                         <Link 
                            activeClass="active"
                            to="projects"
                            className="nav-links" 
                            onClick={closeMobileMenu}
                            spy={true}
                            smooth={true}
                            duration={900}
                            offset={-70}
                            >
                             Projects
                         </Link>
                     </li>
                     <li className="nav-item">
                         <Link 
                            activeClass="active"
                            to="footer" 
                            className="nav-links" 
                            onClick={closeMobileMenu}
                            spy={true}
                            smooth={true}
                            duration={900}
                            offset={-10}
                            >
                             Contact
                         </Link>
                     </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
