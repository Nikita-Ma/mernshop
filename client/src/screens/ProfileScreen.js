import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Form, Button, Row, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Massage from "../components/Massage";
import Loader from "../components/Loader";
import {getUserDatails} from "../actions/userActions";

const ProfileScreen = ({location, history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const userDetails = useSelector(state => state.userDetails)
    const {loading, error, user} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.name) {
                dispatch(getUserDatails('profile'))
            } else {
                setName(user.name)
                setName(user.email)
            }
        }

    }, [dispatch, userInfo, redirect, user])
    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            //asdasdasdasd
        }
    }
    const dispatch = useDispatch()


    return (
        <FormContainer>
            <h2>Sign Profile</h2>
            {message && <Massage variant='danger'>{message}</Massage>}
            {error && <Massage variant='danger'>{error}</Massage>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>

                <Form.Group control='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={e => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group control='confirmPassword'>
                    <Form.Label>Confirm Password </Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

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
                    Update
                </Button>
                <Row className='py-3'>
                    <Col>
                        Have Account? <Link
                        to={redirect ? `/login?redirect=${redirect}` : '/login'}>Register</Link>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col md={3}>

                </Col>
                <Col md={9}>
                    <h2>My orders</h2>
                </Col>
            </Row>
        </FormContainer>
    )
};

export default ProfileScreen;