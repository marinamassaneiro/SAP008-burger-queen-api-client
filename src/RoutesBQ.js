import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Salon } from './pages/salon/salon';
import { Fragment } from 'react';
import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom';

export const RoutesBQ = () => {
 return (
  <BrowserRouter>
    <Fragment>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/salon' element={<Salon />} />
      </Routes>
    </Fragment>
  </BrowserRouter>
 );
}
