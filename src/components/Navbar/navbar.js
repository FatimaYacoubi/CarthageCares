import React, { Component } from 'react';
import { useState, useEffect } from "react"

import './navbar.css'
import { FaCartPlus} from "react-icons/fa";
import { Navbar} from 'react-bootstrap';
import { Collapse} from 'reactstrap';
import Example from './sidemenu';
import { Link } from "react-router-dom";


function Navbarr () {
   
  
        return( <>

        <Navbar id='mynav' className={"fixed-top" } expand="lg" background-color="transparent"><nav className="NavbarItems">
            
            <ul>
           
            
                        <li > <Link to="/">
                            <a className="nav_links" href='#id'>
                            HOME
                          

                            </a> </Link>
                            <Link to="/shop">
                            <a className="nav_links">
                            SHOP
                            
                            </a> </Link>
                            <Link to="/courses">

                            <a className="nav_links" href='#id'>
                            COURSES
                            
                            </a>  </Link>
                            <Link to="/aboutus">

                             <a className="nav_links" href='#id'>
                            ABOUT US                            
                            </a> </Link>
                            <a>
                               </a>
                               <Link to="/signup">

                            <a style={{marginLeft: '700px'}} className="navlinkmargin nav_links">
SIGNUP                          </a> </Link>
<Link to="/login">

<a className="navlinkmargin nav_links"> 
SIGNIN                        </a> </Link>
<a className="nav-links" href='#id'>
                          </a>
                          

                            
                              <a  className="nav_links">  <FaCartPlus color="white" fontSize="25px" />            
</a>
                            </li>
                
            </ul>
           <div>
           
 </div> 
            </nav> 
            <Example className="disablede"/>
              </Navbar></>
        )

    }

export default Navbarr;