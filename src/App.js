import './App.css';
import Home from "./pages/HomePage";
import About from "./pages/About";
import Branches from "./pages/Branches";
import Faculty from "./pages/Faculty";
import Acal from "./pages/Acal";
import Library from "./pages/Library";
import Admission from "./pages/Admission";
import Fee from "./pages/Fee";
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

        <Route
          path="/branches"
          element={
            <Layout>
              <Branches/>
            </Layout>
          }
        >
        </Route>
       

        <Route
          path="/acal"
          element={
            <Layout>
              <Acal/>
            </Layout>
          }
        >
        </Route>
       

        <Route
          path="/faculty"
          element={
            <Layout>
              <Faculty/>
            </Layout>
          }
        >
        </Route>
       

        <Route
          path="/library"
          element={
            <Layout>
              <Library/>
            </Layout>
          }
        >
        </Route>


        <Route
          path="/admission"
          element={
            <Layout>
              <Admission/>
            </Layout>
          }
        >
        </Route>


        <Route
          path="/fee"
          element={
            <Layout>
              <Fee/>
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
