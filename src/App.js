import MainPage from "./MainPage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    console.log("about");
    return (
        <Router>
            <MainPage style={{ "min-height": "100vh" }} />
        </Router>
    );
}

export default App;
