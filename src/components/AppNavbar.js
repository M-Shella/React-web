import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';
import {
    Container,
    Nav,
    Navbar,
    Button,
    Image
} from 'react-bootstrap';
import ToggleButton from 'react-toggle-button';
import {FaMoon, FaSun} from 'react-icons/fa'

const AppNavbar = ({Portfolio,AboutMe,Contact}) => {
    const [toggle, setToggle] = useState(true);
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand><Image src="https://shellma.net/matej/h1.png" className="me-1" width={56} height={56} thumbnail/> Matěj Šela</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Route path="/" exact render={(props) => (
                    <>
                        <Nav className="me-auto">   
                            <Button variant="dark" onClick={Portfolio} className="me-1">Portfolio</Button>
                            <Button variant="dark" onClick={AboutMe} className="me-1">About Me</Button>
                            <Button variant="dark" onClick={Contact} className="me-1">Contact</Button>
                        </Nav>
                        
                    </>   
                )} />
                <Route path="/portfolio" render={(props) => (
                    <>
                        <Nav className="me-auto">   
                        <Link to="/"><Button variant="dark" className="me-1">Back</Button></Link>
                        </Nav>
                    </>   
                )} />
                </Navbar.Collapse>
                <Nav className="ml-auto">   
                    <ToggleButton
                        colors={{
                            active: {
                                base: 'rgb(21, 22, 24)',
                            },
                            inactive: { 
                                base: 'rgb(255, 255, 255)',
                            },
                            inactiveThumb: {
                                base: 'rgb(21, 22, 24)',
                            },
                        }}
                        inactiveLabel={<FaSun color="#151618"/>}
                        activeLabel={<FaMoon/>}
                        value={ toggle || false }
                        onToggle={(toggle) => {
                            setToggle(!toggle)
                            document.body.style.backgroundColor = toggle ? 'white' : '#151618';
                            document.body.style.color = toggle ? 'black' : 'white';
                          }}
                    />
                </Nav>
            </Container>
        </Navbar>
    )
}
export default AppNavbar;