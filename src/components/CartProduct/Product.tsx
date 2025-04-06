import './product.scss';
import CartView from "src/components/CartView/CartView.tsx";
import {useState} from "react";
import {formatPrice} from "src/utils/helpers";

const Product = ({id, name, company, image, price, star, reviews, delivery, product, addToCartHandler}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="product">
            <button className="product-main" onClick={() => setOpen(true)}>
                <div className="preview-wrapper">
                    <img src={image} alt={name} className="preview"/>
                </div>
                <div className="product-main--description">
                    <div className="product-price">
                        <span className="product-price--new">{formatPrice(Number(price))}</span>
                    </div>
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
                </div>
            </button>
            <button className="toCart" onClick={() => {
                addToCartHandler(product)
            }}>
                <span className="delivery">{delivery}</span>
            </button>
            {open && (
                <CartView delivery={delivery} price={price} reviews={reviews} image={image} company={company} id={id}
                          star={star} name={name} setOpen={setOpen} addToCartHandler={addToCartHandler}
                          product={product}/>)}
        </div>
    )
}

export default Product;