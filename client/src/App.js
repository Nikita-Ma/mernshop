import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Container} from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";

const App = () => {
    return (
        <Router>
            <Header/>
            <main className='py-3'>
                <Container>
                    <Route path='/shopping' component={ShippingScreen} exact/>
                    <Route path='/' component={HomeScreen} exact/>
                    <Route path='/login' component={LoginScreen} exact/>
                    <Route path='/register' component={RegisterScreen} exact/>
                    <Route path='/profile' component={ProductScreen} exact/>
                    <Route path='/product/:id' component={ProductScreen} exact/>
                    <Route path='/cart/:id?' component={CartScreen} exact/>
                </Container>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
