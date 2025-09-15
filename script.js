const images = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png']
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * images.length)
    let randomNumberOne = Math.floor(Math.random() * images.length)

    let img1 = document.querySelector('.img1');
    let img2 = document.querySelector('.img2');
    let playerOne = document.getElementById('playerOne');
    let playerTwo = document.getElementById('playerTwo');

    img1.src = images[randomNumber]
    img2.src = images[randomNumberOne]

    if (randomNumber === randomNumberOne) {
        playerOne.innerText = "It's a Draw";
        playerTwo.innerText = "It's a Draw";
    }else if (randomNumber > randomNumberOne) {
        playerOne.innerText = 'Player 1 Wins';
        playerTwo.innerText = '';
    } else  if (randomNumber < randomNumberOne){
        playerTwo.innerText = ' Player 2 Wins';
        playerOne.innerText = '';
    }
});

// Add decorative floating dots
      document.addEventListener('DOMContentLoaded', function() {
        const body = document.querySelector('body');
        const colors = ['rgba(255,255,255,0.3)', 'rgba(255,215,0,0.3)', 'rgba(255,75,43,0.3)'];
        
        for (let i = 0; i < 20; i++) {
          const dot = document.createElement('div');
          dot.classList.add('dice-dots');
          
          // Random properties
          const size = Math.random() * 15 + 5;
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          dot.style.width = `${size}px`;
          dot.style.height = `${size}px`;
          dot.style.background = color;
          dot.style.left = `${Math.random() * 100}vw`;
          dot.style.top = `${Math.random() * 100}vh`;
          dot.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
          
          body.appendChild(dot);
        }
      });
