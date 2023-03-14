const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
  mario.classList.add('jump')
  
  setTimeout(() => {

    mario.classList.remove('jump')

  }, 700);
}

const loop = setInterval(() => {
  
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  console.log(marioPosition)
  
  if(pipePosition <= 145 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`

    mario.src = './img/mario-dead.webp'
    mario.style.width = '90px'
    mario.style.marginLeft = '50px'

    clearInterval(loop);
  }

}, 10);

document.addEventListener('keydown', jump)