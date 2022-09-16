import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/img/LogoFinal.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { 
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  },[]);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={()=>onUpdateActiveLink('home')} className={activeLink==='home' ? "active navbar-link" : "navbar-link"}>Home</Nav.Link>
            <Nav.Link href="#skills" onClick={()=>onUpdateActiveLink('skills')} className={activeLink==='skills' ? "active navbar-link" : "navbar-link"}>Skills</Nav.Link>
            <Nav.Link href="#projetcs" onClick={()=>onUpdateActiveLink('projects')} className={activeLink==='projetcs' ? "active navbar-link" : "navbar-link"}>Projetcs</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://acortar.link/5fUEKx"><img src={navIcon1} alt="Imagen Icon Logo"/></a>
              <a href="https://acortar.link/Upel6u"><img src={navIcon2} alt="Imagen Icon Logo"/></a>
              <a href="https://acortar.link/pdQ9Si"><img src={navIcon3} alt="Imagen Icon Logo"/></a>
            </div>
            <button className="vvd" onClick={()=> console.log("Connect")}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
