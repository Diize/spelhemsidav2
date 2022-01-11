import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components';
import { Link } from "react-scroll";
import '../App.css';


const Navbar = () => {
    return (
        <Menu left width={ '12%' } className="myMenu">

<Link className="menu-item"
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Home</Link>
<Link className="menu-item"
    activeClass="about"
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
    duration={1500}
>Om oss</Link>
<Link className="menu-item"
    activeClass="about"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={1500}
>Kontakt</Link>
      </Menu>
    )
}

export default Navbar




