import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <div className="flex p-5 bg-gray-100">
      <Sidebar/>
      <div className="flex-1 flex flex-col px-5">
        <Navbar />
        <div className="p-8">
          <Routes>
            <Route path='/' element={<Dashboard/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
