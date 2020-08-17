import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login';
import Register from './pages/Register';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/landing" component={Landing} />
      <Route path="/register" component={Register} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />

    </BrowserRouter>

  )
}

export default Routes;