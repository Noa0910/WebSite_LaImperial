import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
