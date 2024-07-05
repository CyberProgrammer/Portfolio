import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./views/home/home.tsx";
import About from "./views/about/about.tsx";
import Showcase from "./views/showcase/showcase.tsx";
import Contact from "./views/contact/contact.tsx";
import NotFound from "./views/error/not_found.tsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/showcase" element={<Showcase />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} /> {/* Handle 404 */}
            </Routes>
        </Router>
    )
}

export default App
