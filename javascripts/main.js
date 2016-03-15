require('normalize.css');
require('font-awesome/css/font-awesome.css');
require('unslider/dist/css/unslider.css');
require('../scss/main.scss');

require('smoothscroll-for-websites');

var $ = jQuery = require('jquery');
var skrollr = require('skrollr');
var unslider = require('unslider');

$(document).ready(function () {
    skrollr.init({
        smoothScrolling: false,
        forceHeight: false
    });

    $('.slider').unslider({
        autoplay: true,
        speed: 1000,
        delay: 4000,
        animation: 'fade',
        nav: false,
        arrows: false
    });

    $(window).scroll(function () {
        console.log($(window).scrollTop());
    });
});