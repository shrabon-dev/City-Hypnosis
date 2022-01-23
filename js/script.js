$('.slick-banner').slick({
    arrows: true,
    autoplay: true,
    prevArrow:'<i class="fas fa-chevron-left prev"></i>',
    nextArrow:'<i class="fas fa-chevron-right next"></i>',

});
$('.logo__img__slider').slick({
    arrows: true,
    autoplay: true,
    slidesToShow:3,
    slideToscroll:1,
    prevArrow:'<i class="fas fa-chevron-left prev"></i>',
    nextArrow:'<i class="fas fa-chevron-right next"></i>',

});
$('.slick-img').slick({
    arrows: false,
    dots: true,
    autoplay: true,
});


$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// our course part

$('.slick-course').slick({
    slidesToShow: 3,
    prevArrow:'<i class="fas fa-chevron-left prev"></i>',
    nextArrow:'<i class="fas fa-chevron-right next"></i>',
    centerMode:true,
    centerPadding:"0",
});
// testimonial 
$('.testi-lft-slider-img').slick({
    prevArrow:'<i class="fas fa-chevron-left prev"></i>',
    nextArrow:'<i class="fas fa-chevron-right next"></i>',
    asNavFor: ".testi-lft-slider-txt",

});
$('.testi-lft-slider-txt').slick({
    arrows: false,
    asNavFor: ".testi-lft-slider-img",
});


// teacher part

$('.team-slick-slider').slick({
    slidesToShow:3,
    arrows:false,
});

// footer part 

$('.footer-bottom-img-slick-slider').slick({
    arrows: false,
    slidesToShow: 6,
});

// event part 

$('.list1').click(function(){
   $('.rt').toggleClass("right")
   $('.btm').toggleClass("bottom")
   $('.slide-down-p').slideToggle()
   $('.bg-yollow').toggleClass("bg-white")
});
$('.list2').click(function(){
    $('.rt2').toggleClass("right2")
    $('.btm2').toggleClass("bottom2")
    $('.slide-down-p2').slideToggle()
    $('.bg-yollow2').toggleClass("bg-white2")
 });
 $('.list3').click(function(){
    $('.rt3').toggleClass("right3")
    $('.btm3').toggleClass("bottom3")
    $('.slide-down-p3').slideToggle()
    $('.bg-yollow3').toggleClass("bg-white3")
    
 });
 $('.venobox').venobox(); 