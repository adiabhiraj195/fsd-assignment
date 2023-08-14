import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './pages/register/register.page';
import Login from './pages/login/login.page';
import Test from './pages/test';
import ProfilePage from './pages/profile/profile.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Register} />
          <Route path='/login' Component={Login}/>
          <Route path='/test' Component={Test}/>
          <Route path='/profile' Component={ProfilePage}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
