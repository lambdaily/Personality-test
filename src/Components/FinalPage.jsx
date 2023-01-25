import React from 'react';
import Card from './Card';
import './finalpage.css';
import Answers from './Answers';

const FinalPage = ({
  setShowFinalPage,
  setShowStartingPage,
  username,
  setUsername,
  topScore,
  setTopScore,
}) => {
  const handleRestart = () => {
    setShowFinalPage(false);
    setShowStartingPage(true);
    setUsername('');
    setTopScore(0);
  };
  return (
    <Card>
      <h1 className="heading">{username}</h1>

      <Answers topScore={topScore} />

      <p className="top_score">
        Tu puntaje fue : <span> {topScore} </span>
      </p>
      <button onClick={handleRestart} className="play_again_btn">
        Jugar de nuevo
      </button>
    </Card>
  );
};

export default FinalPage;
