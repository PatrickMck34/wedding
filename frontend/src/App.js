import React, {useState} from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserAdmin from './components/userAdmin/userAdmin.jsx';
import Login from './components/login/login.jsx';
import { useSelector } from 'react-redux';
import * as ProvidersActions from "./store/provider.js"
import { useDispatch } from 'react-redux';
import Footer from './components/footer/footer.js';
import {SunflowerContext} from './components/sunflowerContext/sunflowerContext.jsx';
import Landing from './components/wedding/landing/wedding.jsx';
export default function App() {

  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  React.useEffect(() => {
    if (user) {
      dispatch(ProvidersActions.getProvider(user.id))
    }
  }, [user])
 
  return (
 
    <Router>

      <Routes>
  

        <Route path="/" element={<Landing />} />

      </Routes>
      <Footer />
    </Router>
  )
}
