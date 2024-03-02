import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const HeaderD = () => {
    
    useEffect(()=>{
          
    },[]);
    
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handlclick=()=>{
        
        setIsNavOpen(false);
    }

    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">

                <h1 className="logo me-auto">
                    <Link to="/">School Of Life</Link>
                </h1>

                <Link to="/" className="logo me-auto">
                    <img src="./img/logo.png" alt="" className="img-fluid" />
                </Link>

                <nav id="navbar" className={`navbar order-last order-lg-0 ${isNavOpen ? 'mobile-nav-open' : ''}`}>
                    <ul onClick={handlclick}>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/about"  >About Us</Link></li>
                        <li><Link to="/allCourses" >Courses</Link></li>
                        <li><Link to="/trainer"  >Trainers</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                        <li><Link to="/login">Login</Link></li>
                     
                       
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" onClick={toggleNav}></i>
                </nav>
            </div>
        </header>
    );
}

export default HeaderD;
