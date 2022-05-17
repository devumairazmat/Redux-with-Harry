import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Shop from "./components/shop/Shop";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Shop />
    </div>
  );
}

export default App;
