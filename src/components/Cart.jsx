import CartItem from "./CartItem.jsx";

const Cart = ({onClose, items = [], onDelete}) => {
    return (
        <div className="absolute right-0 w-[415px] h-full bg-white p-8 flex flex-col">
            <div className="flex justify-between items-center mb-5">
                <h2 className="font-bold text-xl">Корзина</h2>
                <img onClick={onClose} className="cursor-pointer opacity-50 hover:opacity-100" width={40} height={40} src="/img/cart-btn.svg" alt="Delete"/>
            </div>
            {
                (items.length > 0) ?
                    (
                        <div className="flex flex-col">
                            <div className="flex-1 overflow-auto mb-6">
                                {
                                    items.map((obj) => (
                                        <CartItem key={obj.id} items={obj} onDelete={onDelete}/>

                                    ))
                                }
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

                    )
                    :
                    (
                        <div className="flex flex-col flex-auto justify-center">
                            <img className="block  mx-auto mb-[21px]" src="/img/empty-cart.png" alt="Empty"/>
                            <h3 className="font-bold text-xl text-center mb-[9px]">Корзина пустая</h3>
                            <p className="text-center opacity-40 w-[285px] block mx-auto mb-7">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <button onClick={onClose} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer flex justify-between items-center">
                                <img className="" src="/img/arrow-back-cart.svg" alt="Arrow"/>
                                <p className="flex-1">Вернуться назад</p>
                            </button>
                        </div>
                    )

            }
        </div>

    );
};

export default Cart;