var btnStart = document.getElementById('btn-start');
var btnLight = document.getElementById('btn-light');
var btnStop = document.getElementById('btn-stop');
var btnReset = document.getElementById('btn-reset');
var timer = document.getElementById('timer');
var d = new Date();

d.setMinutes(0);
d.setSeconds(0);
m = d.getMinutes();
s = d.getSeconds();

var time = m+':'+s;


timer.innerHTML = time;

btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);
btnReset.addEventListener('click',resetTimer);

function startTimer(){
    interval = setInterval(btnDown,1000);
    btnLight.style.backgroundColor = 'greenyellow';
    btnLight.style.boxShadow = '1px 1px 20px greenyellow';
}

function stopTimer(){
    clearInterval(interval);
    btnLight.style.backgroundColor = 'green';
    btnLight.style.boxShadow = 'none';
}

function resetTimer(){
    d.setSeconds(0);
    d.setMinutes(0);
    timer.innerHTML = d.getMinutes() +':'+ d.getSeconds();
}


function btnDown(){
    
    d.setSeconds(d.getSeconds() + 1);
    timer.innerHTML = d.getMinutes() +':'+ d.getSeconds();
    
}