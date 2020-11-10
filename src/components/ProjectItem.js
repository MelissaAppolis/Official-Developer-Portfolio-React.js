import React from 'react';
import './Projects.css';

function ProjectItem(props) {
    return (
        <>
            <li className="projects-item effect">
                <a className="projects-item-link" href={props.path}>
                    <figure className="projects-item-pic-wrap" data-category={props.label}>
                        <img 
                            src={props.src} 
                            alt="BabyBoutique" 
                            className="projects-item-img" 
                        />
                    </figure>
                    <div className="projects-item-info">
                        <h5 className="projects-item-text">{props.text}</h5>
                    </div>
                </a>
            </li>
        </>
    );
}

export default ProjectItem;
