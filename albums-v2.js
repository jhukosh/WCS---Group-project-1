$(window).scroll(function() {  
  $('.main-header').toggleClass('scrollinj', $(this).scrollTop() > 50)
  $('.header a').toggleClass('nwarizzeniublak', $(this).scrollTop() > 50)
})