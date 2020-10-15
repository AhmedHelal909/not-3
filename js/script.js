/*global $,alert, console*/ 
$(function(){
"use strict";
//triger nice scroll
$("html").niceScroll({

cursorcolor:'#f7600e',
cursorwidth:'10px',
cursorborderradius:0,
cursorborder:'1px solid #f7600e'
});
// change header height
$('.header').height($(window).height());
//scroll to features
$('.header .arrow i').click(function(){

$('html, body').animate({
scrollTop:$('.features').offset().top
},1000)
});
$('.hire').click(function(){

$('html, body').animate({
scrollTop:$('.ourteam').offset().top
},1000);


});
//show hidden item from work
$('.showmore').click(function(){

$('.ourwork .hidden').fadeIn(1000);
});
//check testimonial
var leftArrow = $('.testmoinal .container .fa-chevron-left'),
    rightArrow = $('.testmoinal .container .fa-chevron-right');
function checkClient (){


$('.client:first').hasClass('active')?leftArrow.fadeOut():leftArrow.fadeIn();
$('.client:last').hasClass('active')?rightArrow.fadeOut():rightArrow.fadeIn();
}
checkClient ();
$('.testmoinal i').click(function(){

if($(this).hasClass('fa-chevron-right')){
$('.testmoinal .active').fadeOut(100,function(){
$(this).removeClass('active').next('.client').addClass('active').fadeIn();
checkClient ();
});
} else{
$('.testmoinal .active').fadeOut(100,function(){
$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
checkClient ();
});

}

})

});