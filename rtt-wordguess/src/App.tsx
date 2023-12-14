import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='flex flex-col min-h-full-svh'>
        <Navigation />
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
