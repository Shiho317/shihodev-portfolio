import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Components/pages/About/About';
import Contact from './Components/pages/Contact/Contact';
import Landing from './Components/pages/Landing/Landing';
import Work from './Components/pages/Work/Work';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {

  return (
    <div>
      <GlobalStyle/>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
