
function playSound(e) {
    const audio = document.querySelector(`audio[data-key='${e.key}']`);
    const keys = document.querySelector(`.key[data-key='${e.key}']`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // retorna ao começo
    audio.play();
    keys.classList.add('playing');    
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if it´s not a transform
    this.classList.remove('playing');
}

const chaves = document.querySelectorAll('.key');
chaves.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound); 