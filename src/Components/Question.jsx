import React from 'react';
import Card from './Card';
import './question.css';

const Question = ({
  questionIndex,
  setQuestionIndex,
  questions,
  setShowQuestionPage,
  setShowFinalPage,
  setTopScore,
  TopScore,
}) => {
  const handleClick = (e) => {
    if (questionIndex < 2) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowQuestionPage(false);
      setShowFinalPage(true);
    }

    // console.log(questions[questionIndex].answers[0].dataValue);
    if (e.currentTarget.id == 1) {
      setTopScore((top_score) => (top_score += 1));
    }
    if (e.currentTarget.id == 2) {
      setTopScore((top_score) => (top_score += 2));
    }
    if (e.currentTarget.id == 3) {
      setTopScore((top_score) => (top_score += 3));
    }
  };

  return (
    <Card>
      <h1 className="question">{questions[questionIndex].questionText}</h1>
      <div className="answers">
        {questions[questionIndex].answers.map((answer, index) => (
          <div
            className="answer"
            id={questions[questionIndex].answers[index].dataValue}
            key={index}
            onClick={handleClick}
          >
            <p> {answer.answerText} </p>
          </div>
        ))}
        <p className="question_number">
          Pregunta <span>{questionIndex + 1}</span>/3
        </p>
      </div>
    </Card>
  );
};

export default Question;
