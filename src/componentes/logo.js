import React from 'react';
import logo from './Hype.jpg';
//import logo from '../../componentes/logo.svg';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';


function Logo(props) {
  return (
    <>
      <Image src={logo} className={props.class} style={{width:450, height:300}} roundedCircle/>
   </>
  );
}

export default Logo;
