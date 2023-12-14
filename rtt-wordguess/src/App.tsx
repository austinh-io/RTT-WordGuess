import './App.css';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='flex flex-col min-h-full-svh'>
        <Navigation />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
