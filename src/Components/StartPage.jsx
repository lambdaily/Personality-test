import React from 'react';
import Card from './Card';

import './startpage.css';

const StartPage = ({
  setShowStartingPage,
  setShowQuestionPage,
  username,
  setUsername,
  topScore,
}) => {
  const startGame = () => {
    if (username.trim().length > 2) {
      setShowStartingPage(false);
      setShowQuestionPage(true);
    }
  };

  return (
    <Card>
      <h1 className="header">¿Qué tipo de pareja eres?</h1>
      <img
        src="https://static.vecteezy.com/system/resources/previews/001/957/071/non_2x/continuous-line-drawing-romantic-couple-holding-hands-lovers-theme-concept-design-one-hand-drawn-minimalism-metaphor-of-love-illustration-isolated-on-white-background-vector.jpg"
        alt="pareja"
      />

      <h3 className="primary_text"> Responde las preguntas de este test.</h3>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        className="username_input"
        name="username"
        id="username"
        placeholder="Ingrese su nombre"
      />

      <button onSubmit={startGame} onClick={startGame} className="start_btn">
        Iniciar
      </button>

      {/* <img
        className="logo"
        src="https://www.pilar.com.py/wp-content/themes/pilar_2017/html/assets/img/logo.svg"
        alt=""
      /> */}
    </Card>
  );
};
export default StartPage;
