/** **************************************************************************
 *
 *            :::      ::::::::     www - arcs.js
 *          :+:      :+:    :+:
 *        +:+ +:+         +:+       Created: 12/09/2017 16:57 by yfuks
 *      +#+  +:+       +#+
 *    +#+#+#+#+#+   +#+
 *         #+#    #+#
 *        #+#   #+#+#+#+.fr         in WebStorm
 *
 * ************************************************************************* */

$(".profile-img").click(function(){
    $('.profile').animate({'margin-top' : '10px'}, 1000, function () {
        $('.description').show();
        moveProgressBar();
    });
});