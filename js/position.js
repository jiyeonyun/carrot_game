const start_btn = document.querySelector('.start');
const game_main =document.querySelector('.game_main');
const timer =document.querySelector('.timer');
const score = document.querySelector('.score');
const gameresult = document.querySelector('.win')
const result_title =document.querySelector('.result_title');
const replay =document.querySelector('.replay');
const cb =document.querySelector('.c_b');
function timer_f(){
    let time = 100;
    let msec ="";
    let sec = "";
    let x = setInterval(function(){
        sec = parseInt(time / 10);
        msec = time%10;
        timer.innerHTML = "0" + sec + ":"+ "0" +msec
        time --;
        if(time<0){
            clearInterval(x);
            timer.innerHTML = "시간초과";
            gameresult.style.display = "block";
            result_title.innerHTML = "you lose 👻";
            replay.addEventListener('click',()=>{
                gameresult.style.display = "none";
                clearInterval(x);
                timer.innerHTML = "00:00";
            });
        }
    },100);
}

function createBugCarrot(){
    const rand_0_5 = Math.random() * 4 + 0;
    const rand_2_4 = Math.random() * 0.3 + 0.21;
    const x = 100* rand_0_5;
    const y = 100* -rand_2_4;

    const bug = document.createElement('a');
    bug.setAttribute('class','bug');
    bug.style.transform = `translate(${x}px,${y}px)`
    
    const carrot = document.createElement('a');
    carrot.setAttribute('class','carrot');
    carrot.style.transform = `translate(${x}px,${y}px)`
    cb.appendChild(bug);
    cb.appendChild(carrot);

    return cb;
}
start_btn.addEventListener('click', ()=>{
    timer_f();
    createBugCarrot();
});

