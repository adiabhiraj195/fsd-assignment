import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Register from './pages/register/register.page';
import Login from './pages/login/login.page';
import Test from './pages/test';
import ProfilePage from './pages/profile/profile.page';
import { AuthProvider } from './context/auth-context';
import { ProfileProvider } from './context/profile-context';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <ProfileProvider>
            <Routes>
              <Route path='/' Component={Register} />
              <Route path='/login' Component={Login} />
              <Route path='/test' Component={Test} />
              <Route path='/profile' Component={ProfilePage} />
            </Routes>
          </ProfileProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
