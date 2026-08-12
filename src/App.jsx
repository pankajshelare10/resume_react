import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";


function App() {

    return (
        
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element ={<Home />} />
                  <Route path="/projects" element ={<Projects />} />
                   <Route path="/skills" element ={<Skills />} />
                    <Route path="/resume" element ={<Resume />} />
                     <Route path="/contact" element= {<Contact />} />
              
              
            </Routes>
        </BrowserRouter>
    )
}

export default App;
