import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Game from './pages/game/Game';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <>
      <div className='flex flex-col min-h-full-svh overflow-hidden bg-slate-950'>
        <Navigation />
        <div className='flex bg-primary-bg-light dark:bg-primary-bg-dark items-center justify-center flex-grow'>
          <AnimatePresence
            initial={false}
            mode='wait'>
            <Routes
              location={location}
              key={location.key}>
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
          </AnimatePresence>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
