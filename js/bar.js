/** **************************************************************************
 *
 *            :::      ::::::::     www - bar.js
 *          :+:      :+:    :+:
 *        +:+ +:+         +:+       Created: 13/09/2017 13:27 by yfuks
 *      +#+  +:+       +#+
 *    +#+#+#+#+#+   +#+
 *         #+#    #+#
 *        #+#   #+#+#+#+.fr         in WebStorm
 *
 * ************************************************************************* */

// on browser resize...
$(window).resize(function() {
    moveProgressBar();
    initMap();
});

$(".profile-img").click(function(){
    $('.profile').animate({'margin-top' : '10px'}, 1000, function () {
        $('.description').show();
        moveProgressBar();
        initMap();
    });
});

// SIGNATURE PROGRESS
function moveProgressBar() {
    var list = $('.bar-wrap');
    for (var i = 0; i < list.length; i++){
        var percent = ($(list[i]).data('progress-percent') / 100);
        var progressWidth = $(list[i]).width();
        var progressTotal = percent * progressWidth;
        var rand = Math.random();
        if (rand < 0.5)
            rand = 0.5;
        var animationLength = rand * 2500;
        var bar = $(list[i]).find('.bar-value');
        bar.stop().animate({
            width: progressTotal
        }, animationLength);
    }
}

