import CartItem from "./CartItem.jsx";

const Cart = () => {
    return (
        <div className="absolute right-0 w-[415px] h-full bg-white p-8 flex flex-col">
            <div className="flex justify-between items-center mb-5">
                <h2 className="font-bold text-xl">Корзина</h2>
                <img className="cursor-pointer opacity-50 hover:opacity-100" width={40} height={40} src="/img/cart-btn.svg" alt="Delete"/>
            </div>
            <div className="flex-1 overflow-auto mb-6">
                <CartItem/>
                <CartItem/>
            </div>
            <ul className="mb-5">
                <li className="flex justify-between items-center">
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 руб.</b>
                </li>
                <li className="flex justify-between items-center">
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 руб.</b>
                </li>
            </ul>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer flex justify-between items-center">
                <p className="flex-1">Оформить заказ</p>
                <img className="pr-5" src="/img/arrow-btn-cart.svg" alt="Arrow"/>
            </button>
        </div>

    );
};

export default Cart;