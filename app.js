let dayCycle = false;
let currentDay = 0;
let body = document.querySelector('.main');
let sun = document.querySelector('.sun');
let buildings = document.querySelectorAll('.building');
let quote = document.querySelector('.quote');
let select = document.getElementById('hours');
let value = select.options[select.selectedIndex].value;
let presenter = document.querySelector('.lol');
let hour= document.querySelector('#hourCount')

select.addEventListener('change', function() {
    value = select.options[select.selectedIndex].value;
    console.log(value);
  });

document.querySelector('.pressKey').addEventListener('click',()=>{dayChange();})

document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        dayChange();
    }
});

function dayChange() {
    if (dayCycle == false) {
        dayCycle = true;
    }
    else {dayCycle = false}
    animation(dayCycle);

}

function animation(dayStatus) {
    if(dayStatus == true) {
        body.style.backgroundColor = '#444';
        sun.style.backgroundColor = 'white';
        sun.style.boxShadow = "0rem 0rem 1rem white";
        sun.style.top = "100%";
        quoteCreator();
        delay(800).then(() => sun.style.top = "10%");
        hour.textContent = value + ' Hours';
        select.style.display = 'none';
    }
    else {
        body.style.backgroundColor = 'lightblue';
        sun.style.backgroundColor = 'orange';
        sun.style.boxShadow = "0rem 0rem 1rem yellow";
        sun.style.top = "100%";
        quoteCreator();
        delay(800).then(() => sun.style.top = "10%");
        hour.textContent = ' Hours';
        select.style.display = 'block';
    }

}


function quoteCreator() {
    if (dayCycle ==true) {
        quote.style.opacity = "100%";
        if (value == 0) {
            quote.textContent = 'Little advice, GO TO SLEEP bro';
        }
        if (value == 1) {
            quote.textContent = 'You sleep 1 hour per day !? you are dead bro';
        }
        if (value == 2) {
            quote.textContent = 'You litteraly cant dream, your social animal status is removed bro !';
        }
        if (value == 3) {
            quote.textContent = 'You will have health problems, can you imagin be normal bro ??';
        }
        if (value == 4) {
            quote.textContent = 'Your friends are probably calling you the zombie bro...';
        }
        if (value == 5) {
            quote.textContent = 'Only five hours, be serious and go to bed bro !';
        }
        if (value == 6) {
            quote.textContent = 'Your social life is difficult right now, without sleep you look terrible bro';
        }
        if (value == 7) {
            quote.textContent = 'Your probably drinking more coffee than water bro..';
        }
        if (value == 8) {
            quote.textContent = 'Wake up is not difficult for you bro ? ';
        }
        if (value == 9) {
            quote.textContent = 'You sleep way to much, that was not foreseen for this site bro';
        }
        if (value == 10) {
            quote.textContent = 'GET OFF YOUR BED BRO...10 hours...';
        }
    }
    else { quote.style.opacity = "0%";
}
}






function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }