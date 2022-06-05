// import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Menu/Menu";
import Home from "./components/Pages/HomePage/Home";


function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
