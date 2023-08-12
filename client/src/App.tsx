import React from 'react';
import './App.css';
import Register from './pages/register/register.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Register} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
