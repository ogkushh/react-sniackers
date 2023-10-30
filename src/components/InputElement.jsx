
const InputElement = ({onChange, value, setValue}) => {
    return (
        <div className="search flex justify-between border rounded-xl relative">
            <img className="mx-2" width={14} height={14} src="/img/search.svg" alt="Search"/>
            <input value={value} onChange={onChange} className="p-2" type="text" placeholder="Поиск..."/>
            {value && <img onClick={() => setValue('')} className="cursor-pointer opacity-50 hover:opacity-100 absolute right-1.5 top-1.5" width={24} height={24} src="/img/cart-btn.svg" alt="Delete"/>}
        </div>
    );
};

export default InputElement;