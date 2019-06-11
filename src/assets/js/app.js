import $ from 'jquery';

window.jQuery = $;

function toggleMenuClass(){
  $('.js-menutrigger').toggleClass('menu-trigger--active');
  $('.menu').toggleClass('menu--active');
  $('.menu-bg').toggleClass('menu-bg--active');
}

// Toggle mobile menu
$(document).ready(function(){
  $('.js-menutrigger').on('click', function(e){
    toggleMenuClass();
  })

  // Menu items
  $('.js-menu a').on('click', function(e){
    e.preventDefault();
    var section = $(e.currentTarget).attr('href');
    var pos = $('.' + section).offset().top;
    $('html,body').animate({ scrollTop: pos }, 'slow');
    toggleMenuClass();
  })

  // CTA button
  $('.js-cta').on('click', function(e){
    e.preventDefault();
    var pos = $('.contact').offset().top;
    $('html,body').animate({ scrollTop: pos }, 'slow');
  });

  // Scroll to top button
  $('.to-top').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });

  // Hide/show scroll to top button
  $(window).scroll(function() {
    if($(this).scrollTop() > 200){
      $('.to-top').addClass('show');
    }
    else {
      $('.to-top').removeClass('show');
    }
  });
  
})