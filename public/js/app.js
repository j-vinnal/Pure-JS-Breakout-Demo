import Brain from './brain.js';
import UI from './ui.js';

const KEY_A = 'a';
const KEY_D = 'd';
const KEY_P = 'p';
const KEY_O = 'o';

function validateIndexHtml() {
  if (document.querySelectorAll('div').length != 1) {
    throw new Error('Found more or less than 1 div');
  }
}

function uiDrawRepeater(ui, brain) {
  setTimeout(() => {
    ui.draw();
    brain.startGame();
    uiDrawRepeater(ui, brain);
  }, 0);
}


function handleKeyDown(e, brain) {
  switch (e.key) {
    case KEY_A:
      brain.startMovePaddle(-1);
      break;
    case KEY_D:
      brain.startMovePaddle(1);
      break;
    case KEY_P:
      if (brain.gameover) {
        brain.newGame();
      }
      brain.startMoveBall();
      break;
    case KEY_O:
      brain.stopMoveBall();
      break;
  }
}

function handleKeyUp(e, brain) {
  if (e.key === KEY_A || e.key === KEY_D) {
    brain.stopMovePaddle();
  }
}


function App() {
  validateIndexHtml();

  const appDiv = document.getElementById('app');
  const brain = new Brain();
  const ui = new UI(brain, appDiv);

  document.addEventListener('keydown', e => handleKeyDown(e, brain));
  document.addEventListener('keyup', e => handleKeyUp(e, brain));

  uiDrawRepeater(ui, brain);
}

//======================== ENTRY POINT ========================
App();