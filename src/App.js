import './App.css';
import Home from "./pages/HomePage";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home/>
          </Layout>
        }>
       
        </Route>

        <Route
          path="/about"
          element={
            <Layout>
              <About/>
            </Layout>
          }
        >
      
        </Route>
       
      </Routes>
    </BrowserRouter>
        
    </div>
  );
}

export default App;
