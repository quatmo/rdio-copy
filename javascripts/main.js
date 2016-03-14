require('normalize.css');
require('../scss/main.scss');

require('smoothscroll-for-websites');

var $ = jQuery = require('jquery');
var skrollr = require('skrollr');

$(document).ready(function () {
    skrollr.init({
        smoothScrolling: false
    });

    $(window).scroll(function () {
        console.log($(window).scrollTop())
    })
});