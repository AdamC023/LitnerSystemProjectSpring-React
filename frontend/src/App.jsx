import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import AddCard from "./pages/AddCard.jsx";
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
            </nav>
            <div>
                <Routes>
                    <Route path="/addCard" element={<AddCard/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </>
    );
}
export default App