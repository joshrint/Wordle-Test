import './stylesheets/App.css';
import{useEffect, useState} from "react";
import Popup from './Popup';

function App() {
  
  //Popop State item
  const [popup, setPopup] = useState(false)
  const [result, setResult] = useState("Fail")

  //Set State variables for Current Guesses.
  const [currentGuess, setCurrentGuess] = useState(1);
  const [firstGuess, setFirstGuess] = useState("");
  const [secondGuess, setSecondGuess] = useState("");
  const [thirdGuess, setThirdGuess] = useState("");
  const [fourthGuess, setFourthGuess] = useState("");
  const [fifthGuess, setFifthGuess] = useState("");
  const [sixthGuess, setSixthGuess] = useState("");
  const [correctGuess, setCorrectGuess] = useState(false);

  const defaultGuessArray = ["neutral", "neutral", "neutral", "neutral", "neutral"]
  //Set the current arrays for guesses
  const [firstGuessArray, setFirstGuessArray] = useState(defaultGuessArray);
  const [secondGuessArray, setSecondGuessArray] = useState(defaultGuessArray);
  const [thirdGuessArray, setThirdGuessArray] = useState(defaultGuessArray);
  const [fourthGuessArray, setFourthGuessArray] = useState(defaultGuessArray);
  const [fifthGuessArray, setFifthGuessArray] = useState(defaultGuessArray);
  const [sixthGuessArray, setSixthGuessArray]= useState(defaultGuessArray);
  
  //Get the word of the day
  let dailyWord = (/*Wire to function*/"slice").split('');

  // When you hit enter itterate the current guess
  const handleKeyDown = (event) => {
    
    if (event.key === 'Enter') {
      if(currentGuess === 1 && !correctGuess){
        // Set the guess state to register correct, incorrect, and contains for CSS styling
        setFirstGuessArray(checkGuess(firstGuess));
      } else if(currentGuess === 2 && !correctGuess){
        setSecondGuessArray(checkGuess(secondGuess));
      } else if(currentGuess === 3 && !correctGuess){
        setThirdGuessArray(checkGuess(thirdGuess));
      } else if(currentGuess === 4 && !correctGuess){
        setFourthGuessArray(checkGuess(fourthGuess));
      } else if(currentGuess === 5 && !correctGuess){
        setFifthGuessArray(checkGuess(fifthGuess));
      } else if(currentGuess === 6 && !correctGuess){
        setSixthGuessArray(checkGuess(sixthGuess));
      }
      if(currentGuess <= 5 && !correctGuess){
        setCurrentGuess(parseInt(currentGuess)+1);
      }
    } else if (currentGuess > 6) {
      console.log("Game Over");
    }
  };

  function checkGuess(guess) {
    let guessArray = [];
    let correctCount = 0;
    for (let i = 0; i < 5; i++){
      if(dailyWord[i] === guess[i]) {
        guessArray[i] = "correct";
        correctCount ++;
      } else if(dailyWord.includes(guess[i])) {
        guessArray[i] = "contains";
      } else {
        guessArray[i] = "incorrect";
      }   
    }
    // Check if there were 5 correct letters to see if the puzzle is solved
    if(correctCount === 5){
      // If the guess is correct set every check to true.
      setResult("Solved");
      setCorrectGuess(true);
      setPopup(true);
    }else{
      setCorrectGuess(false)
    }
    return guessArray;
  }
  
  const handleSave =() =>{
    setPopup(false);
  }

  // Populate the guess form
  const handleChange = (e) => {
    if(currentGuess === 1 && !correctGuess){
      setFirstGuess(e.target.value);
    } else if(currentGuess === 2 && !correctGuess){
      setSecondGuess(e.target.value);
    } else if(currentGuess === 3 && !correctGuess){
      setThirdGuess(e.target.value);
    } else if(currentGuess === 4 && !correctGuess){
      setFourthGuess(e.target.value);
    } else if(currentGuess === 5 && !correctGuess){
      setFifthGuess(e.target.value);
    } else if(currentGuess === 6 && !correctGuess){
      setSixthGuess(e.target.value);
    }
    
  }

  useEffect(() =>{
    
  });



  return (
    <div className="App">
      <div className="play-area">
        <div id="play-cell" className={firstGuessArray[0]}>{firstGuess[0]}</div>
        <div id="play-cell" className={firstGuessArray[1]}>{firstGuess[1]}</div>
        <div id="play-cell" className={firstGuessArray[2]}>{firstGuess[2]}</div>
        <div id="play-cell" className={firstGuessArray[3]}>{firstGuess[3]}</div>
        <div id="play-cell" className={firstGuessArray[4]}>{firstGuess[4]}</div>
      </div>
      <div className="play-area">
        <div id="play-cell" className={secondGuessArray[0]}>{secondGuess[0]}</div>
        <div id="play-cell" className={secondGuessArray[1]}>{secondGuess[1]}</div>
        <div id="play-cell" className={secondGuessArray[2]}>{secondGuess[2]}</div>
        <div id="play-cell" className={secondGuessArray[3]}>{secondGuess[3]}</div>
        <div id="play-cell" className={secondGuessArray[4]}>{secondGuess[4]}</div>
      </div>
      <div className="play-area">
        <div id="play-cell" className={thirdGuessArray[0]}>{thirdGuess[0]}</div>
        <div id="play-cell" className={thirdGuessArray[1]}>{thirdGuess[1]}</div>
        <div id="play-cell" className={thirdGuessArray[2]}>{thirdGuess[2]}</div>
        <div id="play-cell" className={thirdGuessArray[3]}>{thirdGuess[3]}</div>
        <div id="play-cell" className={thirdGuessArray[4]}>{thirdGuess[4]}</div>
      </div>
      <div className="play-area">
        <div id="play-cell" className={fourthGuessArray[0]}>{fourthGuess[0]}</div>
        <div id="play-cell" className={fourthGuessArray[1]}>{fourthGuess[1]}</div>
        <div id="play-cell" className={fourthGuessArray[2]}>{fourthGuess[2]}</div>
        <div id="play-cell" className={fourthGuessArray[3]}>{fourthGuess[3]}</div>
        <div id="play-cell" className={fourthGuessArray[4]}>{fourthGuess[4]}</div>
      </div>
      <div className="play-area">
        <div id="play-cell" className={fifthGuessArray[0]}>{fifthGuess[0]}</div>
        <div id="play-cell" className={fifthGuessArray[1]}>{fifthGuess[1]}</div>
        <div id="play-cell" className={fifthGuessArray[2]}>{fifthGuess[2]}</div>
        <div id="play-cell" className={fifthGuessArray[3]}>{fifthGuess[3]}</div>
        <div id="play-cell" className={fifthGuessArray[4]}>{fifthGuess[4]}</div>
      </div>
      <div className="play-area">
        <div id="play-cell" className={sixthGuessArray[0]}>{sixthGuess[0]}</div>
        <div id="play-cell" className={sixthGuessArray[1]}>{sixthGuess[1]}</div>
        <div id="play-cell" className={sixthGuessArray[2]}>{sixthGuess[2]}</div>
        <div id="play-cell" className={sixthGuessArray[3]}>{sixthGuess[3]}</div>
        <div id="play-cell" className={sixthGuessArray[4]}>{sixthGuess[4]}</div>
      </div>
      <div>
        <input type="text" maxLength="5" onChange={handleChange} onKeyDown={handleKeyDown} />
      </div>
      {popup && (
        <Popup
          popup={popup}
          currentGuess={currentGuess}
          result={result}
          handleSave={handleSave}
          />
      )}
    </div>
  );
}

export default App;
