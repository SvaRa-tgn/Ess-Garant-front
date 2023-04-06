var appMaster = {

//Navigation
  scrollMenu: function(){
    var num = 5;
    $(document).on('scroll', function() {
      if ( $(document).scrollTop() > num ){
        $('.header').addClass('header-scroll');
        $('.nav').addClass('nav-scroll');
      } else {
        $('.header').removeClass('header-scroll');
        $('.nav').removeClass('nav-scroll');
      }
    });
  },


};

$(document).ready(function(){
  appMaster.scrollMenu();
});
