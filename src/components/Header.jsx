import React from "react";
import { Link } from "react-router-dom";
import { faShoppingCart, faSearch, faUser, faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => {
    return(
        <header>
            <div className="container header-content">
                <Link to='/'>
                <div className="logo">
                    <i className="fas fa-shoe-prints"><FontAwesomeIcon icon={faShoePrints} /></i>
                    <span>SNEAK</span>PEAK
                </div>
                </Link>
                <nav>
                    <ul>
                        <Link to='/'><li><a href="/" className="nav-link active" >Главная</a></li></Link>
                        <Link to='/catalog'><li><a href="/" className="nav-link" >Коллекция</a></li></Link>
                        <Link to='/cart'><li><a href="/" className="nav-link" >Корзина</a></li></Link>
                    </ul>
                </nav>
                <div className="header-actions">
                    <i className="fas fa-search header-icon"><FontAwesomeIcon icon={faSearch} /></i>
                    <i className="fas fa-user header-icon"><FontAwesomeIcon icon={faUser} /></i>
                    <div className="cart-icon">
                        <i className="fas fa-shopping-cart header-icon"><FontAwesomeIcon icon={faShoppingCart} /></i>
                        <span className="cart-count">3</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;