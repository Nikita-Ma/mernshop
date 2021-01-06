import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Form, Button, Row, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Massage from "../components/Massage";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import {login} from "../actions/userActions";

const LoginScreen = ({location, history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const userLogin = useSelector(state => state.userLogin)
    const {loading, error, userInfo} = userLogin
    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }

    }, [history, userInfo, redirect])
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login((email, password)))
    }
    const dispatch = useDispatch()


    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Massage variant='danger'>{error}</Massage>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group control='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group control='password'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Sign In
                </Button>
                <Row className='py-3'>
                    <Col>
                        New Customer <Link
                        to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
                    </Col>
                </Row>
            </Form>
        </FormContainer>
    )
};

export default LoginScreen;