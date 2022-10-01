import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from '../logo.svg';
import Home from './Home';
import About from './About';
import Team from './Team.js';
// import Education from './Education';
// import Skills from './Skills';


class Main extends Component {

    render() {
        return (
            <main>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/team' element={<Team/>}/>
                    {/* <Route path='/education' component={Education}/>
                    <Route path='/skills' component={Skills}/> */}
                </Routes>
            </main>
        )
    }

}

export default Main;