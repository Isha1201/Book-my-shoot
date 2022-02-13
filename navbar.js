import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import './App.css';


function Navbar(){
    return (
        <div className="Navbar">
            <div className="leftside">
                <div className='links'>
                    <nav>
                    <a href="" className='heading'>BOOK MY SHOOT</a>
                 <a href="">home</a>
                <a href="/Content.js">Categories</a>
                <a href="">Book</a>
                <a href='/Contact'> Contact </a>
                </nav>
                </div>
            </div> 
         

        </div>
    );
}
export default Navbar