import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/styles.scss';
import NavBar from './components/navBar';
import HomePage from './pages/HomePage';
import ProductListing from './pages/ProductListingPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Error404 from './components/Error404';
import MyProductsPage from './pages/MyProductsPage';
import CreateOrderPage from './pages/CreateOrderPage';
import OrdersListingPage from './pages/OrdersListingPage';
import OrderPage from './pages/OrderPage';

function App() {
    return (
        <div className="app">
            <NavBar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/products" component={ProductListing} />
                <Route exact path="/my_products" component={MyProductsPage} />
                <Route exact path="/products/:id" component={ProductPage} />
                <Route exact path="/cart" component={CartPage} />
                <Route exact path="/order" component={CreateOrderPage} />
                <Route exact path="/orders" component={OrdersListingPage} />
                <Route exact path="/orders/:id" component={OrderPage} />
                <Route path="*" component={Error404} />
            </Switch>
        </div>
    );
}
export default App;
