var slideIndex = 0;
var timerid;
carousel();

function plusDivs(n) {
    clearTimeout(timerid);
    showDivs(slideIndex += n);
    timerid = setTimeout(carousel, 15000); // 15 seconds after manual
}

function currentDiv(n) {
    clearTimeout(timerid);
    showDivs(slideIndex = n);
    timerid = setTimeout(carousel, 15000);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dots");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " w3-white";
}


function carousel() {
    showDivs(slideIndex += 1);
    timerid = setTimeout(carousel, 5000); // 5 seconds auto
}
