import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navber from "./components/Navber/Navber";
import Shop from "./components/Shop/Shop";

function App() {
    return (
        <div className="App">
            <Navber></Navber>
            <Shop></Shop>
        </div>
    );
}

export default App;
