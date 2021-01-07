import React, {useState} from 'react';
import {Form, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import FormContainer from "../components/FormContainer";
import {saveShoppingAddress} from "../actions/cartActions";

const ShippingScreen = ({history}) => {
    const cart = useSelector(state => state.cart)
    const {shoppingAddress} = cart


    const [address, setAddress] = useState(shoppingAddress.address)
    const [city, setCity] = useState(shoppingAddress.city)
    const [postalCode, setPostalCode] = useState(shoppingAddress.postalCode)
    const [country, setCountry] = useState(shoppingAddress.country)

    const dispatch = useDispatch()
    const submitHendler = (e) => {
        e.preventDefault()
        dispatch(saveShoppingAddress({address, city, postalCode, country}))
        history.push('/payment')
    }
    return (
        <FormContainer>
            <h1>Shopping</h1>
            <Form onSubmit={submitHendler}>
                <Form.Group control='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter address'
                        value={address}
                        required
                        onChange={e => setAddress(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group control='City'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter city'
                        value={city}
                        required
                        onChange={e => setCity(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group control='postalCode'>
                    <Form.Label>postalCode</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter postalCode'
                        value={postalCode}
                        required
                        onChange={e => setPostalCode(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group control='country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Country'
                        value={country}
                        required
                        onChange={e => setCountry(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>

                </Button>
            </Form>
        </FormContainer>
    )
};

export default ShippingScreen;