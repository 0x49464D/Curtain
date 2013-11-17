/**
 * Curtain
 * https://github.com/0x49464D/Curtain
 *
 * Copyright 2013 Israel Flores Morató
 * Released under the MIT license
 *
 */

$(function(){
    $.fn.Curtain = function(options){
        var settings = $.extend({
            backgroundColor: '#555555',
            color: '#ffffff',
            opacity: 0.8
        }, options);

        return this.each(function(){
            var div = $(this).find('div');

            $(this).css({
                'position': 'relative'
            });
            div.css({
                'background-color': settings.backgroundColor,
                'color': settings.color,
                'position': 'absolute',
                'float': 'none',
                'top': 0,
                'left': 0,
                'width': '100%',
                'height': '100%',
                'index-z': parseInt($(this).css('zindex') ? $(this).css('zindex') : '0') + 1,
                'opacity': settings.opacity
            });

            $(this).hover(function(){
                div.slideUp(500);
            }, function(){
                div.slideDown(500);
            });
        });
    }
}(jQuery));