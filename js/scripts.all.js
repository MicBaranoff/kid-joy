(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function(){
    jQuery(function($){
        $("#bucket-tel").mask("+38(099) 999-9999");
        });
    $('[data-bucket-opener]').click(function(){
        $('.toy-bucket-holder').addClass('active');
    });
    $('.toy-bucket-closer').click(function(){
        $('.toy-bucket-holder').removeClass('active');
    });

    function getVals() {
        var parent = this.parentNode;
        var slides = parent.getElementsByTagName("input");
        var slide1 = parseFloat(slides[0].value);
        var slide2 = parseFloat(slides[1].value);
        if (slide1 > slide2) {
            var tmp = slide2;
            slide2 = slide1;
            slide1 = tmp;
        }

        var right_value = parent.getElementsByClassName("right_value")[0];
        right_value.innerHTML = slide2;

        var left_value = parent.getElementsByClassName("left_value")[0];
        left_value.innerHTML = slide1;
    }

    window.onload = function () {
        // Initialize Sliders
        var sliderSections = document.getElementsByClassName("range_container");
        for (var x = 0; x < sliderSections.length; x++) {
            var sliders = sliderSections[x].getElementsByTagName("input");
            for (var y = 0; y < sliders.length; y++) {
                if (sliders[y].type === "range") {
                    sliders[y].oninput = getVals;
                    // Manually trigger event first time to display values
                    sliders[y].oninput();
                }
            }
        }
    };

    $('a.showAll').click(function () {
        $('form.filter_categories').toggleClass('active');
        if ($('form.filter_categories').hasClass('active') == true) {
            $(this).text('Скрыть');
        } else {
            $(this).text('Показать все');
        }
    });
});
},{}]},{},[1]);
