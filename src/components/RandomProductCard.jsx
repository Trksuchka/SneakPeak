import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const RandomProductCard = ({size, title, price, description, image}) => {
    const [sizeId, setSizeId] = React.useState(0)
    const sizeArr = size;

    return(
        <div className="main-content">
            
            <div className="product-gallery card">
                <div className="product-image">
                    <img src={image} alt="Премиум кроссовки"/>
                </div>
                <div className="size-selection">
                    <h3>Выбор размера</h3>
                    <div className="sizes">
                        {sizeArr.map((obj, i) => (
                            <div id={i} onClick={() => setSizeId(i)} className={sizeId === i ? 'size-option selected' : 'size-option'}>{obj}</div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="product-details card">
                <h2 className="product-title">{title}</h2>
                <p className="product-description">{description}</p>
                
                <div className="price-module">
                    <h3>Горячая цена</h3>
                    <div className="price">{price}</div>
                    <div>
                        {/* <span className="original-price">9 999 ₽</span>
                        <span className="discount">-15%</span> */}
                    </div>
                </div>
                
                <button className="btn btn-primary">
                    <i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faShoppingCart} /></i> Добавить в корзину
                </button>
            </div>
        </div>
    );
};

export default RandomProductCard;