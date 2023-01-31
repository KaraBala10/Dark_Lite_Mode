const body = document.querySelector('body');
const pre = document.querySelector('pre');
const img = document.querySelector('img');
const y = document.getElementById('lamp');
img.style.position = 'absolute';
img.style.margin = '0px 0px 0px 40%';
body.style.backgroundColor = '#1c253d';
pre.style.color = 'white';
pre.style.textAlign = 'center';
pre.style.fontSize = 'xx-large';
var x = ['light-bulb-off.png','light-bulb-on.png']
let past = 0;
function replace() {
    if (past == 1){
        y.src =x[0];
        past =0;
        body.style.backgroundColor = '#1c253d';
    }
    else {
        y.src =x[1];
        past =1;
        body.style.backgroundColor = 'white';
        pre.style.color = 'black';
    }
}