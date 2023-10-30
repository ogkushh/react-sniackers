import Layout from "../layout/Layout.jsx";
import Item from "../components/Item.jsx";
import InputElement from "../components/InputElement.jsx";
import Cart from "../components/Cart.jsx";
import React from "react";
import axios from "axios";

const Home = () => {
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [favorites, setFavorites] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
    const [price, setPrice] = React.useState()
    const [cartOpened, setCartOpened] = React.useState(false)
    React.useEffect(() => {
        axios.get(`https://649ea858245f077f3e9cbad5.mockapi.io/items`)
            .then(res => {
                setItems(res.data)
            })
        axios.get(`https://649ea858245f077f3e9cbad5.mockapi.io/cart`)
            .then(res => {
                setCartItems(res.data)
            })
    }, [])

    const SummaryHead = (priceNew) => {
        setPrice(priceNew)
    }
    const onAddToCart = (item) => {
        axios.post(`https://649ea858245f077f3e9cbad5.mockapi.io/cart`, item)
        setCartItems( (prev) => [...prev, item])
    }
    const onAddToFavorite = (item) => {
        axios.post(`https://649ea858245f077f3e9cbad5.mockapi.io/cart`, item)
        setCartItems( (prev) => [...prev, item])
    }
    const onDeleteFromCart = (id) => {
        axios.delete(`https://649ea858245f077f3e9cbad5.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter((item) => item.id !== id))

    }

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
    }
    return (
        <Layout price={price} onClickCart={() => setCartOpened(true)}>
            {cartOpened &&
                <div className="absolute left-0 top-0 w-full z-10 bg-black-rgba h-full">
                    <Cart
                        items={cartItems}
                        onClose={() => setCartOpened(false)}
                        onDelete={(id) => onDeleteFromCart(id)}
                    />
                </div>
            }
            <div className="content">
                <div className=" flex justify-between items-center mb-10">
                    <h1 className="font-bold text-2xl">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все Кроссовки'}</h1>
                    <InputElement onChange={onChangeSearchInput} value={searchValue} setValue={setSearchValue}/>
                </div>
                <div className=" grid grid-cols-4">
                    {
                        items
                            .filter((item) => item.title
                                .toLowerCase()
                                .includes(searchValue.toLowerCase()))
                            .map((obj) => (
                            <Item
                                key={obj.id}
                                id={obj.id}
                                title={obj.title}
                                img={obj.img}
                                price={obj.price}
                                onPlus={() => onAddToCart(obj)}
                                onPlusSumm={(price) => SummaryHead(price)}
                            />
                        ))
                    }
                </div>
            </div>
        </Layout>
    );
};

export default Home;