import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './components/Form/Index';
import Login from './components/LoginForm/Index';

function App() {
  return (
    <>
    <Login/>
     <Form />
    </>
  );
}

export default App;
