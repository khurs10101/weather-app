import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Cities from './pages/Cities';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="app-right-section">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cities' element={<Cities />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
