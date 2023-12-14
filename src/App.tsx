import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Game from './pages/Game';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='flex flex-col min-h-full-svh'>
        <Navigation />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/game'
            element={<Game />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
