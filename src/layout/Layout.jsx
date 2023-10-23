import React from 'react';

const Layout = ({children}) => {
    return (
        <div className="wrapper p-11 bg-white rounded-[20px] max-w-[1080px] mx-auto my-[50px] shadow-xl">
            <header className="flex justify-between mb-11">
                <div className="headerLeft flex justify-between items-center">
                    <img className="mr-5" width={40} height={40} src="/img/logo.png" alt="Логотип"/>
                    <div className="headerInfo">
                        <h3 className="font-bold text-2xl">React Snickers</h3>
                        <p className="text-gray-500">Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="headerRight flex justify-between items-center">
                    <li className="flex items-center mr-5">
                        <img className="mr-2" src="/img/cart.svg" alt="Cart"/>
                        <span className="text-gray-500 font-bold">1205р</span></li>
                    <li>
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