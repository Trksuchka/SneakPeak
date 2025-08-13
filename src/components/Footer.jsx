import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <Link to='/'><h3>SNEAKPEAK</h3></Link>
                        <p>
                            Премиальные кроссовки для требовательных покупателей. Качество, стиль и комфорт.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h3>Категории</h3>
                        <ul>
                            <Link to='/catalog'><li><a href="/">Беговые</a></li></Link>
                            <Link to='/catalog'><li><a href="/">Баскетбольные</a></li></Link>
                            <Link to='/catalog'><li><a href="/">Повседневные</a></li></Link>
                            <Link to='/catalog'><li><a href="/">Лимитированная серия</a></li></Link>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Помощь</h3>
                        <ul>
                            <li><a href="/">Доставка и оплата</a></li>
                            <li><a href="/">Возврат товара</a></li>
                            <li><a href="/">Таблица размеров</a></li>
                            <li><a href="/">Контакты</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Контакты</h3>
                        <ul>
                            <li><i className="fas fa-phone"></i> +7 (495) 123-45-67</li>
                            <li><i className="fas fa-envelope"></i> info@sneakpeak.ru</li>
                            <li><i className="fas fa-map-marker-alt"></i>Ставрополь Мира 304</li>
                        </ul>
                    </div>
                </div>

                <div className="copyright">
                    © 2023 SNEAKPEAK. Все права защищены.
                </div>
            </div>
        </footer>
    );
};

export default Footer;