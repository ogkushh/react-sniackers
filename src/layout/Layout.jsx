import React from 'react';
import {Link} from "react-router-dom";
import favorites from "../pages/Favorites.jsx";
import Favorites from "../pages/Favorites.jsx";

const Layout = ({children, onClickCart, price = 0}) => {
    return (
        <div className="wrapper p-11 bg-white rounded-[20px] max-w-[1080px] mx-auto my-[50px] shadow-xl">
            <header className="flex justify-between mb-11">
                <div className="headerLeft flex justify-between items-center">
                    <Link to="/">
                        <img className="mr-5" width={40} height={40} src="/img/logo.png" alt="Логотип"/>
                    </Link>
                    <div className="headerInfo">
                        <h3 className="font-bold text-2xl">React Snickers</h3>
                        <p className="text-gray-500">Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="headerRight flex justify-between items-center">
                    <li onClick={onClickCart} className="flex items-center mr-5 cursor-pointer">
                        <img className="mr-2" src="/img/cart.svg" alt="Cart"/>
                        <span className="text-gray-500 font-bold">{`${price} руб.`}</span>
                    </li>
                    <li className="mr-3 cursor-pointer">
                        <Link to="/favorites">
                            <img src="/img/header-heart.svg" alt="Heart"/>
                        </Link>
                    </li>
                    <li className="cursor-pointer">
                        <img src="/img/user.svg" alt="User"/>
                    </li>
                </ul>
            </header>
            <hr className="mb-11"/>
            {children}
        </div>
    );
};

export default Layout;