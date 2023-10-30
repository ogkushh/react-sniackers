import React from "react";

const Item = ({title, img, price, onPlus, onPlusSumm}) => {
    const [addToCart, setAddToCart] = React.useState(false)
    const [addToFavorite, setAddToFavorite] = React.useState(false)
    const onClickPlus = () => {
        onPlus()
        onPlusSumm(price)
        setAddToCart(!addToCart)
    }
    const onClickFavorite = () => {
        setAddToFavorite(!addToFavorite)
    }
    return (
        <div
            className="border p-5 rounded-2xl max-w-[212px] mb-5 hover:shadow-xl hover:translate-y-[-5px] transition-all cursor-pointer">
            <div className="absolute cursor-pointer">
                <img onClick={onClickFavorite}  src={addToFavorite ? '/img/heart-red.svg' : '/img/heart-gray.svg'} alt="Unliked"/>
            </div>
            <img width={133} height={112} src={img} alt="Sneacker"/>
            <p className="mb-4 mt-4">{title}</p>
            <div className="flex justify-between">
                <div>
                    <p className="text-gray-400">Цена:</p>
                    <b>{price}</b>
                </div>
                <img onClick={onClickPlus} src={addToCart ? '/img/btn-green.svg' : '/img/plus-gray.svg'} alt="Plus"/>
            </div>
        </div>);
};

export default Item;