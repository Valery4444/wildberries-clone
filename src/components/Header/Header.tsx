import React, {useState} from 'react';
import './header.scss';
import {Link, useNavigate} from "react-router";
import {CART, MAIN} from "src/constants/routes.ts";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearchTerm = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(evt.target.value);
    }

    const onHandleClick = () => {
        navigate(`search/${searchTerm}`);
        setSearchTerm('');
    }

    const onHandleKeyDown = async (evt: React.KeyboardEvent) => {
        if (evt.key === 'Enter') {
            navigate(`search/${searchTerm}`);
            setSearchTerm('');
        }
    }

    return (
        <header>
            <div className="header-wrapper">
                <div className="header-wrapper--container">
                    <div className="header-wrapper--placement">
                        <a href="#">Минск</a>
                    </div>
                    <div className="header-wrapper--other">
                        <a href="#">Продавайте на Wildberries</a>
                        <a href="#">Работа в Wildberries</a>
                        <button className="currency">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
                                <circle cx="6" cy="6" r="6" fill="#0039A5"/>
                                <path d="M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0z" fill="#EC1B26"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M.264 7.765a6.003 6.003 0 0 0 11.472 0H.264z"
                                      fill="#00A653"/>
                            </svg>
                            BYN
                        </button>
                    </div>
                </div>
                <div className="header-wrapper--container">
                    <Link to={MAIN} className="logo">
                        <img src="//static-basket-01.wbbasket.ru/vol2/site/i/v3/header/logoWb.svg" alt="Wildberries"
                             loading="lazy"/>
                    </Link>
                    <button className="burger">
                        <img src="src/assets/burger.png" alt="Burger menu"/>
                    </button>
                    <input type="text"
                           className='form-control'
                           placeholder="Найти на Wildberries"
                           value={searchTerm}
                           onChange={(e) => handleSearchTerm(e)}
                           onKeyDown={onHandleKeyDown}
                    />
                    <nav>
                        <ul className="nav">
                            <li className="nav-item">
                                <a href="#" className="default-button address">
                                    Адреса
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="default-button account">
                                    Войти
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to={CART} className="default-button cart">
                                    Корзина
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;