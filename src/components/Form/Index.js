import React, { useState } from 'react';
import axios from 'axios';
import './index.scss';

const Index = () => {

    const [user, setUser] = useState({
        name : '',
        username : '',
        email : '',
        phone : '',
        password : '',
        confirmPassword : ''
    })
    const [error, setError] = useState(null);

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
        const {name, username, email, phone, password, confirmPassword} = user;
        
        if(name && username && email && phone && (password === confirmPassword)) {
            axios.post('http://localhost:5000/addData', 
            user)
            .then(function(res) {
                setError(res.data.message);
                if(res.data.message === "Success!") {
                    setUser({
                    name : '',
                    username : '',
                    email : '',
                    phone : '',
                    password : '',
                    confirmPassword : '',
                })
                setError(null);
             }
            })
            .catch(function(error) {
                console.log(error);
            })
            
            setError(null)
        }
        else {
            // setError('Invalid Input');
        }
    }

  return (
      <>
    <h2>Registration</h2>
    <div className = 'register-form-container'>
      <form onSubmit = {handleSubmit}>
          <label>Full Name:</label> <br></br>
          <input 
           type = 'text'
           name = 'name'
           value = {user.name}
           onChange = {handleChange}
           placeholder = 'Full Name'
           autoComplete = 'off'
          /> <br/>
          <label>Username:</label> <br></br>
          <input 
           type = 'text'
           placeholder = 'Username'
           name = 'username'
           value = {user.username}
           onChange = {handleChange}
           autoComplete = 'off'
          /> 
           <p>{error}</p>
          <label>Email Id:</label> <br></br>
          <input 
           type = 'email'
           placeholder = 'Email Id'
           name = 'email'
           value = {user.email}
           onChange = {handleChange}
           autoComplete = 'off'
          /> <br/>
          <label>Phone Number:</label> <br></br>
          <input 
           type = 'text'
           placeholder = 'Phone Number'
           name = 'phone'
           value = {user.phone}
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
          /> 
          <p>{error}</p> 
          <label>Confirm Password:</label> <br></br>
          <input 
           type = 'password'
           placeholder = 'Confirm Password'
           name = 'confirmPassword'
           value = {user.confirmPassword}
           onChange = {handleChange}
          /> <br/>

          <button onClick = {handleSubmit}>SUBMIT</button>
      </form>
    </div>
    </>
  )
}

export default Index;
