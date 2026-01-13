// //Testing

// const startBtn = document.querySelector(".start-test");
// const numQuestions = Number(document.querySelector('#numQuestions').value);
// const numOptions = Number(document.querySelector('#numOptions').value);
// const timeLimit = Number(document.querySelector('#timeLimit').value);
// const difficulty = document.querySelector('#difficulty').value;
// const quizTitle = document.querySelector('#quizTitle').value;

// const currentQuestion = 0;

// //assuming all other things have been called

// startBtn.addEventListener("click", function(){
//     startScreen.style.display = "none"
//     generateQuestion()//I think the logic of counting
//                       //would be inside the generate
//                       //question block
// });

    /* -----------------------

             Timer logic

       ----------------------- */
   
// 1. So the timer should start as soon as I click the start button
// 2. It should count down by one sec
// 3&4. it should stop quiz even if the amount of question is not complete, that means we would need something to become true when the timer ends (let say a boolean caller `timerEnded`)and then we would say 

// ```Js
//   if (currentQuestion >= 10 || timerEnded) {
//     endQuiz(); // call your stats/score page
//     return;    // stop generating more
//   }
// ```
// 5. The animation that un-circles (like reduces) the border would be in percentage and it current percentage would be the value of the percentage of the time left



    /* =======================

        Settings Page Logic

       ======================= */

       const settingsBtn = document.querySelector('.settings-text')
       const settingsPage = document.querySelector('.settingsCard')

       settingsBtn.addEventListener('click', function(){
        startScreen.classList.add('hidden');
        settingsPage.classList.remove('hidden');
       })

// let timeLeft = 10;
// const timer = setInterval(() => {
//   console.log("Time is counting:", timeLeft);
//   timeLeft--;

//   if (timeLeft <= 0) {
//     clearInterval(timer);
//     console.log("Time up");
//   }
// }, 1000);

// .timerContainer {
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;

//   min-width: 180px;       /* prevents width jump */
//   padding: 14px 28px;

//   background: #111;       /* slightly deeper black */
//   border-radius: 14px;

//   box-shadow:
//     0 8px 24px rgba(0,0,0,0.18),
//     inset 0 0 0 1px rgba(255,255,255,0.04);
// }

// #timer {
//   font-family: 'Roboto Mono', monospace;
//   font-size: 2.2rem;
//   font-weight: 500;

//   letter-spacing: 0.18em; /* more controlled than px */
//   color: #ffffff;

//   line-height: 1;         /* perfect vertical alignment */
//   user-select: none;
// }

const cancelBtn = document.querySelector('.cancelBtn')

function defaultSetting(){

  document.querySelector('#numQuestions').value = 10;
  document.querySelector('#numOptions').value = 4;
  document.querySelector('#timeLimit').value = 1;
  document.querySelector('#difficulty').value = 'Medium';
  document.querySelector('#quizTitle').value = 'My Quiz';

  window.quizSettings.numQuestions = 10;
  window.quizSettings.numOptions = 4;
  window.quizSettings.timeLimit = 1;
  window.quizSettings.difficulty = 'Medium';
  window.quizSettings.quizTitle = 'My Quiz';
}
cancelBtn.addEventListener('click', defaultSetting)