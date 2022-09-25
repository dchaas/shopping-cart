import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

// App.js will be the entry point for the router
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/*
components needed:
  Card
  Navbar
  CartStatus
  Home
  Cart
  Product (page)
*/
