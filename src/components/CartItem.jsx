const CartItem = ({items, onDelete}) => {
    const deleteCard = () => {
        onDelete(items.id)
    }
    return (
        <div className="flex justify-between items-center border rounded-xl p-4 mb-5">
            <img className="mr-5" width={100} height={100} src={items.img} alt="Sneacker"/>
            <div className="">
                <p className="text-sm">{items.title}</p>
                <b>{items.price} руб.</b>
            </div>
            <div>
                <img onClick={deleteCard} className="cursor-pointer opacity-50 hover:opacity-100" width={64} height={64} src="/img/cart-btn.svg" alt="Delete"/>
            </div>
        </div>
    );
};

export default CartItem;