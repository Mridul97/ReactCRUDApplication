import "./App.css";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createUser">Create User</Link>
        <Link to="/editUser">Edit User</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/editUser" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;
