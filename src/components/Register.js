import React, { useState } from 'react';
import axios from 'axios';
import './login.css'

import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const {login}=useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/users/register', formData);
     
            
      setSuccess('Registration successful!');
      setError('');
     
            navigate('/home');
     
    } catch (err) {
      setError('Registration failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className='login'>
      <form  className='login-container' onSubmit={handleSubmit}>
      <div className='login-title'>
      <h2>Register</h2>
    </div>
        
        {Object.keys(formData).map((key) => (
          <div key={key} className='login-input'>
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
              type={key === 'password' ? 'password' : 'text'}
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
