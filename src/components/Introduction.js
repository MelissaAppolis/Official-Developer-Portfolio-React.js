import React from 'react';
import './Introduction.css';
import { Link } from 'react-scroll';


function Introduction() {
    return (
        <div className='introduction'>
            <h1>Hey, I'm Melissa...</h1>
            <div className="introduction-subheading">
                <p>a full stack web developer</p>
                <p>from cape town, south africa</p>
            </div>
            
            <div className="introduction-btns">
                <Link
                    activeClass="active"
                    className="btns btn--outline btn--large btn-mobile" 
                    to="projects"
                    smooth={true}
                    spy={true}
                    duration={900}
                    offset={-70}
                    >
                    CHECK OUT MY PROJECTS
                </Link>
                <Link 
                    activeClass="active"
                    className="btns btn--primary btn--large btn-mobile"
                    to="footer"
                    smooth={true}
                    spy={true}
                    duration={900}
                    >
                    CONTACT ME <i className='fas fa-phone' />
                </Link>
            </div>
        </div>
    );
}

export default Introduction;
