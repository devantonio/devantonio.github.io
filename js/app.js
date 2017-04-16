$("textarea").focusout(function(){
    $(this).css("transition", ".3s");
});
$(".btn").mouseout(function(){
    $(this).css("transition", ".3s");
});
$(".view").mouseout(function(){
    $(this).css("transition", ".3s");
});
$(".input").focusout(function(){
    $(this).css("transition", ".3s");
});
$(".view").mouseout(function(){
    $(this).css("transition", ".3s");
});
$(".mail").mouseout(function(){
    $(this).css("transition", ".5s");
});
$(".twitter").mouseout(function(){
    $(this).css("transition", ".5s");
});
$(".github").mouseout(function(){
    $(this).css("transition", ".5s");
});

var nav = $("#nav");

$(window).on("scroll", function(e) {
    
  if ($(window).scrollTop() + 60 > $('.workIntro').offset().top)  {
    nav.addClass("fix");
  } else {
    nav.removeClass("fix");
  }
  
});

$(window).on("scroll", function(e) {
    
  if ($(window).scrollTop() >= $('.workIntro').offset().top)  {
    $('#nav').addClass('navBckGrnd');
    $('.li').addClass('liColor');
    $('.line').css('background-color', "#ADADAD"); 
  } else {
    $('#nav').removeClass('navBckGrnd');
    $('.li').removeClass('liColor');
    $('.line').css('background-color', "#fff");
  }
  
});




       
     var lastScrollTop = 0;
$(window).scroll(function(event){
    
        
             var st = $(this).scrollTop();
   if (st > lastScrollTop){
    $('#nav').removeClass('upScroll').addClass('dwnScroll');
       
       
   } else {
    $('#nav').removeClass('dwnScroll').addClass('upScroll');
   
   }
   lastScrollTop = st;
         
    
  
});



$( ".mobile-nav" ).click(function() {     
    if( ! $('.line2').hasClass("exit3")){
          $(".line1").addClass("exit");
        $(".line3").addClass("exit2");
        $(".line2").addClass("exit3");
        $(".drop-down").addClass("show");
        $(".drop-down").addClass("grow");
        $(".drop-nav").css("display", "initial"); 
      }
    else{
          $(".line1").removeClass("exit");
        $(".line3").removeClass("exit2");
        $(".line2").removeClass("exit3"); 
        $(".drop-down").removeClass("show"); 
        $(".drop-nav").css("display", "none"); 
}
});

 $(window).click(function() {
        $(".line1").removeClass("exit");
        $(".line3").removeClass("exit2");
        $(".line2").removeClass("exit3"); 
        $(".drop-down").removeClass("show"); 
        $(".drop-nav").css("display", "none");
});

$('.mobile-nav').click(function(event){
    event.stopPropagation();
});
  
$('.btn').click(function(event) {
    var patt = new RegExp("@");
    if ( patt.test($(".email:text").val()) === false) {
      event.preventDefault();
      $(".emailValidation").css("visibility", "visible");
    } else {
       $(".emailValidation").css("visibility", "hidden");
    }
});



$('.btn').click(function(event) {
if ($(".email:text").val() === "" || $(".name:text").val() === "" || $(".textarea").val() === "") {
  event.preventDefault();
  $('.error-msg').css("visibility", "visible");
  $(".msgSent").css("visibility", "hidden");
} else {
    $('.error-msg').css("visibility", "hidden");
}
});
 
var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
 
 $(window).on('load', function () {
  if (iOS === true) {
    $('header').addClass('ios-background');
  }
});
