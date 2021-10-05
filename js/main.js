$(document).ready(function () {
    var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
  });

  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
  });

  var hotelSlider = new Swiper('.hotel-slider', {
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  }); 

  $('.parallax-window').parallax({imageSrc: 'img/newsletter-bg.jpg'});

  var menuButton = document.querySelector(".menu-btn");
  menuButton.addEventListener("click", function () {
    document.querySelector(".navbar-menu").classList.toggle('navbar-menu--visible');
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }



  $(document).ready(function(){
            $(this).keydown(function(eventObject){
                if (eventObject.which == 27)
                    $('.modal__overlay').removeClass('modal__overlay--visible');
                    $('.modal__dialog').removeClass('modal__dialog--visible');
            });
        });


  $('.form').each(function() {
    $(this).validate({
    messages: {
    name: "Please specify your name *",
    phone: "Please leave a phone number *",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    }
  }
  });
  });

  $(document).ready(function(){
    $('.phone').mask('+7 (999) 999-99-99');
  });

  AOS.init();
});