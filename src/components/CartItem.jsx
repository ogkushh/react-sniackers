const CartItem = () => {
    return (
        <div className="flex justify-between items-center border rounded-xl p-4 mb-5">
            <img className="mr-5" width={100} height={100} src="/img/sneackers/1.jpg" alt="Sneacker"/>
            <div className="">
                <p className="text-sm">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
            </div>
            <div>
                <img className="cursor-pointer opacity-50 hover:opacity-100" width={64} height={64} src="/img/cart-btn.svg" alt="Delete"/>
            </div>
        </div>
    );
};

export default CartItem;