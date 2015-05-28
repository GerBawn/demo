/**
 * Created by ling on 2015/5/26.
 */

$(function(){
    $('.link .button').hover(function(){
        var title = $(this).attr('data');
        var parentLeft = $(this).position().left + 10;
        $('.tip em').text(title);
        var tip = $('.tip');
        var left = parentLeft - (tip.outerWidth() - $(this).outerWidth()) / 2;
        tip.css({'left' : left + 'px'}).animate({'top': 140, 'opacity': 1}, 300);
    }, function(){
        var tip = $('.tip');
        if(!tip.is(':animated')){
            tip.animate({'top': 100, 'opacity': 0}, 300);
        }
    });

});
