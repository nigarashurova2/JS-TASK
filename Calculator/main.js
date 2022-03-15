// calculator
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
        
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function log() {
    screen.value = Math.log(screen.value);
}

function ln() {
    screen.value = Math.ln(screen.value);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function pi() {
    screen.value = 3.141592653;
}

function e() {
    screen.value = 2.71828128;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i < num.length; i++) {
        f = f * i;

    }
    i = i - 1;
    screen.value = f;
}

function percent() {
    screen.value = screen.value/100;
}


//------------------------------------------------------------------

setInterval(function () {
    const clock = document.querySelector(".display");
    let time = new Date();
    let min = time.getMinutes();
    let hr = time.getHours();

    if (hr > 12) {
        hr = hr - 12;
    }
    if (hr == 0) {
        hr = 12;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (hr < 10) {
        hr = '0' + hr;
    }
    clock.textContent = hr + ':' + min;
});

// -------------------------------------------------------------------------------------------------------------------------------------------