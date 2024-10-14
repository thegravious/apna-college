// Countdown 1: Timeup to 600,000 in milliseconds
function countdown1() {
    let x = document.getElementById("countdown");
    let timeup = 0;
    
    let countup = setInterval(() => {
        timeup += 1000;
        if (timeup == 600000) {
            clearInterval(countup);
            x.innerText = "600000+";
            console.log(x.innerText);
        } else {
            x.innerText = timeup;
        }
    }, 1);
}

// Countdown 2: Count up to 2 with 2 seconds interval
function countdown2() {
    let y = document.getElementById("countdown1");
    let timeup1 = 0;
    let y1 = "2 crore +";
    
    let countup1 = setInterval(() => {
        timeup1++;
        if (timeup1 == 2) {
            clearInterval(countup1);
            y.innerText = y1;
            console.log(y.innerText);
        } else {
            y.innerText = timeup1;
        }
    }, 2000);
}

// Countdown 3: Timeup to 100,000
function countdown3() {
    let z = document.getElementById("countdown2");
    let timeup2 = 0;
    
    let countup2 = setInterval(() => {
        timeup2 += 500;
        if (timeup2 == 100000) {
            clearInterval(countup2);
            z.innerText = "100000+";
            console.log(z.innerText);
        } else {
            z.innerText = timeup2;
        }
    }, 1);
}


countdown1()
countdown2()
countdown3()