import React from 'react';

import Header from './Header'
import { BrowserRouter } from 'react-router-dom';


function App() {
  const handleAllMenuClick = (e) => {
    console.log("kk")
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
    
      </BrowserRouter>
      
    </div>
  );
}

export default App;
