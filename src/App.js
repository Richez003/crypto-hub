import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Coins from './components/Coins';
import TopCoin from './components/TopCoin';
import CoinsDetail from './components/CoinsDetail';

function App() {
  return (
    <div>
      <>
        <Router>
          <Navigation />
          <TopCoin />
          <Routes>
            <Route path="/" element={<Coins />} />
            <Route path="/TopCoin" element={<TopCoin />} />
            <Route path="/coin-detail" element={<CoinsDetail />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
