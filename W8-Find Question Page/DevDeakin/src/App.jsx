import FindQuestion from "./components/Questions/FindQuestion";
import QuestionCard from "./components/Questions/QuestionCard";
import { Home, Header, PostType } from "./constants";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostType />} />
        <Route path="/find-questions" element={<FindQuestion />} />
      </Routes>
    </>
    // <div className="bg-[#f5f5dc]">
    //   <Home />
    //   <Articles />
    //   <Tutorials />
    //   <CTO />
    //   <Footer />
    // </div>
  );
}

export default App;
