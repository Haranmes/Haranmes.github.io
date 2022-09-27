import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home.jsx';

import Navigation from './components/navbar.jsx'
import Contact from './pages/contact.jsx'
function App() {
  return (
    <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
            <Navigation />
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </Router>
        
    </div>
  
  );
}

export default App;
