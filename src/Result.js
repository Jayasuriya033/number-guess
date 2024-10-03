

// import './App.css';
// import Result from './Result';
// import { BsArrowRepeat } from 'react-icons/bs';

// import React, { useState } from 'react';

// const GuessNumberGame = () => {
//   const [random,setRandom] = useState(generateRandom());
//   const [userInput, setUserInput] = useState('');
//   const [remainingChances, setRemainingChances] = useState(8);
//   const [message, setMessage] = useState('');
//   const[chanceMessage, setChanceMessage]=useState('Remaining Chances:');
//   const [timeoutId, setTimeoutId] = useState(null);
    
//    function generateRandom(){
//      let random = Math.floor(Math.random()*100)+1;
//       return random;
//     }
  
//     const handleRefresh = ()=>{
//           setUserInput('');
//           setRemainingChances(8);
//           setRandom(generateRandom());
//           setMessage('');
//           setChanceMessage('Remaining Chances: ');
//         };
//         const handleInputEmpty = ()=>{
//           setUserInput('');
//           if (remainingChances == 0) {
//             setMessage(`Game over. The correct number was ${random}.`);
//             setChanceMessage('Try again➿');
//             setRemainingChances('');
//             setTimeout(handleRefresh, 4000);
//           }
//         }
//         const handleInputChange = (e) => {
//           setUserInput(e.target.value);
          
//           if (timeoutId) {
//             clearTimeout(timeoutId);
//           }
      
//           const newTimeoutId = setTimeout(() => {
//           }, 5000);
      
//           setTimeoutId(newTimeoutId);

//           if (e.target.value !== '') {
//             handleGuess(e.target.value);
//           }
//         };
//   const handleGuess = (value) => {
//     if(userInput==''){
//       setRemainingChances(remainingChances -1);
//     }

//       if(userInput){
//     if (value == random) {
//       setChanceMessage("Congratulations😍");
//       setRemainingChances('');
//       setMessage(`You guessed the correct number.`);
//       setTimeout(handleRefresh, 3000);

//     } 
//     else if(value > random) {
//       setMessage('')
//       setMessage(`${value} is too High...`);
//       setTimeout(handleInputEmpty,1000);
//       // setTimeout(setMessage(''), 3000);
//       // setRemainingChances(remainingChances - 1);
//     }
//     else if(value < random) {
//       setMessage('')
//       setMessage(`${value} is too Low...`);  
//       setTimeout(handleInputEmpty,1000);

//       // setTimeout(setMessage(''), 3000);

//       // setRemainingChances(remainingChances - 1);
//     }
//       // if (remainingChances == 0) {
//       //   // setMessage();
//       //   alert(`Game over. The correct number was ${random}.`);
//       //   handleRefresh();
//       // }
//       else {
//         // setMessage(`Incorrect guess. ${remainingChances - 1} chances remaining.`);
//         // handleRefresh();
//       }
    
//       // setTimeout(message(''), 4000);
//   };}


//   return (
//      <div className="container">
//       <div className='container-box'>
//       <h1 className='topic'>Enter the number between 1 to 100</h1>

//       <p>{chanceMessage} {remainingChances}</p>
//       <input type="text" value={userInput} onChange={handleInputChange} />
//       <p>{message}</p>
//       <button className="btn btn-secondary" onClick={handleRefresh}><BsArrowRepeat /> Refresh</button>

//     </div>
//     </div>
//   );
// };

// export default GuessNumberGame;

