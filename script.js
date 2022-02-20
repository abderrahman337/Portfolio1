
$(document).ready(function(){
      $(window).scroll(function(){
            if(this.scrollY > 20){
                  $('.nav-bar').addClass("sticky");
            }else{
                  $('.nav-bar').removeClass("sticky");
            }
            if(this.scrollY > 500)
            {
                  $('.btn-up').addClass("show");
            
            }
            else{
                  $('.btn-up').removeClass("show");
            }
      });
      $('.btn-menu').click(function(){
                  $('.nav-bar .menu').toggleClass("active");
                  $('.btn-menu i').toggleClass("active");
      });
      $('.btn-up').click(function() {
            $('html').animate({scrollTop:0});
     
      });
      $('.carousel').owlCarousel({
            margin:30,
            loop:true,
            autoplayTimeout:2000,
            autoplayHoverPause: false,
            nav:true,
            dots:true,
            items:3,
            responsive:{
                  0:{
                        items:1,
                  },
                  600:{
                        items:3, 
                  },
                  1000:{
                        items:6, 
                  }
            }
      });
}); 
 // scolling

var options = {
      strings: [' Designer', ' Developer','Freelencer'],
      typeSpeed: 60,
      backSpeed: 80,
      loop:true
    };
    var typed = new Typed('#tap', options);


var options = {
  strings: [' Designer', ' Developer'],
  typeSpeed: 40,
  backSpeed: 40,
  loop:true
};
var typed = new Typed('.typing', options);



