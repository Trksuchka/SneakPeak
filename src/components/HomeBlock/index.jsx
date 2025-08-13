import { faShieldAlt, faTruck, faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RandomProductCard from '../RandomProductCard';
import RandomProductSkeleton from '../Skeletons/RandomProductSkeleton'
import React from "react";

const HomeBlock = () => {
    const [randomItem, setRandomItem] = React.useState([])
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true)
        const randomId = Math.floor(Math.random() * 24) + 1;
        fetch(`https://68879c52071f195ca9817415.mockapi.io/items`)
            .then((res) => res.json())
            .then((data) => {
                // Ищем элемент, где id равен randomId
                const foundItem = data.find(item => item.id === randomId);
                setRandomItem(foundItem || data[0]);
            setLoading(false);
            });
        window.scrollTo(0, 0);
    }, [])

    return(
        <section id="home" className="page-section active">
            
            <section className="hero-banner">
                <div className="container hero-content">
                    <div className="promo-badge">Полная действия</div>
                    <h1>Эксклюзивные кроссовки для активного образа жизни</h1>
                    <p>Напитки, подписи, на поле - всё для вашего комфорта и стиля</p>
                </div>
            </section>

            
            <div className="container">
                {
                    loading
                    ? <RandomProductSkeleton />
                    : <RandomProductCard key={randomItem.id} {...randomItem}/>
                }

                
                <div className="features">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-truck"><FontAwesomeIcon icon={faTruck} /></i>
                        </div>
                        <h3 className="feature-title">Бесплатная доставка</h3>
                        <p className="feature-description">Бесплатная доставка по всей России при заказе от 5000 ₽</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-undo"><FontAwesomeIcon icon={faUndo} /></i>
                        </div>
                        <h3 className="feature-title">Легкий возврат</h3>
                        <p className="feature-description">Возврат товара в течение 30 дней без вопросов</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-shield-alt"><FontAwesomeIcon icon={faShieldAlt} /></i>
                        </div>
                        <h3 className="feature-title">Гарантия качества</h3>
                        <p className="feature-description">Официальная гарантия производителя 12 месяцев</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBlock;