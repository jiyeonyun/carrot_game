const game = document.querySelector('.game');
const start = document.querySelector('.start__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');
const gameFiled = document.querySelector('.game__field');
const modal =document.querySelector('.modal');
const modalMessage =document.querySelector('.modal__message');
const replayBtn = document.querySelector('.replay__button');
const audio_alert = new Audio('./sound/alert.wav');
const audio_bg = new Audio('./sound/bg.mp3');
const audio_carrot = new Audio('./sound/carrot_pull.mp3');
const audio_bug = new Audio('./sound/bug_pull.mp3');
const audio_win =new Audio('./sound/game_win.mp3');
const img = document.querySelector('img');

function timer_f(){
    let time = 100;
    let msec ="";
    let sec = "";
    
    let x = setInterval(function(){
        sec = parseInt(time / 10);
        msec = time%10;
        gameTimer.innerHTML = "0" + sec + ":"+ "0" +msec
        time --;
        
        if(time<0){
            clearInterval(x);
            audio_alert.play();
            audio_alert.loop =false;
            gameTimer.innerHTML = "μκ°μ΄κ³Ό";
            modal.style.display = "flex";
            modalMessage.innerHTML = "you lose π»";
            audio_bg.pause();

            replayBtn.addEventListener('click',()=>{
                location.reload();
            });
        }
        if(modal.style.display == 'flex'){
            clearInterval(x);
            gameTimer.innerHTML = "replay?πΆ";
            audio_bg.pause();
        }
       
    },100);
}

// μμ΄νλ€μ μμΉλ₯Ό λλ€νκ² ν  μ μλλ‘ λλ€ μ«μ μμ±νλ ν¨μ
function randomNumber(max, min) {
    // λμ λ§λ€κΈ°(μμΉ)
    const number = Math.random() * (max - min) + min;
    return number;
}

// κ²μ μμ΄νλ€μ μμ±νλ ν¨μ
function addItem(className, count, imgPath) {
    // μμ΄ν μμ±
    let x1 = 0;
    let y1 = 0;
    let x2 = gameFiled.clientWidth  - 40; //μ΄ λμ΄ λ°μΌλ‘ λκ°μ§λ§
    let y2 = gameFiled.clientHeight  - 40;
    for (let i = 1; i <= count; i++) {
        let item = document.createElement("img");
        item.setAttribute("class", className);
        item.setAttribute("src", imgPath);
        item.style.position = "absolute";
        const x = randomNumber(x2, x1);
        const y = randomNumber(y2, y1);
        item.style.top = `${y}px`;
        item.style.left = `${x}px`;
        gameFiled.appendChild(item);
    }
}
    
//start game

    start.addEventListener('click',()=>{
    timer_f();
    audio_bg.play();
    start.firstElementChild.setAttribute('class','fas fa-stop');
    randomNumber(10, 1);
    addItem('carrot', 8, "./img/carrot.png");
    addItem('bug', 9, "./img/bug.png");
    let carrotcount = document.getElementsByClassName('carrot').length;
    gameScore.innerHTML =`${carrotcount}`;   
});
    
    
    gameFiled.addEventListener('click', function(e) {
        if(e.target.className == 'carrot'){
            e.target.remove();
            audio_carrot.play();
            let carrotcount = document.getElementsByClassName('carrot').length;
            carrotcount - 1;
            
            gameScore.innerHTML =`${carrotcount}`; 
                if(carrotcount == 0){
                    modal.style.display = 'flex';
                    audio_bg.pause();
                    audio_win.play();

                    replayBtn.addEventListener('click',()=>{
                        location.reload();
                    });
                } 
        }
        if(e.target.className == 'bug'){
            modal.style.display = "flex";
            modalMessage.innerHTML = "you lose π»";
            audio_bg.pause();
            audio_bug.play();

            replayBtn.addEventListener('click',()=>{
                location.reload();
            });
        }
        
    });
    


