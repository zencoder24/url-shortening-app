import favicon from './assets/images/favicon-32x32.png'
import ExtraContent from './components/ExtraContent';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <SearchBar/>
      <ExtraContent/>
      <Footer/>
    </>
  );
}

export default App;
