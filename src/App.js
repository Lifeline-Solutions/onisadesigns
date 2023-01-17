import React from 'react';
import Categories from './components/categories/Categories';
import Navbar from './components/header/Navbar';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Categories />
    </div>
  );
}

export default App;
