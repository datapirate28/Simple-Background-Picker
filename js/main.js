document.getElementById('blue').onclick = blueBack
document.getElementById('green').onclick = greeBack
document.getElementById('black').onclick = blackBack
document.getElementById('yellow').onclick = yellowBack


function blueBack () {
    document.querySelector('body').style.backgroundColor = 'rgb(88, 88, 218)'
}

function greeBack () {
    document.querySelector('body').style.backgroundColor = 'aquamarine'
}

function blackBack () {
    document.querySelector('body').style.backgroundColor = 'black'
    document.querySelector('#borderColor').style.borderColor = 'white'
}

function yellowBack () {
    document.querySelector('body').style.backgroundColor = 'bisque'
}





