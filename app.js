$(document).ready(onReady);

let count = 0;

function onReady() {
    $('#scottsButton').on('click', scottsFunction);
}

function scottsFunction() {
    console.log('Clicky click');
    count++;
    $('#howManyClicks').text(count);
}