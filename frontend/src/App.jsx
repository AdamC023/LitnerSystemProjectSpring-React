import {Link, Route, Routes} from 'react-router-dom';

import AddCard from "./pages/AddCard.jsx";
import AddModules from "./pages/AddModules.jsx";
import Answer from "./pages/Answer.jsx";
function Home() {
    return <h2>Welcome to the Litner System!</h2>;
}

function App() {

    return (
        <>
            <nav>
                <h1>Litner System</h1>
                <Link to="/">Home</Link>
                <Link to="/addCard">Add Card</Link>
                <Link to="/addModules">Add Modules</Link>
                <Link to="/answer">Answer Cards</Link>
            </nav>
            <div>
                <Routes>
                    <Route path="/addCard" element={<AddCard/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/addModules" element={<AddModules/>}/>
                    <Route path="/answer" element={<Answer/>}/>
                </Routes>
            </div>
        </>
    );
}
export default App