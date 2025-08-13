import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalWindowProduct = ({title, price, description, image, size}) => {
    const [sizeId, setSizeId] = React.useState(0)
    const sizeArr = size;
    return(
        <>
            <div id="product-modal" className="modal">
                <div className="modal-content">
                    <button className="close-modal">&times;</button>
                    <div className="modal-body">
                        <div className="modal-image">
                            <img id="modal-img" src={image} alt="Product Image"/>
                        </div>
                        <div className="modal-details">
                            <h2 id="modal-title" className="modal-title">{title}</h2>
                            <div id="modal-price" className="modal-price">{price} ₽</div>
                            <p id="modal-description" className="modal-description">
                                {description}
                            </p>

                            <h3 className="modal-size-title">Выберите размер:</h3>
                            <div className="sizes">
                                {sizeArr.map((obj, i) => (
                                <div id={i} onClick={() => setSizeId(i)} className={sizeId === i ? 'size-option selected' : 'size-option'}>{obj}</div>
                                ))}
                            </div>

                            <div style="margin-top: 30px;">
                                <button className="btn btn-primary" style="width: 100%;">
                                    <FontAwesomeIcon icon={faShoppingCart} /> Добавить в корзину
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalWindowProduct;