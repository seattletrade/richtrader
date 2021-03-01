import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();    
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();        
        try {
            setError(' ')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/gamestock/user")
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h1 className="text-center mb-4">Log In</h1>                                        
                    {error && <Alert variant="danger">{error}</Alert> }
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} />
                        </Form.Group>                        
                        <Button disabled={loading} className="w-100" type="submit" style={{backgroundColor: "#FD0000"}}>Log In</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/gamestock/forgot-password" style={{color: "#FD0000"}}>Forgot password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center text-white mt-2">
                Don't have an account? <Link to="/gamestock/signup" style={{color: "#FD0000"}}>Sign Up</Link>
            </div>
        </>
    )
}
