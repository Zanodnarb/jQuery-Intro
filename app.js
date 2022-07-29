$(document).ready(onReady);

let count = 0;

function onReady() {
    $('#js-scottsButton').on('click', scottsFunction);
    $('#js-container').on('click','.box', changeToPurple)
}

function scottsFunction() {
    count++;
    $('#js-howManyClicks').text(count);
    // append a new box div to my container:
    $('#js-container').append(`
    <div class="box"></div>
    `);
}

function changeToPurple() {
    console.log('Purple!')
}