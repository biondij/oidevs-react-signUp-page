import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} ></Route>
        <Route exact path='/home' element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

