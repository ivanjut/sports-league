import React, { Component } from 'react';
import MaxFrinckeHeadshot from '../images/max_frincke_headshot.jpg'
import IvanJutamuliaHeadshot from '../images/ivan_jutamulia_headshot.jpg'
import NoelOnuohaHeadshot from '../images/noel_onuoha_headshot.jpg'
import VincentTranHeadshot from '../images/vincent_tran_headshot.jpg'
import {FiArrowRightCircle} from 'react-icons/fi';
import './Team.css';


class Team extends Component {

    render() {
        return (
            <div class='team-container jumbotron'>
                <h2 class="display-4">Team</h2>
                <hr class="my-4"/>

                <div id="team-card-deck" class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src={MaxFrinckeHeadshot} alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Max Frincke</h5>
                        <p class="card-text"><i>Chief Executive Officer</i></p>
                        <p class="card-text"><i>UC Berkeley, 2022</i></p>
                        <p class="card-text">
                            For most of my life, sports has peaked my interests and dominated the activities and conversations that I have shared with friends, family and acquaintances. 
                            As a former athlete and avid follower of the NBA, NFL, EPL and especially fantasy, I want to share my passion for sports with everyone through the ultimate online sports-game: SportsLeague. 
                            After graduating from the Haas School of Business at Cal recently, I’m excited to lead our company’s product creation, business development and strategic goals to shape the best fantasy and sports betting application in the world. 
                            Game on!
                        </p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted"><b>Favorites:</b> </small>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src={NoelOnuohaHeadshot} alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Noel Onuoha</h5>
                        <p class="card-text"><i>Chief Operating Officer</i></p>
                        <p class="card-text"><i>UC Berkeley, 2022</i></p>
                        <p class="card-text">
                            Since as early I can remember I’ve been excited about team sports and competitive about winning. 
                            Although my athlete career ended after soccer, cross country and basketball in high school, I applied that competitive mindset to my studies in Law and Public Policy. 
                            After earning accolades at University of California, Berkeley, I’ve decided to take my talents to Sports League and help shape our Sales, Partnerships, and Growth teams. 
                            Let’s play ball!
                        </p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted"><b>Favorites:</b> </small>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src={IvanJutamuliaHeadshot} alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Ivan Jutamulia</h5>
                        <p class="card-text"><i>Chief Technology Officer</i></p>
                        <p class="card-text"><i>MIT, 2020</i></p>
                        <p class="card-text">
                            Sports has been an integral part of my life for as long as I can remember, without a doubt my biggest passion. 
                            Having played competitive soccer since I was 5 years old and continuing to coach at the college level at MIT after playing during my time as an undergrad there, needless to say I love the game. 
                            Beyond my own experience with sports, I am a huge sports fan, in particular fantasy football and the NFL, NBA basketball, and EPL. 
                            Combining my passion of sports with my education in computer science from MIT, I am excited to be a part of revolutionizing the sports fan experience through SportsLeague as the technical lead. 
                            It’s game time!
                        </p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted"><b>Favorites:</b> NFL/Fantasy Football, Golden State Warriors, Tottenham Hotspur, Cleveland Browns</small>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src={VincentTranHeadshot} alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Vincent Tran</h5>
                        <p class="card-text"><i>Head of Creative Design</i></p>
                        <p class="card-text"><i>UC Berkeley, 2022</i></p>
                        <p class="card-text">
                            I’ve had a passion for sports, particularly tennis, since I was young — not just for the discipline, competition and grit that they have to offer, but also the sense of community that a love for these games bring. 
                            Having accumulated various experiences working in business and graphic design during my time studying at UC Berkeley, I’m proud to be working with Sports League in spearheading design and helping shape the creative vision of the company. 
                            See you on the court!
                        </p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted"><b>Favorites:</b> </small>
                        </div>
                    </div>
                </div>

                <hr class="my-4"/>
            
            
            </div>
        )
    }

}

export default Team;