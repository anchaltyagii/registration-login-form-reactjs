import React, {useState} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Popup from '../PopUp/Index';
import close_button from '../../Assets/close_button.png';
import Modal from 'react-modal';
import './index.scss';

const Index = () => {

    const [user, setUser] = useState({
        username : '',
        email : '',
        password : ''
    })
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name] : value
        })
         console.log(name, value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {username, email, password} = user;
        
        if(username && email ) {
            axios.post('http://localhost:5000/login', 
            user)
            .then(function(res) {
                setError(res.data.message);
                setMessage(true);
                if(res.data.message === "Logged in success!") {
                    setUser({
                    username : '',
                    email : '',
                    password : ''
                })
             }
            })
            .catch(function(error) {
                console.log(error);
            })
            
            setError(null)
        }
    }

    const handleButton = () => {
        setMessage(false);
    }

  return (
    <>
       <h2>Login</h2>
       {message ? <div className = 'popup-form-container'>
            <div className = 'popup-box'>
                <img src = {close_button} className = 'close_button' onClick = {handleButton} alt = 'close_icon'/>
               {error}
            </div>
        </div> : null}
       <div className = 'register-form-container'>
      <form onSubmit = {handleSubmit}>
          <label>Username:</label> <br></br>
          <input 
           type = 'text'
           placeholder = 'Username'
           name = 'username'
           value = {user.username}
           onChange = {handleChange}
           autoComplete = 'off'
          /> <br></br>
          <label>Email Id:</label> <br></br>
          <input 
           type = 'email'
           placeholder = 'Email Id'
           name = 'email'
           value = {user.email}
           onChange = {handleChange}
           autoComplete = 'off'
          /> <br/>
          <label>Password:</label> <br></br>
          <input 
           type = 'password'
           placeholder = 'Password'
           name = 'password'
           value = {user.password}
           onChange = {handleChange}
          /> <br></br>

          <button onClick = {handleSubmit}>LOGIN</button>
          <h4>OR</h4>
          <NavLink exact to = '/register'>
            <button>REGISTER</button>
          </NavLink>
      </form>
    </div>

    </>
  )
}

export default Index
