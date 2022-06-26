import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './components/Form/Index';
import Login from './components/LoginForm/Index';

function App() {
  return (
    <>
    <Switch>
      <Route exact path = '/'>{<Login />}</Route>
      <Route path = '/register'>{<Form />}</Route>
    </Switch>
    </>
  );
}

export default App;
