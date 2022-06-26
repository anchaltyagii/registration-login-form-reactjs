import React, { useState } from 'react';
import close_button from '../../Assets/close_button.png';
import './index.scss';

const Index = () => {
    
    const [show, setShow] = useState(true);

    const handleButton = () => {
        setShow(false);
        alert("hey");
    }

  return (
    <>
        <div className = 'register-form-container'>
            <div className = 'popup-box'>
                <img src = {close_button} className = 'close_button' onClick = {handleButton} alt = 'close_icon'/>
               Error Message!
            </div>
        </div>
    </>
  )
}

export default Index
