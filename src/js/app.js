/**
 * sub list Module
 * 
 * @param void
 * @return void
 */
(function () {
   //'use strict';
   var section = document.querySelectorAll(".code-section");
   var sections = {};
   var i = 1;
   Array.prototype.forEach.call(section, function (e) {
      sections[e.id] = e.offsetTop;
   });
   window.onscroll = function () {
      var scrollPosition = document.documentElement.scrollTop + 50 || document.body.scrollTop + 50;
      for (i in sections) {
         if (sections[i] <= scrollPosition) {
            document.querySelector('.active-sub-list').setAttribute('class', '');
            document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active-sub-list');
         }
      }
   };
})();
$(function () {
   $('a[href*=\\#]:not([href=\\#])').on('click', function () {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
      if (target.length) {
         $('html,body').animate({
            scrollTop: target.offset().top - 66
         }, 66);
         return false;
      }
   });
});
