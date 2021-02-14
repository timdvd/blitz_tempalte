/* CATALOG SLIDER FUNCTION */
function catalogSliderFunction(){
    const catalogSlider = new Swiper('.hero-catalog__slider', {
      loop: true,
      slidePerView: 1,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique'
        }
    });
}
/* WORK SLIDER FUNCTION */
function workSliderFunction(){
  const workSlider = new Swiper('.work__slider', {
    slidePerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
/*       SIDEBAR LOGIC        */
function sidebar_function(){
  $(document).ready(function(){
    $('.sidebarBtn').click(function(){
      $('.sidebar').toggleClass('active');
      $('.sidebarBtn').toggleClass('toggle');
    });
  });
  
  $('.pretty').click(function(){
    $(this).toggleClass('pretty-active');
  });
}
/* TOP BUTTON LOGIC */
function btn_top(){
  let btnTop = $('.btn-top');
  $(window).on('scroll', function(){
      if ($(window).scrollTop() >= 80){
          btnTop.fadeIn();
      }else{
          btnTop.fadeOut();
      }
  });

  btnTop.on('click', function(){
    $('html,body').animate({scrollTop:0},900); 
 });
}

$(document).ready(function(){
  try{
    catalogSliderFunction();
  }catch(e){

  }
  sidebar_function();
  btn_top();
  try{
    workSliderFunction();
  }catch(e){

  }
});
