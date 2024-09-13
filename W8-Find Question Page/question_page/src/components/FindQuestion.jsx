import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConf";

const FindQuestion = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const querySnapshot = await getDocs(collection(db, "Questions"));
      const questionList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(questionList);
    };
    fetchQuestions();
  }, []);

  return (
    <div>
      <h1>Find Questions</h1>
      <ul>
        {questions.map((q) => (
          <li key={q.id}>
            <h3>{q.title}</h3>
            <p>{q.description}</p>
            <span>{q.tags}</span>
            <small>
              {new Date(q.createdAt.seconds * 1000).toLocaleDateString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FindQuestion;
