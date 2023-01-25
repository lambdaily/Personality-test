import { useState } from 'react';
import FinalPage from './Components/FinalPage';
import QuestionPage from './Components/QuestionPage';
import StartPage from './Components/StartPage';

function App() {
  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionPage, setShowQuestionPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);
  const [username, setUsername] = useState('');
  const [topScore, setTopScore] = useState(0);

  return (
    <>
      {showStartingPage && (
        <StartPage
          setShowStartingPage={setShowStartingPage}
          setShowQuestionPage={setShowQuestionPage}
          username={username}
          setUsername={setUsername}
        />
      )}
      {showQuestionPage && (
        <QuestionPage
          setShowQuestionPage={setShowQuestionPage}
          setShowFinalPage={setShowFinalPage}
          topScore={topScore}
          setTopScore={setTopScore}
        />
      )}
      {showFinalPage && (
        <FinalPage
          setShowStartingPage={setShowStartingPage}
          setShowFinalPage={setShowFinalPage}
          username={username}
          setUsername={setUsername}
          topScore={topScore}
          setTopScore={setTopScore}
        />
      )}
    </>
  );
}

export default App;
