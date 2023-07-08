/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 *
 */

"use strict";
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)==false){
    $('#app-dashboard').tooltip({
        selector: '[data-toggle="tooltip"]',
        trigger: "hover"
    }).click(function () {
        $('[data-toggle="tooltip"]').tooltip("hide");
    });
    $('.modal').tooltip({
        selector: '[data-toggle="tooltip"]',
        trigger: "hover"
    }).click(function () {
        $('[data-toggle="tooltip"]').tooltip("hide");
    });
}
