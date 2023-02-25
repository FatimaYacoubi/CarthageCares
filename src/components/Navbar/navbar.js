import React, { Component } from 'react';
import { useState, useEffect } from "react"

import './navbar.css'
import { FaCartPlus} from "react-icons/fa";
import { Navbar} from 'react-bootstrap';
import { Collapse} from 'reactstrap';
import Example from './sidemenu';

function Navbarr () {
   
  
        return( <>

        <Navbar id='mynav' className={"fixed-top" } expand="lg" background-color="transparent"><nav className="NavbarItems">
            
            <ul>
           
            
                        <li >
                            <a className="nav_links" href='#id'>
                            HOME
                            
                            </a>
                            <a className="nav_links" href='#id'>
                            SHOP
                            
                            </a> <a className="nav_links" href='#id'>
                            COURSES
                            
                            </a> 
                           
                             <a className="nav_links" href='#id'>
                            ABOUT US                            
                            </a>
                            <a>
                               </a>
                            <a style={{marginLeft: '700px'}} className="navlinkmargin nav_links">
SIGNUP                          </a>
<a className="navlinkmargin nav_links">
SIGNIN                        </a>
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