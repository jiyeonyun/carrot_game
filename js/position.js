const start_btn = document.querySelector('.start');
const game_main =document.querySelector('.game_main');
const timer =document.querySelector('.timer');
const score = document.querySelector('.score');
const gameresult = document.querySelector('.win')
const result_title =document.querySelector('.result_title');
const replay =document.querySelector('.replay');
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
start_btn.addEventListener('click', ()=>{
    timer_f();
    
});
function createBugCarrot(){
    const bug = document.createElement('a');
    bug.setAttribute('class','bug');
    
    const carrot = document.createElement('a');
    carrot.setAttribute('class','carrot');
    
    game_main.appendChild(bug);
    game_main.appendChild(carrot);
}

// const x = event.clientX;
//     const y = event.clientY;

//     bug.style.transform = `translateX(${x}px)`;
//     bug.style.transform = `translateY(${y}px)`;

//     carrot.style.transform = `translateX(${x}px)`;
//     carrot.style.transform = `translateY(${y}px)`;