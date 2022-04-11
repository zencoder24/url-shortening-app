import ExtraContent from './components/ExtraContent/ExtraContent';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import SearchBarTy from './components/SearchBar/SearchBarTy';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <SearchBarTy />
      <ExtraContent />
      <Footer />
    </>
  );
}

export default App;
