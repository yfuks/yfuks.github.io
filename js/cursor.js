$(document).ready(function(){
    setInterval('FaireClignoterCursor()', 1800);
});

function FaireClignoterCursor (){
   $(".cursor").fadeOut(100).delay(600).fadeIn(100);
}
