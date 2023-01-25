const body = document.querySelector('body');
const title = document.querySelector('.title');
const emote = document.querySelector('.emote');
const target = document.createElement('div');
const playBtn = document.querySelector('.playBtn');
const targetImg = document.createElement('img');
const playField = document.getElementById('field');

const twitchEmote = 'twitch.webp';

targetImg.src = `images/${twitchEmote}`;

target.classList.add('target');

const gameControls = () => {
  const clearscreen = () => {
    playField.classList.add('playField');
  };
  const startgame = () => {
    body.appendChild(target);
    target.appendChild(targetImg);
  };
  return { clearscreen, startgame };
};

playBtn.addEventListener('click', () => {
  gameControls().clearscreen();
  gameControls().startgame();
});

body.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    playField.classList.remove('playField');
  }
});
