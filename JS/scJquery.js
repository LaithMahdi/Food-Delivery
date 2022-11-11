$(document).ready(function(){
    /* owl carousel slider START */
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:1500,
        autoplayHoverPause:true
    });
    /* owl carousel slider END */


    /* Slick slider START */
    $('.sliderSlick').slick({
        slidesToShow: 4,
        centerMode:true,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
        dots:true
      });
    /* Slick slider END */


    /* isotope filter START */
   $('.menu-commande .row').isotope({
        itemSelector: '.items',
        layoutMode: 'fitRows'
    });
    $('.filtering .filter span').click(function(){
        $('.filtering .filter span').removeClass('active');
        $(this).addClass('active');
        var selector=$(this).attr('data-filter');
        $('.menu-commande .row').isotope({
            filter: selector
        });
        return false;
    }); 
    /* isotope filter END */

    
    /* magnificPopup START */
    $('.photo').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
	});
    /* magnificPopup END */
});