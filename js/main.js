import { Deck } from './Deck.js';
import { Game } from './Game.js';
import { UIManager } from './UIManager.js';

let game;
let ui;
const numPlayers = 4;

function initGame() {
  game = new Game(numPlayers);
  ui = new UIManager(game);
  ui.updateDisplay();
  game.startNewHand();
}

function setupEventListeners() {
  document.getElementById('btn-fold').addEventListener('click', () => {
    if (game.currentPlayer === game.humanPlayer) {
      game.fold();
      nextAction();
    }
  });
  
  document.getElementById('btn-check').addEventListener('click', () => {
    if (game.currentPlayer === game.humanPlayer) {
      game.check();
      nextAction();
    }
  });
  
  document.getElementById('btn-call').addEventListener('click', () => {
    if (game.currentPlayer === game.humanPlayer) {
      game.call();
      nextAction();
    }
  });
  
  document.getElementById('btn-raise').addEventListener('click', () => {
    if (game.currentPlayer === game.humanPlayer) {
      const amount = parseInt(document.getElementById('raise-slider').value);
      if (amount > 0) {
        game.raise(amount);
        nextAction();
      }
    }
  });
  
  document.getElementById('btn-restart').addEventListener('click', initGame);
  
  document.getElementById('raise-slider').addEventListener('input', (e) => {
    document.getElementById('raise-amount-display').textContent = e.target.value;
  });
}

function nextAction() {
  if (game.handComplete) {
    ui.showGameOver();
    return;
  }
  
  if (game.currentPlayer === game.humanPlayer) {
    ui.updateControls();
  } else {
    setTimeout(() => {
      game.aiAction();
      ui.updateDisplay();
      nextAction();
    }, 800);
  }
}

initGame();
setupEventListeners();
