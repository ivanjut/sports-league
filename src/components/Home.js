import React, { Component } from 'react';
import logo from '../logo.svg';
import './Home.css';

class Home extends Component {

    render() {
        return (
            <div class='home-container'>
                <div class='pic-container'>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div class='text-container'>
                    <h1 class='hello'>Welcome to SportsLeague!</h1>
                </div>
            </div>
        )
    }

}

export default Home;