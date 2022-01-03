import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import Settings from "./Components/Pages/Settings";
import Write from "./Components/Pages/Write";
import Single from "./Components/Pages/Single";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  const user = true;
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
