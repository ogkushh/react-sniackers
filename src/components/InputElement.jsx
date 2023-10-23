
const InputElement = () => {
    return (
        <div className="search flex justify-between border rounded-xl">
            <img className="mx-2" width={14} height={14} src="/img/search.svg" alt="Search"/>
            <input className="p-2" type="text" placeholder="Поиск..."/>
        </div>
    );
};

export default InputElement;