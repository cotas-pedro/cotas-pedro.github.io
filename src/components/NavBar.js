import {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/hiena.png';
import navIcon1 from '../assets/img/github-svgrepo-com.svg';
import navIcon2 from '../assets/img/linkedin-svgrepo-com.svg';
import navIcon3 from '../assets/img/whatsapp-color-svgrepo-com.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className="navbar-toggler-icon"></span>             
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projetos</Nav.Link>
                        <Nav.Link href="#sobre" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('sobre')}>Sobre Mim</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/cotas-pedro"><img src={navIcon1} alt="GitHub"/></a>
                            <a href="https://www.linkedin.com/in/pedro-henrique-costa-dos-santos-341038206/"><img src={navIcon2} alt="Linkedin"/></a>
                            <a href="https://wa.link/0nuroq"><img src={navIcon3} alt="WhatsApp"/></a>
                        </div>
                        </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}