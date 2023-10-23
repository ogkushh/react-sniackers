import Layout from "./layout/Layout.jsx";
import Item from "./components/Item.jsx";
import InputElement from "./components/InputElement.jsx";
import Cart from "./components/Cart.jsx";

const App = () => {
    const array = [
        {id: 1, name: 'Мужские Кроссовки Nike Blazer Mid Suede', img: '/img/sneackers/1.jpg', price: '12 999'},
        {id: 2, name: 'Мужские Кроссовки Nike Air Max 270', img: '/img/sneackers/2.jpg', price: '12 999'},
        {id: 3, name: 'Мужские Кроссовки Nike Blazer Mid Suede', img: '/img/sneackers/3.jpg', price: '8 499'},
        {id: 4, name: 'Кроссовки Puma X Aka Boku Future Rider', img: '/img/sneackers/4.jpg', price: '8 999'}
    ]
    return (
        <Layout>
            <div className="absolute left-0 top-0 w-full z-10 bg-black-rgba h-full hidden">
                <Cart/>
            </div>
            <div className="content">
                <div className=" flex justify-between items-center mb-10">
                    <h1 className="font-bold text-2xl">Все кроссовки</h1>
                    <InputElement/>
                </div>
                <div className=" grid grid-cols-4">
                    {
                        array.map((obj) => (
                            <Item
                                key={obj.id}
                                name={obj.name}
                                img={obj.img}
                                price={obj.price}
                            />
                        ))
                    }
                </div>
            </div>
        </Layout>
    );
};

export default App;