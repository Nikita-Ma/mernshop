import React from 'react';
import {Button, Row, Col, ListGroup, Image, Card} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import FormContainer from "../components/FormContainer";
import Massage from "../components/Massage";
import {Link} from "react-router-dom";

const PlaceOrderScreen = () => {
    const cart = useSelector(state => state.cart)
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }
    cart.itemsPice = addDecimals(cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))
    cart.shoppingPrice = addDecimals(cart.itemsPice > 100 ? 0 : 100)

    cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPice).toFixed(2)))
    cart.totalPrice = (Number(cart.itemsPice) + Number(cart.shoppingPrice) + Number(cart.taxPrice)).toFixed(2)
    const placeOrderHandler = () => {

    }
    return (
        <>
            <CheckoutSteps step1 step2 step3 step4/>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shopping</h2>
                            <p>
                                <strong>Address^</strong>
                                {cart.shoppingAddress.address},{cart.shoppingAddress.city},
                                {cart.shoppingAddress.postalCode}, {cart.shoppingAddress.country}
                            </p>
                        </ListGroup.Item>


                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <strong>Method:</strong>
                            {cart.paymentMethod}
                        </ListGroup.Item>


                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {cart.cartItems.length === 0
                                ? <Massage>Your cart is empty</Massage>
                                : (<ListGroup variant='flesh'>
                                    {cart.cartItems.map((item, index) => {
                                        return (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={1}>
                                                        <Image src={item.image} alt={item.name} fluid rounded/>
                                                    </Col>
                                                    <Col md={1}>
                                                        <Link to={`/product/${item.product}`}>
                                                            {item.name}
                                                        </Link>
                                                    </Col>
                                                    <Col md={4}>
                                                        {item.qty} x ${item.price} = ${item.qty}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        )
                                    })}
                                </ListGroup>)

                            }
                        </ListGroup.Item>

                    </ListGroup>
                    <Col md={4}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h2>Order Summary</h2>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Items
                                        </Col>
                                        <Col>${cart.itemsPice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Shipping
                                        </Col>
                                        <Col>${cart.shoppingPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Tax
                                        </Col>
                                        <Col>${cart.taxPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Totle
                                        </Col>
                                        <Col>${cart.totalPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button type='button' className='btn-block' disabled={cart.cartItems === 0}
                                            onClick={placeOrderHandler}>Order</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Col>
            </Row>
        </>
    )
};

export default PlaceOrderScreen;