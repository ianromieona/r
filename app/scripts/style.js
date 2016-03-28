'use strict';
$(document).ready(function(){
  $('div.image-list-container').hover(
    function(){
      $(this).find('.img-hover').fadeIn(100);
  },function(){
      $(this).find('.img-hover').fadeOut(100);
  });
})
