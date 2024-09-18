import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './AuthContext';
import './login.css';

const Login = () => {
    const [credentials, setCredentials] = useState({ usernameOrEmail: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/users/login', credentials);
            login(response.data.user); 
            toast.success('Login successful!');
            navigate('/home');
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message || 'Login failed.');
                toast.error(err.response.data.message || 'Login failed.');
            } else {
                setError('Login failed. Please try again later.');
                toast.error('Login failed. Please try again later.');
            }
        }
    };

    return (
        <div className='login'>
            <ToastContainer />
            <form className='login-container' onSubmit={handleSubmit}>
                <div className='login-title'>
                    <h2>Login</h2>
                </div>
                <div className='login-input'>
                    <input
                        name='usernameOrEmail'
                        type='text'
                        placeholder='Username, Email, or Mobile'
                        required
                        value={credentials.usernameOrEmail}
                        onChange={handleInputChange}
                    />
                    <input
                        name='password'
                        type='password'
                        placeholder='Password'
                        required
                        value={credentials.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='login-condition'>
                    <input type='checkbox' required />
                    <p>By continuing, I accept the terms and conditions</p>
                </div>
                {error && <p className="error">{error}</p>}
                <button type='submit'>Log in</button>
            </form>
        </div>
    );
};

export default Login;
