import React from 'react';

const Item = () => {
    return (<div className="card border p-5 rounded-2xl">
        <img width={133} height={112} src="/img/sneackers/1.jpg" alt="Sneacker"/>
        <p className="mb-4 mt-4">Мужские Кроссовки Nike Blazer Mid Suede</p>
        <div className="flex justify-between">
            <div>
                <p className="text-gray-400">Цена:</p>
                <b>12 999 руб.</b>
            </div>
            <button className=" btn-plus border rounded p-2.5">
                <img width={12} height={12} src="/img/plus-grayy.svg" alt="Plus"/>
            </button>
        </div>
    </div>);
};

export default Item;