import './App.css';
import Home from "./pages/HomePage";
import About from "./pages/About";
import Branches from "./pages/Branches";
import Faculty from "./pages/Faculty";
import Acal from "./pages/Acal";
import Library from "./pages/Library";
import Admission from "./pages/Admission";
import Fee from "./pages/Fee";
import AntiRagging from "./pages/AntiRagging";
import Grievance from "./pages/Grievance";
import Alumni from "./pages/Alumni";
import AlumniReg from "./pages/AlumniReg";
import Sports from "./pages/Sports";
import Seminars from "./pages/Seminars";
import Annual from "./pages/Annual";
import Aicte from "./pages/Aicte";
import Mou from "./pages/Mou";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";


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
       
        <Route
          path="/anti-ragging"
          element={
            <Layout>
              <AntiRagging/>
            </Layout>
          }
        >
        </Route>
       
       
        <Route
          path="/grievance"
          element={
            <Layout>
              <Grievance/>
            </Layout>
          }
        >
        </Route>    
       
        <Route
          path="/alumni"
          element={
            <Layout>
              <Alumni/>
            </Layout>
          }
        >
        </Route>
       
       
        <Route
          path="/alumni-reg"
          element={
            <Layout>
              <AlumniReg/>
            </Layout>
          }
        >
        </Route>
       
       
        <Route
          path="/sports"
          element={
            <Layout>
              <Sports/>
            </Layout>
          }
        >
        </Route>

       
        <Route
          path="/seminars"
          element={
            <Layout>
              <Seminars/>
            </Layout>
          }
        >
        </Route>


       
        <Route
          path="/annual"
          element={
            <Layout>
              <Annual/>
            </Layout>
          }
        >
        </Route>

       
        <Route
          path="/aicte"
          element={
            <Layout>
              <Aicte/>
            </Layout>
          }
        >
        </Route>

       
        <Route
          path="/mou"
          element={
            <Layout>
              <Mou/>
            </Layout>
          }
        >
        </Route>

       
        <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery/>
            </Layout>
          }
        >
        </Route>

       
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact/>
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
