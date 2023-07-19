import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
      </Routes>
      <div>
        <Footer/>
      </div>
      </Router>
    </div>
  );
}

export default App;
