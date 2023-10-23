const Item = ({name, img, price}) => {
    return (
        <div className="border p-5 rounded-2xl max-w-[212px] mb-5 hover:shadow-xl hover:translate-y-[-5px] transition-all cursor-pointer">
            <div className="absolute cursor-pointer">
                <img width={30} height={30} src="/img/heart-gray.svg" alt="Unliked"/>
            </div>
            <img width={133} height={112} src={img} alt="Sneacker"/>
            <p className="mb-4 mt-4">{name}</p>
            <div className="flex justify-between">
                <div>
                    <p className="text-gray-400">Цена:</p>
                    <b>{price}</b>
                </div>
                <button className="border rounded p-2.5">
                    <img width={12} height={12} src="/img/plus-grayy.svg" alt="Plus"/>
                </button>
            </div>
        </div>);
};

export default Item;