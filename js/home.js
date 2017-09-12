/** **************************************************************************
 *
 *            :::      ::::::::     www - home.js
 *          :+:      :+:    :+:
 *        +:+ +:+         +:+       Created: 12/09/2017 15:22 by yfuks
 *      +#+  +:+       +#+
 *    +#+#+#+#+#+   +#+
 *         #+#    #+#
 *        #+#   #+#+#+#+.fr         in WebStorm
 *
 * ************************************************************************* */
$(".profile-img").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
    //$(".btn-default").show();
    $(".profile-name").show();
});