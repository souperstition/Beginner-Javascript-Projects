// paddles
let leftPaddle = document.getElementsByClassName('left-paddle');
let rightPaddle = document.getElementsByClassName('right-paddle');
let pos = 0;
let main = $(".main");
let item = $(".item");

// get dimensions
let itemSize = main.outerWidth();
console.log(itemSize);
console.log(pos);

// responsive
$(window).on('resize', function() {
	itemSize = main.outerWidth();
    main.animate({scrollLeft:itemSize * pos}, 300);
    console.log(pos);
});





// scroll to right
$(leftPaddle).click( 
    function() {
    if(pos>0) {
    pos--;
    main.animate({scrollLeft:itemSize * pos}, 300);
    console.log(pos);
};
});



$(rightPaddle).click (
    function() {
    if(pos<5) {
    pos++;
    scrollAmount = itemSize * pos;
    main.animate({scrollLeft:itemSize * pos}, 300);
    console.log(pos);
};
});

let homeLink = document.getElementById('home');
$(homeLink).click (
    function() {
    pos = 0;
    main.animate({scrollLeft:0}, 500);
    console.log(pos);
});


let aboutLink = document.getElementById('about');
$(aboutLink).click (
    function() {
    pos = 1;
    main.animate({scrollLeft:itemSize}, 500);
    console.log(pos);
});

let contactLink = document.getElementById('contact');
$(contactLink).click (
    function() {
    pos = 5;
    main.animate({scrollLeft:itemSize * pos}, 500);
    console.log(pos);
});


