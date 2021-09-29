import React, {useState} from 'react'
import {Container, Button,Tooltip,OverlayTrigger} from 'react-bootstrap';
import Cards from './Cards';
import Portfolio from './Portfolio';
import * as RScroll from 'react-scroll';
import {FaInstagram, FaSteam, FaFacebook, FaDiscord} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import { Route, Link } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
var Element  = RScroll.Element;

const FillText = () => {
    const [clicked, setClicked] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    return(
        <Container>
            <Route path="/" exact render={(props) => (
                <>
                    <div id="header" className="text-center d-flex justify-content-center flex-column ">
                <h1>Matěj Šela</h1><br/>
                <h2>Student and Developer</h2>
            </div>

            <Element name="Portfolio">
                <div id="header" className="text-center d-flex justify-content-center flex-column">
                        <h2>Portfolio</h2>
                    <div className="text-center d-flex justify-content-center flex-row flex-wrap overflow-auto">
                        <Cards Name="Shella's Dungeon" Text="Pixelart hack'n'slash 2D game." Tech="Unity, C#" Date="15.6.2021" GitHub="https://github.com/M-Shella/Shella-s-Dungeon" Link="https://shellma.net/Downloads/Shella's Dungeon.rar" Download={true}/>
                        <Cards Name="React Web" Text="That web which are you on right now" Tech="React, HTML, PHP, CSS, Javascript, SQL" Date="15.9.2021" Link="https://shellma.net/" Download={false}/>
                        <Cards Name="Computer Clicker" Text="Clicker game with a database of users and leaderboards." Tech="HTML, PHP, CSS, Javascript, Jquery, SQL" Date="12.5.2020" GitHub="https://github.com/M-Shella/computerClicker" Link="https://shellma.net/computerClicker/php/" Download={false}/>
                    </div>
                    <Link to="/portfolio"><Button variant="dark" className="m-5">Show more</Button></Link>
                </div>

            </Element>

            <Element name="AboutMe">
                <div id="header" className="text-center d-flex justify-content-center flex-column">
                    <h2>About Me</h2><br/>
                    <h4>Hi, I am Matěj Šela.</h4>
                    I live in the Czech Republic. My hobby is programming websites and games, but I am also able to make software in java and work with raspberry pi and arduino. To this date, I have participated in 3 competitions all focusing on iot. Now I am studying last year middle school in Ústí nad Labem. I'm open to all job offers in the industry so feel free to contact me if you want or just want to chat.
                </div>
            </Element>

            <Element name="Contact">
                <div id="header" className="text-center d-flex justify-content-center flex-column">
                    <div>
                        <h2>Contact:</h2>
                    </div>
                    <div>
                        <OverlayTrigger
                            overlay={
                                <Tooltip>
                                    {clicked ? 'Copied To Clipboard' : 'Copy To Clipboard'}
                                </Tooltip>
                            }
                            >
                            <CopyToClipboard text="Shella#8030">
                                <Button variant="dark" className="m-1" onClick={() => {setClicked(true);setClicked2(false)}}><FaDiscord className="mb-1"/></Button> 
                            </CopyToClipboard>
                            
                        </OverlayTrigger>
                        <span>Shella#8030</span>

                        <OverlayTrigger
                            overlay={
                                <Tooltip>
                                    {clicked2 ? 'Copied To Clipboard' : 'Copy To Clipboard'}
                                </Tooltip>
                            }
                            >
                            <CopyToClipboard text="business@shellma.net">
                                <Button variant="dark" className="m-1" onClick={() => {setClicked2(true);setClicked(false)}}><SiGmail className="mb-1"/></Button>
                            </CopyToClipboard>
                            
                        </OverlayTrigger>
                        <span>business@shellma.net</span>
                            
                        <Button variant="dark" className="m-1" href="https://steamcommunity.com/id/ChramstaCZ/" target="_blank"><FaSteam className="mb-1"/></Button>Shella
                        <Button variant="dark" className="m-1" href="https://www.facebook.com/ShellaMatej" target="_blank"><FaFacebook className="mb-1"/></Button>Matěj Šela
                        <Button variant="dark" className="m-1" href="https://www.instagram.com/_shellam_/" target="_blank"><FaInstagram className="mb-1"/></Button>_shellam_
                    </div>
                </div>
            </Element>
                </>
            )} />
            <Route path="/portfolio" component={Portfolio}/>
        </Container>
    )
}
export default FillText