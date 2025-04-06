import React, {useEffect} from 'react';
import './cart.scss';
import {clearCart, getAllCarts, getCartTotal, removeFromCart, toggleCartQty} from "src/store/cartSlice";
import {formatPrice} from "src/utils/helpers";
import {useAppDispatch, useAppSelector} from "src/hooks/hooks";
import {IProduct} from "src/types";
import {Link} from "react-router";
import {MAIN} from "src/constants/routes";

interface CartProps {
    carts: IProduct[];
    dispatch: any;
}

const CartPage = () => {
    const dispatch = useAppDispatch();
    const carts: IProduct[] = useAppSelector(getAllCarts);
    const { itemsCount, totalAmount } = useAppSelector((state) => state.cart);

    useEffect(() => {
        dispatch(getCartTotal());
    }, [carts, dispatch])

    if (carts.length === 0) {
        return (
            <main>
                <div className="cart-empty">
                    <div className="cart-empty--wrapper">
                        <img src="src/assets/empty-cart.webp" alt="empty cart"/>
                        <div className="cart-empty--title">
                            <p><b>В корзинее пока пусто</b></p>
                            <p>Загляните на главную — собрали там товары, которые могут вам понравиться</p>
                        </div>
                        <Link to={MAIN}>Перейти на главную</Link>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main>
            <div className="cart">
                <div className="cart-wrapper">
                    <div className="cart-products">
                        <div className="cart-products--wrapper">
                            <h2 className="title">Корзина</h2>
                            <p className="subtitle">{itemsCount} товара</p>
                            <div className="cart-products-all">
                                <DisplayAllItems carts={carts} dispatch={dispatch}/>
                            </div>
                        </div>
                    </div>
                    <div className="cart-result">
                        <div className="cart-result--wrapper">
                            <p className="address">Выберите адрес доставки</p>
                            <div className="cart-information">
                                <p className="products-count">
                                    <span>Товары, {itemsCount} шт.</span>
                                    <span>{formatPrice(Number(totalAmount))}</span>
                                </p>
                                <p className="products-result">
                                    <span>Итого</span>
                                    <span>{formatPrice(Number(totalAmount))}</span>
                                </p>
                            </div>
                            <button className="order">Заказать</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

const DisplayAllItems = ({carts, dispatch}: CartProps) => {
    return carts.map((cart, idx) => {
        return (
            <div className="cart-item" key={cart.id}>
                <div className="cart-item--main">
                    <div className="cart-item--product">
                        <img src={cart.images[0]} alt="product" className="preview"/>
                        <div className="cart-item--details">
                            <p className="title">{cart.title}, {cart.brand}</p>
                            <p className="delivery">Послезавтра</p>
                            <button
                                type="button"
                                className='delete-btn'
                                onClick={() => dispatch(removeFromCart(cart.id))}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                                    <path fill="#A9A8B0" fill-rule="evenodd"
                                          d="M8.806.833h2.387c.21 0 .415 0 .588.014.19.016.415.053.642.168.313.16.568.415.728.728.115.226.152.451.168.642.014.173.014.378.014.588v.36H17.499A.833.833 0 1 1 17.5 5h-.883l-.553 8.835c-.04.632-.072 1.155-.133 1.58-.063.444-.164.849-.378 1.227a3.334 3.334 0 0 1-1.444 1.356c-.39.19-.8.266-1.247.301-.429.034-.953.034-1.586.034H8.724c-.633 0-1.157 0-1.586-.034-.446-.035-.857-.111-1.247-.301a3.334 3.334 0 0 1-1.444-1.357c-.214-.377-.315-.782-.379-1.226-.06-.425-.093-.948-.133-1.58L3.383 5H2.5a.833.833 0 1 1 0-1.667h4.167V2.973c0-.21 0-.415.014-.588.016-.19.052-.416.168-.642.16-.313.414-.568.728-.728.226-.115.451-.152.641-.168a7.65 7.65 0 0 1 .59-.014Zm-.473 2.5h3.333V3a6.781 6.781 0 0 0-.01-.49l-.01-.001a6.823 6.823 0 0 0-.48-.01H8.833a6.821 6.821 0 0 0-.49.01l-.002.011a6.821 6.821 0 0 0-.008.48v.333ZM5.053 5l.544 8.697c.042.674.07 1.13.121 1.483.05.342.11.518.18.64.166.295.418.531.721.679.127.062.306.111.651.139.355.028.812.029 1.487.029h2.485c.674 0 1.132-.001 1.487-.03.344-.027.523-.076.65-.138.304-.148.556-.384.722-.678.07-.123.13-.299.18-.641.05-.352.079-.809.121-1.482L14.946 5H5.053Z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="cart-item--controller">
                        <div className="cart-item--controller--wrapper">
                            <button
                                type="button"
                                className='qty-decrease qty-button'
                                onClick={() => dispatch(toggleCartQty({id: cart.id, type: "DEC"}))}
                            >
                                -
                            </button>
                            <div className='qty-value'>
                                {cart.quantity}
                            </div>
                            <button
                                type="button"
                                className='qty-increase qty-button'
                                onClick={() => dispatch(toggleCartQty({id: cart.id, type: "INC"}))}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <p className="cart-item--price">
                    {formatPrice(Number(cart.totalPrice))}
                </p>
            </div>
        )
    })
}

export default CartPage