
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/HEADER/header';
import Home from './Component/HOME/home'
import About from './Component/ABOUT/about';
import AboutPage from './Component/PAGES/ABOUT-PAGE/about';
import Modes from './Component/MODES/mode';
import ModesPage from './Component/PAGES/MODES-PAGE/modes';
import Character from './Component/CHARACTER/character';
import CharacterPage from './Component/PAGES/CHARACTER-PAGE/character';
import Footer from './Component/FOOTER/footer';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutPage />} />
        <Route path='/modes' element={<ModesPage />} />
        <Route path='/character' element={<CharacterPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
