import {} from 'react-router'
import Home from "./views/home/home.tsx";

import {BrowserRouter as Router,Routes , Route} from 'react-router-dom';
import {useState} from "react";
import Contact from "./views/contact/contact.tsx";

function App() {
    const [isActive, setIsActive] = useState<number>(0);

    return (
        <>
            <Router>
                <Routes>
                    <Route path={"/"} element={
                        <Home
                            isActive={isActive}
                            setIsActive={setIsActive}
                        />
                    } />
                    <Route path={"/contact"} element={
                        <Contact
                            isActive={isActive}
                            setIsActive={setIsActive}
                        />
                    }/>
                </Routes>
            </Router>
        </>
    )
}

export default App
