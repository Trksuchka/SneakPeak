import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({title, price, description, image, size, category}) => {
    return(
        <div class="product-card">
            <div class="product-card-img open-modal" data-id="1">
                <img src={image} alt="sock"/>
            </div>
            <div class="product-card-info">
                <h3 class="product-card-title">{title}</h3>
                <div class="product-card-price">{price}</div>
                <div class="product-card-actions">
                    <button class="btn btn-secondary">
                        <i class="fas fa-heart"><FontAwesomeIcon icon={faHeart} /></i>
                    </button>
                    <button class="btn btn-primary">
                        <i class="fas fa-shopping-cart"><FontAwesomeIcon icon={faShoppingCart} /></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard