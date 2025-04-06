import './cartView.scss'
import {useState} from "react";
import {formatPrice} from "src/utils/helpers";

const CartView = ({id, name, company, image, price, star, reviews, delivery, setOpen, product, addToCartHandler}) => {
    return (
        <div className="cart-view" onClick={() => setOpen(false)}>
            <div className="cart-view--wrapper">
                <div className="cart-view--preview--wrapper">
                    <img className="cart-view--preview" src={image} alt={name}/>
                </div>
                <article className="cart-view--content">
                    <div className="product-title">
                        <p>
                            <span className="company">{company}</span>
                            <span className="name">/ {name}</span>
                        </p>
                    </div>
                    <div className="product-reviews">
                        <span className="star">{star}</span>
                        <span className="reviews-count">{reviews} оценок</span>
                    </div>
                    <div className="product-price">
                        <span className="product-price--new">{formatPrice(Number(price))}</span>
                    </div>
                    <button className="toCart" onClick={() => { addToCartHandler(product) }}>Добавить в корзину</button>
                </article>
            </div>
        </div>
    )
}

export default CartView;