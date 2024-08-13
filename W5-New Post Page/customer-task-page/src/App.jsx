import { useState } from "react";
import "./App.css";
import PostType from "./components/PostType";
import Article from "./components/Article";
import Question from "./components/Question";

function App() {
  const [isQuestion, setIsQuestion] = useState(true);

  const handlePostType = (e, { value }) => {
    e.preventDefault();
    setIsQuestion(value === "Question");
  };

  return (
    <>
      <PostType handleChange={handlePostType} isQuestion={isQuestion} />
      {isQuestion ? <Question /> : <Article />}
    </>
  );
}

export default App;
