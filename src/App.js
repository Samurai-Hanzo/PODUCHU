import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Mainroutes from "./Mainroutes";

function App() {
    return (
        <div className="main-block">
            <Mainroutes />
            <Navbar />
        </div>
    );
}

export default App;
