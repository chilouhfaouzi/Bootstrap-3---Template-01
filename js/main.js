/* global $  */
$(function() { 
   'use strict';

   //Add and remove opacity from navbar
   var nav=$('.navbar');
   $(window).scroll(function(){
    console.log(nav.height());
    if($(window).scrollTop() >= nav.height()){
        nav.addClass('opcty8');
    }
    else{
        nav.removeClass('opcty8');
    }
   });

   $('.tabs > div').click(function(){
     $(this).addClass('main-bg-color').siblings().removeClass('main-bg-color');
     $('.tabs-content > div').hide();
    $('.'+ $(this).data('class')).show();
   });

  
   
});//End window.ready();