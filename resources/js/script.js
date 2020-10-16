$(document).ready(function(){

    /*Sticky Navigation*/

   $('.js--section-features').waypoint(function(direction){
       if (direction == "down") {
        $('nav').addClass('sticky');
        $('.mobile-nav-icon').css('color','#000');
        $('.mobile-nav-icon-close').css('color','#000');
       } else {
        $('nav').removeClass('sticky');
        $('.mobile-nav-icon').css('color','#fff');
        $('.mobile-nav-icon-close').css('color','#fff');
       }
   }, {
       offset: '60px;'
})

/* Scroll on Buttons */
$('.js--scroll-to-plans').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
})

$('.js--scroll-to-start').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 300);
})

/** NAVIGATION SCROLL
 * 
 */
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $(['name=' + this.hash.slice(1) + ']']);
             if (target.length) {
               $('html, body').animate({
                 scrollTop: target.offset().top                               
                    }, 1000);
                    return false;           
               }
          }
    });
});
/**
 * ANIMATIONS
 */

 $('.js--wp-1').waypoint(function(direction){
     $('.js--wp-1').addClass('animate__animated animate__fadeIn');
 }, { 
     offset: '50%'
})


$('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animate__animated animate__fadeInUp')
},{
    offset: '50%'
})

$('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animate__animated animate__fadeIn')
},{
    offset: '50%'
})

$('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animate__animated animate__pulse')
},{
    offset: '50%'
})

$('.mobile-nav-icon').click(function(){
    $(this).css('display', 'none');
    $('.mobile-nav-icon-close').css('display','block');
    $('.main-nav').slideToggle(200);
    $('.main-nav').css('display','block');
})

$('.mobile-nav-icon-close').click(function(){
    $(this).css('display','none');
    $('.mobile-nav-icon').css('display','block');
    $('.main-nav').slideToggle(200);
    $('.main-nav').css('display','none');
})




})