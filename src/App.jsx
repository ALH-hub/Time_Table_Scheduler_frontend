import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, StudentPortal, Login, NotFound } from './pages';

function App() {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <main className='grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/student' element={<StudentPortal />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
