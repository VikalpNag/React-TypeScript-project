import React from 'react';
import './App.css';
import Top from './components/top';
import Mid from './components/mid';
import Bottom from './components/bottom';


function App() {
  return (
    <div className="App">
      <div className="appBody">
        <Top />
        <Mid />
        <Bottom />
      </div>
    </div>
  );
}

export default App;