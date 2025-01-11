import {Link, Route, Routes} from 'react-router-dom';

import AddCard from "./pages/AddCard.jsx";
import AddModules from "./pages/AddModules.jsx";
import Answer from "./pages/Answer.jsx";
import Modules from "./pages/Modules.jsx";
import './index.css';
import Navbar from "./components/Navbar.jsx"; // Or './App.css' if you're importing into App.js

function Home() {
    return <h2>Welcome to the Litner System!</h2>;
}

function App() {

    return (
        <>
            <Navbar/>
            <div>
                <Routes>
                    <Route path="/addCard" element={<AddCard/>}/>
                    <Route path="/" element={<Modules/>}/>
                    <Route path="/addModules" element={<AddModules/>}/>
                    <Route path="/answer/:code" element={<Answer/>}/>
                    <Route path="/modules" element={<Modules/>}/>
                </Routes>
            </div>
        </>
    );
}
export default App