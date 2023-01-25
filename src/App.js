import React, { useState, useEffect } from 'react';

import Categories from './components/categories/Categories';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Home from './components/home/Home';
import Loader from './components/Loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Home />
          <Categories />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
