$(".planet").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
function(e) {
    $(".text").show();
    $(".iphone").show();
    $(".head").show();
});

$(".iphone").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
function(e) {
    $(".notification").show();
    $(".notification-content").show();
});
