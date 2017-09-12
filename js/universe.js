/** **************************************************************************
 *
 *            :::      ::::::::     www - universe.js
 *          :+:      :+:    :+:
 *        +:+ +:+         +:+       Created: 12/09/2017 15:21 by yfuks
 *      +#+  +:+       +#+
 *    +#+#+#+#+#+   +#+
 *         #+#    #+#
 *        #+#   #+#+#+#+.fr         in WebStorm
 *
 * ************************************************************************* */
var width = window.innerWidth;
var height = window.innerHeight;
var circles = new Array;
var previousX = 0;
var previousY = 0;
var NB_STARS = 50;

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
});
var newCircle = function () {
    var circle = new Konva.Circle({
        x: Math.random() * stage.getWidth(),
        y: (Math.random() * stage.getHeight()) + 100,
        radius: (Math.random() * 8) + 5,
        fillLinearGradientStartPoint: {x: 0, y: 0},
        fillLinearGradientEndPoint: {x: 10, y: 10},
        fillLinearGradientColorStops: [0, '#333', 0.5, '#666', 1, '#333'],
        rand: Math.random(),
        up: (Math.random() <= 0.7)
    });
    var anim = new Konva.Animation(function(frame) {
        if (circle.getAttr("y") <= -10) {
            circle.setAttr("x", Math.random() * stage.getWidth());
            circle.setAttr("y", stage.getHeight() + Math.random() * 100);
        }
        if (circle.getAttr("up"))
            circle.setY(circle.getAttr("y") - (2000 / (circle.getAttr("rand") * 10000 + 2000)));
        else
            circle.setY(circle.getAttr("y") + (2000 / (circle.getAttr("rand") * 10000 + 2000)));
    }, layer);
    anim.start();
    return circle;
};
var layer = new Konva.Layer();
for (var i = 0; i < NB_STARS; i++) {
    // add the shape to the layer
    circles[i] = newCircle();
    layer.add(circles[i]);
}
// add the layer to the stage
stage.add(layer);