import React from 'react';
const { useReducer, useState, useEffect } = React;
import _ from 'lodash';
import './App.css';
import Header from './components/Header/Header';
import Hangman from './components/Hangman/Hangman';
import UsedWords from './components/UsedWords/UsedWords';
import Blank from './components/Blank/Blank';
import LetterInput from './components/LetterInput/LetterInput';
import Notification from './components/Notification/Notification';
import Popup from './components/Popup/Popup';
import { Container, CssBaseline, Box } from 'material-ui';

const words = ['bite', 'kidnap', 'replacement', 'write', 'root', 'on', 'pool', 'regard', 'radio', 'indulge'];

const initialState = {
  playable: true,
  rightLetters: [],
  wrongLetters: [],
  selectedWord: _.sample(words),
  message: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'WRONG_LETTER_CLICKED':
      return {
        ...state,
        wrongLetters: [...state.wrongLetters, action.payload]
      }
      break;
    case 'RIGHT_LETTER_CLICKED':
      return {
        ...state,
        rightLetters: [...state.rightLetters, action.payload]
      }
      break;
    case 'WIN_OR_LOSE':
      return {
        ...state,
        playable: false,
          message: action.payload
      }
      break;
    case 'PLAY_AGAIN':
      return {
        ...state,
        playable: true,
          rightLetters: [],
          wrongLetters: [],
          selectedWord: _.sample(words)
      }
      break;
    case 'CLOSE_POP_UP':
      return {
        ...state,
        playable: true
      }
      break;
    default:
      return state;
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const { playable, rightLetters, wrongLetters, selectedWord, message } = state;

  const [clickedAgain, setClickedAgain] = useState(false);

  const handleLetter = (e) => {
    const letter = e.key.toLowerCase();

    if (letter.match(/^[a-z]$/)) {
      if (selectedWord.includes(letter)) {
        !rightLetters.includes(letter) ?
          dispatch({ type: 'RIGHT_LETTER_CLICKED', payload: letter }) :
          setClickedAgain(true)
      } else {
        !wrongLetters.includes(letter) ?
          dispatch({ type: 'WRONG_LETTER_CLICKED', payload: letter }) :
          setClickedAgain(true)
      }
    }
  }

  const playAgain = () => dispatch({ type: 'PLAY_AGAIN' });

  const closePopUp = () => dispatch({ type: 'CLOSE_POP_UP' });

  const closeNotif = () => setClickedAgain(false);

  useEffect(() => {

    if (!_.difference(selectedWord.split(''), rightLetters).length) {
      dispatch({ type: 'WIN_OR_LOSE', payload: 'You Win!' });
    }

    if (wrongLetters.length === 5) {
      dispatch({ type: 'WIN_OR_LOSE', payload: 'You Lost!' });
    }

    if (playable) {
      window.addEventListener('keydown', handleLetter);
      return () => window.removeEventListener('keydown', handleLetter);
    }

  }, [rightLetters, wrongLetters, playable])

  return (
    <CssBaseline>
      <Box 
        className="App"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        px={2}
      >
        <Header />
        <Hangman wrongLetters={wrongLetters} />
        <Blank rightLetters={rightLetters} selectedWord={selectedWord} />
        <UsedWords wrongLetters={wrongLetters} />
        <LetterInput handleLetter={handleLetter} />
        <Notification clickedAgain={clickedAgain} closeNotif={closeNotif} />
        <Popup 
          playable={playable}
          selectedWord={selectedWord} 
          playAgain={playAgain} 
          closePopUp={closePopUp} 
          message={message}
        />
      </Box>
    </CssBaseline>
  )
}

export default App;