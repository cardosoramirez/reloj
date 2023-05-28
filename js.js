setInterval(()=>{
    let clock= document.getElementById('clock');
    let daydisplay = document.getElementById('day');
    let month = document.getElementById('month');
    let year = document.getElementById('year');

    // getting time
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if(minutes<= 9){
        minutes = `0${minutes}`;
    }
    let seconds = date.getSeconds();
    if(seconds<= 9){
        seconds= `0${seconds}`;
    }

    //month & year
    let cMonth = date.getMonth() + 1;
    let cYear = date.getFullYear();
    // days
    let day = date.getDay();

    let daysName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',];
    // display am or pm
    if (hours<12){
        document.getElementById('am0rpm').innerHTML='AM';
    } else{
        document.getElementById('am0rpm').innerHTML='PM';
    }

    //display clock
    clock.innerHTML =`${hours}:${minutes}:${seconds} `;

    //display day
    daydisplay.innerHTML= daysName[day];

    //display month
    month.innerHTML=cMonth;

    // display year
    year.innerHTML= `'${cYear}`;

},1000);