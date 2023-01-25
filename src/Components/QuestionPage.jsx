import React, { useState } from 'react';
import { questions } from '../questions';
import Question from './Question';

const QuestionPage = ({
  setShowQuestionPage,
  setShowFinalPage,
  setTopScore,
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  return (
    <>
      <Question
        questionIndex={questionIndex}
        questions={questions}
        setQuestionIndex={setQuestionIndex}
        setShowQuestionPage={setShowQuestionPage}
        setShowFinalPage={setShowFinalPage}
        setTopScore={setTopScore}
      />
    </>
  );
};

export default QuestionPage;
