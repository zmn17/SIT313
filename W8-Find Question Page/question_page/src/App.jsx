import { Routes, Route } from "react-router-dom";
import "./App.css";
import PostType from "./components/PostType";
import Homepage from "./components/Homepage";
import FindQuestion from "./components/FindQuestion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/post" element={<PostType />} />
      <Route path="/find-questions" element={<FindQuestion />} />
    </Routes>
  );
}

export default App;
