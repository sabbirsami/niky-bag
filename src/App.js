import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navber from "./components/Navber/Navber";
import Shop from "./components/Shop/Shop";
import Question from "./components/F&Q/Question";

function App() {
    return (
        <div className="App">
            <Navber></Navber>
            <Shop></Shop>
            <Question></Question>
        </div>
    );
}

export default App;
