import { Routes, Route } from "react-router-dom";
import Starter from "./components/Starter";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound404 from "./components/NotFound404";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Starter />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Register />} />
      <Route path="homepage" element={<Homepage />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}

export default App;
