(function ($) {
  jQuery(document).on('ready', () => {
    // Mean Menu
    jQuery('.mean-menu').meanmenu({
      meanScreenWidth: '991',
    });

    // Magnific Popup
    $('.popup-youtube').magnificPopup({
      disableOn: 320,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    // Header Sticky
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 120) {
        $('.startp-nav').addClass('is-sticky');
      } else {
        $('.startp-nav').removeClass('is-sticky');
      }
    });

    // Popup Gallery
    $('.popup-btn').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
    });

    // Go to Top
    $(() => {
      // Scroll event
      $(window).on('scroll', () => {
        const scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').fadeIn('slow');
        if (scrolled < 300) $('.go-top').fadeOut('slow');
      });
      // Click event
      $('.go-top').on('click', () => {
        $('html, body').animate({ scrollTop: '0' }, 500);
      });
    });

    // FAQ Accordion
    $(() => {
      $('.accordion').find('.accordion-title').on('click', function () {
        // Adds Active Class
        $(this).toggleClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion-title').not($(this)).removeClass('active');
      });
    });
  });

  $(window).on('load', () => {
    // WOW JS
    if ($('.wow').length) {
      const wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 20, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
      });
      wow.init();
    }
  });

  // Preloader Area
  jQuery(window).on('load', () => {
    $('.preloader').fadeOut();
  });
}(jQuery));
