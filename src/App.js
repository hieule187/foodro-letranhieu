import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import News from './components/News';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<News />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
