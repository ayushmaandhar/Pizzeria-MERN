import React from 'react';
import '../styles/component-styles/navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <Link style={{"textDecoration":"none"}} to={'/'}>
                    <span className='navbar-brand nav-title'> Pizzeria </span>
                </Link>
                
                    <img className='navbar-brand nav-logo' src='PizzeriaLogo.png' alt='' />

                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link  to={'/order'} className='nav-link' href='#'>Order Pizza</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/build'} className='nav-link' href='#'>Build Ur Pizza</Link>
                        </li>
                    </ul>

                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to={'/cart'}>
                                <button className='btn btn-warning text-white'>
                                    <img alt='' className='nav-cart' src='cart.png'></img>
                                    &nbsp;Shopping Cart
                                </button>
                            </Link>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar