import React from 'react';
import Layout from "./layout/Layout.jsx";
import Item from "./components/Item.jsx";

const App = () => {
    return (

        <Layout>
            <div className="content">
                <h1 className="font-bold text-2xl mb-10">Все кроссовки</h1>
                <Item/>
            </div>
        </Layout>
    );
};

export default App;