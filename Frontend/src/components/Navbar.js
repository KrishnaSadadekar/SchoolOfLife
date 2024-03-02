import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { doLogout } from './auth/auth';
const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handlclick=()=>{
        
        setIsNavOpen(false);
    }

    const navigate = useNavigate();
    const handleLogout = () => {
        
        doLogout();
        navigate("/");
        window.location.reload();
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
                    <li><Link to="/addtrainer">Add Trainer</Link></li>
                        <li><Link to="/addcourse">Add Course</Link></li>
                        <li><Link to="/addcategory" >Add Category</Link></li>
                        <li><Link to="/allProducts" >All Products</Link></li>
                        <li><Link to="/adminD" >AdminD</Link></li>
                        <li><Link to="" onClick={handleLogout}>Logout</Link></li>

                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" onClick={toggleNav}></i>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;