window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const pressedKey = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    pressedKey.classList.add('playing');
})

const allKeys = document.querySelectorAll('.key'); 

allKeys.forEach(key => key.addEventListener('transitionend', function (e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing'); 
}));
