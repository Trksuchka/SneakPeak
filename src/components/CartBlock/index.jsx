import React from "react";

const CartBlock = () => {
    return(
        <section className="page-section">
            <div className="container">
                <div className="cart-header">
                    <h2>Ваша корзина</h2>
                    <p>Проверьте выбранные товары перед оформлением заказа</p>
                </div>

                <div className="cart-container">
                    <div className="cart-items">
                        <h3>Товары (3)</h3>

                        <div className="cart-item">
                            <div className="cart-item-img">
                                <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="Nike Air Max"/>
                            </div>
                            <div className="cart-item-details">
                                <h4 className="cart-item-title">Nike Air Max Premium</h4>
                                <div className="cart-item-price">8 499 ₽</div>
                                <div className="cart-item-size">Размер: 40</div>
                                <div className="cart-item-actions">
                                    <div className="quantity-control">
                                        <button className="quantity-btn">-</button>
                                        <span className="quantity">1</span>
                                        <button className="quantity-btn">+</button>
                                    </div>
                                    <button className="remove-btn">
                                        <i className="fas fa-trash"></i> Удалить
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="cart-item">
                            <div className="cart-item-img">
                                <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80" alt="Adidas Ultraboost"/>
                            </div>
                            <div className="cart-item-details">
                                <h4 className="cart-item-title">Adidas Ultraboost</h4>
                                <div className="cart-item-price">10 999 ₽</div>
                                <div className="cart-item-size">Размер: 42</div>
                                <div className="cart-item-actions">
                                    <div className="quantity-control">
                                        <button className="quantity-btn">-</button>
                                        <span className="quantity">1</span>
                                        <button className="quantity-btn">+</button>
                                    </div>
                                    <button className="remove-btn">
                                        <i className="fas fa-trash"></i> Удалить
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="cart-item">
                            <div className="cart-item-img">
                                <img src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80" alt="Nike Air Jordan"/>
                            </div>
                            <div className="cart-item-details">
                                <h4 className="cart-item-title">Nike Air Jordan</h4>
                                <div className="cart-item-price">15 499 ₽</div>
                                <div className="cart-item-size">Размер: 41</div>
                                <div className="cart-item-actions">
                                    <div className="quantity-control">
                                        <button className="quantity-btn">-</button>
                                        <span className="quantity">1</span>
                                        <button className="quantity-btn">+</button>
                                    </div>
                                    <button className="remove-btn">
                                        <i className="fas fa-trash"></i> Удалить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cart-summary">
                        <h3 className="summary-title">Итог заказа</h3>
                        <div className="summary-details">
                            <div className="summary-row">
                                <span className="summary-label">Товары (3)</span>
                                <span className="summary-value">34 997 ₽</span>
                            </div>
                            <div className="summary-row">
                                <span className="summary-label">Скидка</span>
                                <span className="summary-value">-1 500 ₽</span>
                            </div>
                            <div className="summary-row">
                                <span className="summary-label">Доставка</span>
                                <span className="summary-value">Бесплатно</span>
                            </div>
                            <div className="summary-row summary-total">
                                <span className="summary-label">Итого</span>
                                <span className="summary-value">33 497 ₽</span>
                            </div>
                        </div>
                        <button className="btn btn-primary checkout-btn">
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartBlock;