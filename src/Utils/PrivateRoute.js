import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { getToken } from './Common';
import { useParams } from 'react-router-dom';

/* const id = useParams() */
// handle the private routes
const PrivateRoute = () => {
  // determine if authorized, from context or however you're doing it
  const accessToken = sessionStorage.getItem('accessToken');
  //const isAdmin=sessionStorage.getItem('isAdmin')

  /* console.log(auth); */
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  console.log("end of private routes before return statement");
  return (accessToken !== undefined) ? <Outlet /> : <Navigate to='/' />;

}

export default PrivateRoute;