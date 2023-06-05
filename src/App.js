import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// Import Components
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
// App Components
function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter>
          <Routes>

          </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
