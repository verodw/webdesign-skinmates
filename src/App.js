import React from 'react';
import Home from './Home';

const App = () => {
  const slides = [
    { url: "http://localhost:3000/banner1.jpeg", title: "Banner1" },
    { url: "http://localhost:3000/banner2.jpeg", title: "Banner2" },
    { url: "http://localhost:3000/banner3.jpeg", title: "Banner3" },
    { url: "http://localhost:3000/banner4.jpeg", title: "Banner4" },
  ];

  return (

    <div style={{ background: 'url("/bgskinmates.png") no-repeat center center fixed', backgroundSize: 'cover', height: '200vh' }}>
      {/* Home Section */}
      <Home />
      
    </div>
  );
}

export default App;






