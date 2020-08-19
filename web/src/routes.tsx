import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterSucess from './pages/RegisterSucess';
import ResetPassword from './pages/ResetPassword';
import ResetPassSucess from './pages/ResetPassSucess';
import TeacherFormSucess from './pages/TeachFormSucess';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/landing" component={Landing} />
      <Route path="/register" component={Register} />
      <Route path="/register-sucess" component={RegisterSucess} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/give-classes-sucess" component={TeacherFormSucess} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/reset-password-sucess" component={ResetPassSucess} />


    </BrowserRouter>

  )
}

export default Routes;