$(document).ready(() => {
  init();
});

/**
 * Init
 */
function init() {
  new WOW().init();
  windowScroll();
  $('.carousel').carousel({
    interval: 3000,
    cycle: true
  });
  /**
   * Handle menu mobile
   */
  $('.mobile-menu-button').click(() => {
    toggleMobileMenu(true)
  });
  $('.close-mobile-menu').click(() => {
    toggleMobileMenu(false)
  });

  toggleLoading(false);
}

function windowScroll() {
  $(window).scroll(() => {
    checkHeader();
  })
}

function checkHeader() {
  const scrollTop = $(window).scrollTop();
  if (scrollTop > 0) {
    $('#header').not('.scroll').addClass('scroll');
  } else {
    $('#header').removeClass('scroll');
  }
}

function toggleMobileMenu(status) {
  console.log(status);
  if (!!status) {
    $('.mobile-menu').addClass('active');
  } else {
    $('.mobile-menu').removeClass('active');
  }
}

/**
 * Init map
 */
function initMap() {
  const mapDom = document.getElementById("map");
  if (!!mapDom) {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
}

/**
 * Toggle loading
 */
function toggleLoading(status) {
  if (!!status) {
    $('#loading').removeClass('hide');
  } else {
    $('#loading').addClass('hide');
  }
}