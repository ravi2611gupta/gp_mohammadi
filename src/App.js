import './App.css';
import Home from "./pages/HomePage/Index";
import About from "./pages/About";
import Branches from "./pages/Branches";
import Faculty from "./pages/Faculty/Index";
import Acal from "./pages/Acal/Index";
import Library from "./pages/Library/Index";
import Admission from "./pages/Admission";
import Fee from "./pages/Fee";
import AntiRagging from "./pages/AntiRagging";
import Grievance from "./pages/Grievance";
import Alumni from "./pages/Alumni/Index";
import AlumniReg from "./pages/AlumniReg";
import Sports from "./pages/Sports";
import Seminars from "./pages/Seminars";
import Annual from "./pages/Annual";
import Aicte from "./pages/Aicte";
import Mou from "./pages/Mou";
import Gallery from "./pages/Gallery";
import Committee from "./pages/Committee";
import Contact from "./pages/Contact";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      
      <div><Toaster/></div>

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <Layout>
            <Home/>
          </Layout>
        }>
        </Route>

        <Route exact
          path="/about"
          element={
            <Layout>
              <About/>
            </Layout>
          }
        >
        </Route>

        <Route exact
          path="/branches"
          element={
            <Layout>
              <Branches/>
            </Layout>
          }
        >
        </Route>
       

        <Route exact
          path="/acal"
          element={
            <Layout>
              <Acal/>
            </Layout>
          }
        >
        </Route>
       

        <Route exact
          path="/faculty"
          element={
            <Layout>
              <Faculty/>
            </Layout>
          }
        >
        </Route>
       

        <Route exact
          path="/library"
          element={
            <Layout>
              <Library/>
            </Layout>
          }
        >
        </Route>


        <Route exact
          path="/admission"
          element={
            <Layout>
              <Admission/>
            </Layout>
          }
        >
        </Route>


        <Route exact
          path="/fee"
          element={
            <Layout>
              <Fee/>
            </Layout>
          }
        >
        </Route>
       
        <Route exact
          path="/anti-ragging"
          element={
            <Layout>
              <AntiRagging/>
            </Layout>
          }
        >
        </Route>
       
       
        <Route exact
          path="/grievance"
          element={
            <Layout>
              <Grievance/>
            </Layout>
          }
        >
        </Route>    
       
        <Route exact
          path="/alumni"
          element={
            <Layout>
              <Alumni/>
            </Layout>
          }
        >
        </Route>
       
       
        <Route exact
          path="/alumni-reg"
          element={
            <Layout>
              <AlumniReg/>
            </Layout>
          }
        >
        </Route>
       
       
        <Route exact
          path="/sports"
          element={
            <Layout>
              <Sports/>
            </Layout>
          }
        >
        </Route>

       
        <Route exact
          path="/seminars"
          element={
            <Layout>
              <Seminars/>
            </Layout>
          }
        >
        </Route>


       
        <Route exact
          path="/annual"
          element={
            <Layout>
              <Annual/>
            </Layout>
          }
        >
        </Route>

       
        <Route exact
          path="/aicte"
          element={
            <Layout>
              <Aicte/>
            </Layout>
          }
        >
        </Route>

       
        <Route exact
          path="/mou"
          element={
            <Layout>
              <Mou/>
            </Layout>
          }
        >
        </Route>

       
        <Route exact
          path="/gallery"
          element={
            <Layout>
              <Gallery/>
            </Layout>
          }
        >
        </Route>

       
       
        <Route exact
          path="/committee"
          element={
            <Layout>
              <Committee/>
            </Layout>
          }
        >
        </Route>

       
        <Route exact
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
