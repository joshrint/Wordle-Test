import './stylesheets/App.css';
import{useEffect, useState} from "react";
import Popup from './Popup';

function App() {
  
  //Popop State item
  const [popup, setPopup] = useState(false)
  const [result, setResult] = useState("Fail")

  //Set State variables for Current Guesses.
  const [currentGuess, setCurrentGuess] = useState("");
  const [currentGuessNum, setCurrentGuessNum] = useState(1);
  const [firstGuess, setFirstGuess] = useState("");
  const [secondGuess, setSecondGuess] = useState("");
  const [thirdGuess, setThirdGuess] = useState("");
  const [fourthGuess, setFourthGuess] = useState("");
  const [fifthGuess, setFifthGuess] = useState("");
  const [sixthGuess, setSixthGuess] = useState("");
  const [correctGuess, setCorrectGuess] = useState(false);

  const defaultGuessArray = ["neutral", "neutral", "neutral", "neutral", "neutral"]
  //Set the current arrays for guesses css classes
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
    // Check if enter has been hit and the message is exactly 5 characters long
    if (event.key === 'Enter' && currentGuess.length === 5) {
      // Set the guess state to register correct, incorrect, and contains for CSS styling. Itterate over every set 
      if(currentGuessNum === 1 && !correctGuess){
        setFirstGuessArray(checkGuess(firstGuess));
      } else if(currentGuessNum === 2 && !correctGuess){
        setSecondGuessArray(checkGuess(secondGuess));
      } else if(currentGuessNum === 3 && !correctGuess){
        setThirdGuessArray(checkGuess(thirdGuess));
      } else if(currentGuessNum === 4 && !correctGuess){
        setFourthGuessArray(checkGuess(fourthGuess));
      } else if(currentGuessNum === 5 && !correctGuess){
        setFifthGuessArray(checkGuess(fifthGuess));
      } else if(currentGuessNum === 6 && !correctGuess){
        setSixthGuessArray(checkGuess(sixthGuess));
      }
      //Incerement guess count and reset the input
      setCurrentGuessNum(parseInt(currentGuessNum)+1);
      setCurrentGuess("");
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
    //Set Failure
    }else if (currentGuessNum === 6 && correctCount < 5){
      setResult("Failed. Correct Word = " + dailyWord.join(""));
      setPopup(true);
    }
    return guessArray;
  }
  
  // Handle save game button press (To be wired up)
  const handleSave =() =>{
    setPopup(false);
  }

  // Handle reset game button press 
  const handleReset =() =>{
    //Reset Guess Count
    setCurrentGuessNum(1);
    setCorrectGuess(false);
    //Reset Guesses
    setFirstGuess("");
    setSecondGuess("");
    setThirdGuess("");
    setFourthGuess("");
    setFifthGuess("");
    setSixthGuess("");
    //Reset CSS Arrays
    setFirstGuessArray(defaultGuessArray);
    setSecondGuessArray(defaultGuessArray);
    setThirdGuessArray(defaultGuessArray);
    setFourthGuessArray(defaultGuessArray);
    setFifthGuessArray(defaultGuessArray);
    setSixthGuessArray(defaultGuessArray);
    //hide popup
    setPopup(false);

  }

  // Populate the guess form
  const handleChange = (e) => {
    if(currentGuessNum === 1 && !correctGuess){
      setFirstGuess(e.target.value);
    } else if(currentGuessNum === 2 && !correctGuess){
      setSecondGuess(e.target.value);
    } else if(currentGuessNum === 3 && !correctGuess){
      setThirdGuess(e.target.value);
    } else if(currentGuessNum === 4 && !correctGuess){
      setFourthGuess(e.target.value);
    } else if(currentGuessNum === 5 && !correctGuess){
      setFifthGuess(e.target.value);
    } else if(currentGuessNum === 6 && !correctGuess){
      setSixthGuess(e.target.value);
    }
    setCurrentGuess(e.target.value);
    
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
        <input type="text" maxLength="5" value={currentGuess} onChange={handleChange} onKeyDown={handleKeyDown} />
      </div>
      {popup && (
        <Popup
          popup={popup}
          currentGuessNum={currentGuessNum}
          result={result}
          handleSave={handleSave}
          handleReset={handleReset}
          />
      )}
    </div>
  );
}

export default App;
