import { FaBars , FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import '../styles/Hamburger.css'
import '../styles/ToggleButton.css'
import '../styles/DropDownMenu.css'

import { useRef, useState, useEffect } from 'react';

export default function Hamburger() {

    const [barIcon, setBarIcon] = useState(faBars);

    // const [active,setActive] = useState(true);
    const body = document.querySelector('body');

    const toggleBtn = useRef()
    const toggleBtnIcon = useRef()
    const dropDownMenu = useRef()

    const crossBtn = useRef()
    const crossIcon = useRef()

//function for opening drop down menu
    function testClick () {
        dropDownMenu.current.classList.toggle('open');

        const isOpen = dropDownMenu.current.classList.contains('open');
        // console.log(isOpen)  //testing 
        
        if (isOpen==true){
            setBarIcon(prevBarIcon => faTimes)
            toggleBtn.current.classList.toggle('test-rotate');
        }
        else {
            setBarIcon(prevBarIcon => faBars)
            toggleBtn.current.classList.toggle('test-rotate');
        } 
    }

// // Dark Mode Adapter
// useEffect(()=>{
//     inputRef.current.classList.toggle('white-mode');
// },[active])

//Dark Mode function
    const handleChange=()=>{
        body.classList.toggle('body-white');
        body.classList.toggle('dark-theme');
    }


  return (
    <>
        <header>
            <div className="navbar">
                <div className="logo"><a href='#'>Web Dev</a></div>
                <ul className="links">

                <div className='right-menu'>
                    <li><a href='#'>Home</a></li>
                    <div className="drop-down-menu">
                        <a href="#">Test one</a>
                        <a href="#">Test two</a>
                        <a href="#">Test three</a>
                    </div>
                </div>
                <div className="right-menu">
                    <li><a href='#'>About</a></li>
                    <div className="drop-down-menu">
                        <a href="#">Test one</a>
                        <a href="#">Test two</a>
                        <a href="#">Test three</a>
                        <a href="#">Test four</a>
                    </div>
                </div>
                <div className="right-menu">
                    <li><a href='#'>Services</a></li>
                    <div className="drop-down-menu">
                        <a href="#">Test one</a>
                        <a href="#">Test two</a>
                        <a href="#">Test three</a>
                        <a href="#">Test four</a>
                        <a href="#">Test five</a>
                    </div>
                </div> 
                <div className="right-menu">  
                    <li><a href='#'>Contact</a></li>
                </div> 
                </ul>

                <a href="#" className="action_btn">Get Started</a>
{/* Hamburger Button */}
                <div ref={toggleBtn} className="toggle_btn" onClick={testClick}>
                    <FontAwesomeIcon ref={toggleBtnIcon} className='' icon={barIcon} />
                </div>

{/* Dark Mode Button */}
                <div className="theme-btn">
                    <label className="switch">
                        <input id="toggle" type="checkbox" onChange={handleChange}></input>
                        <span className="slider round"></span>
                    </label>         
                </div>
            </div>

{/* Dropdown Menu */}
            <div ref={dropDownMenu} className="dropdown-menu">
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href="#" className="action_btn">Get Started</a></li>
            </div>
        </header>
    </>
  )
}

