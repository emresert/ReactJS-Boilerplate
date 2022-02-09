import React from 'react'
import { Navigate, useLocation } from "react-router-dom"


function ProtectedRoute(props: { children: any }): JSX.Element {

  const isLoggedIn: boolean = localStorage.getItem('logged_user') !== null;

  const { children } = props

  return isLoggedIn === true
    ? <Navigate to="/login" state={{ from: `${location.pathname}${location.search}` }} replace />
    : children

}

export default ProtectedRoute