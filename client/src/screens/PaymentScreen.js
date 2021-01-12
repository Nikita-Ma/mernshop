import React, {useState} from 'react';
import {Form, Button, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import FormContainer from "../components/FormContainer";
import {savePaymentMethod} from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentScreen = ({history}) => {
    const cart = useSelector(state => state.cart)
    const {shoppingAddress} = cart

    if (!shoppingAddress) {
        history.push('/shipping')
    }
    const [paymentMethod, setPaymentMethod] = useState('PayPal')


    const dispatch = useDispatch()
    const submitHendler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }
    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3/>
            <h1>Payment Method</h1>
            <Form onSubmit={submitHendler}>
                <Form.Group>
                    <Form.Label as='legend'>
                        Select Method
                    </Form.Label>
                </Form.Group>
                <Col>
                    <Form.Check type='radio' label='PayPal' id='PayPal' name='paymentpethod' value='PayPal' checked
                                onChange={(e) => setPaymentMethod(e.target.value)}>
                    </Form.Check>
                    <Form.Check type='radio' label='Stripe' id='Stripe' name='paymentpethod' value='Stripe' checked
                                onChange={(e) => setPaymentMethod(e.target.value)}>
                    </Form.Check>
                </Col>
                <Button type='submit' variant='primary'>

                </Button>
            </Form>
        </FormContainer>
    )
};

export default PaymentScreen;