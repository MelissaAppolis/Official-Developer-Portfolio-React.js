import React from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css';
import babyBoutique from '../images/onlinestore-image.png';
import memoryGame from '../images/memorygame-image.png';
import iTunes from '../images/itunes-image.png';
import weatherApp from '../images/weatherapp-image.png';
import countriesAPI from '../images/countriesapp-image.png';
import inventoryManagementApp from '../images/inventoryapp-image.png';

function Projects() {
    return (
        <div className="projects">
            <h1>My projects</h1>
            <div className="projects-container">
                <div className="projects-wrapper">
                    <ul className="projects-items">
                        <ProjectItem 
                            src={babyBoutique} 
                            text="The Baby Bouique Online Clothing Store allows users to browse through product information and images, add products to cart, enter delivery details and checkout. This app was created with HTML, CSS and Javascript."
                            label="ONLINE CLOTHING STORE" 
                            path="https://melissaappolis.github.io/onlineStore/"
                        />
                        <ProjectItem 
                            src={iTunes} 
                            text="A fullstack app using React, Node.js and Express. A user is able to search for content within the iTunes Store and Apple Book Store. The app also allows the user to create a favorites list. The Search API is handled in the backend of this app."
                            label="i-TUNES SEARCH APP" 
                            path="https://i-tunes-app.herokuapp.com"
                        />
                    </ul>
                    <ul className="projects-items">
                        <ProjectItem 
                            src={weatherApp} 
                            text="This app was created using React.js and uses OpenWeatherMap API to display the weather in a city of the user's choice. The user is able to enter the name of the city of their choice to display the weather information"
                            label="WEATHER APP" 
                            path="https://weather-app-eight-ecru.vercel.app"
                        />
                        <ProjectItem 
                            src={memoryGame} 
                            text="This is a memory game app built with React. It is a one player game where by the user can try and match up card numbers. The game is able to track game time as well as reset the game."
                            label="MEMORY GAME" 
                            path="https://melissaappolis.github.io/React-Memory-Game/"
                        />
                    </ul>
                    <ul className="projects-items">
                        <ProjectItem 
                            src={countriesAPI} 
                            text="This App was created with Next.js that displays all the countries in the African region and allows a user to view details about the country selected. The app uses the RestCountries API to fetch the country data."
                            label="SEARCH AFRICAN COUNTRIES" 
                            path="https://restcountries-8084onzmm.vercel.app"
                        />
                        <ProjectItem 
                            src={inventoryManagementApp} 
                            text="A fullstack MERN app that stores all inventory items in an interior design company's warehouse to easily manage stock. IDIM is based on admin and user access control. If a user is authenticated as an admin she is allowed to add, edit, delete a stock item as well as view the inventory list, however if a user is not authenticated as an admin she will only be allowed to view the inventory list. Passport.js is used for user authentication, a user is able to login via local, Google and Facebook authentication."
                            label="INVENTORY MANAGEMENT APP" 
                            path="https://github.com/MelissaAppolis/inventoryManagementApp"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects;
