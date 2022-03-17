import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import About from './Components/pages/About/About';
import Landing from './Components/pages/Landing/Landing';
import Work from './Components/pages/Work/Work';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
