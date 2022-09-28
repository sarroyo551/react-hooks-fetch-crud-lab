import React, { useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestion] = useState([])
  
  // console.log('questions before useEffect', questions)
  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((r) => r.json())
      .then((questions) => setQuestion(questions))
  }, [])
  
  const questionMap = questions.map((question) => (
    <QuestionItem key={question.id} question={question} handleDeleteQuestion={handleDeleteQuestion}/>
  ))

  function handleDeleteQuestion(questionId) {
    const updatedQuestions = questions.filter(question => question.id !== questionId)
    setQuestion(updatedQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionMap}</ul>
    </section>
  );
}

export default QuestionList;
