import React, {useEffect} from 'react';
import './searchPage.scss';
// @ts-ignore
import HeaderSlider from 'src/components/Slider/Slider.tsx';
// @ts-ignore
import Product from "src/components/CartProduct/Product.tsx";
// @ts-ignore
import {useAppDispatch, useAppSelector} from "src/hooks/hooks.ts";
// @ts-ignore
import {fetchAsyncProducts, getAllProducts} from "src/store/productSlice.ts";
// @ts-ignore
import {IProduct} from "src/types/index.ts";
import CartMessage from "src/components/CartMessage/CartMessage";
import {
    addToCart,
    getAllCarts,
    getCartMessageStatus,
    getCartTotal,
    setCartMessageOff,
    setCartMessageOn
} from "src/store/cartSlice";
import {calculateDiscount} from "src/utils/helpers";
import {useParams} from "react-router";
import {clearSearch, fetchAsyncSearchProduct, getSearchProducts, getSearchProductsStatus} from "src/store/searchSlice";

const SearchPage = () => {
    const dispatch = useAppDispatch();
    const cartMessageStatus = useAppSelector(getCartMessageStatus);
    const searchProducts = useAppSelector(getSearchProducts);
    const { searchTerm } = useParams();

    const carts: IProduct[] = useAppSelector(getAllCarts);

    useEffect(() => {
        dispatch(getCartTotal());
    }, [carts, dispatch])

    useEffect(() => {
        dispatch(clearSearch());
        dispatch(fetchAsyncSearchProduct(searchTerm));
    }, [dispatch, searchTerm]);

    useEffect(() => {
        if (cartMessageStatus) {
            setTimeout(() => {
                dispatch(setCartMessageOff());
            }, 2000);
        }

    }, [cartMessageStatus, dispatch]);

    const addToCartHandler = (product: IProduct) => {
        const discountedPrice = calculateDiscount(product.price, product.discountPercentage);
        const quantity = 1;
        const totalPrice = quantity * discountedPrice;

        dispatch(addToCart({ ...product, quantity, totalPrice, discountedPrice}));
        dispatch(setCartMessageOn());
    }

    return (
        <main>
            <section className="products">
                {searchProducts.length == 0 ? (<p>Ничего не найдено</p>) : searchProducts.map((product: IProduct) => (
                    <Product addToCartHandler={addToCartHandler} product={product} name={product.title} company={product.brand} image={product.images[0]} delivery="Послезавтра" id={product.id} price={product.price} reviews={Math.round(product.price * 5.23346)} star={product.rating}/>
                ))}
            </section>
            {cartMessageStatus && <CartMessage />}
        </main>
    );
}

export default SearchPage;