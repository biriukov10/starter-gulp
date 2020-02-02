$(function () {

  $('.hs-hero__link').on('click', function (e) {

    let el = $(this);
    let elAttr = el.attr('href');

    if (elAttr !== undefined && elAttr !== '') {
      $('html').animate({
        scrollTop: $(elAttr).offset().top
      }, 700
      );
    }
    return false
  })


  $('.hs-header-menu__link').on('click', function () {
    let el = $(this);
    let elAttr = el.attr('href');

    if (elAttr !== undefined && elAttr !== '') {
      $('html').animate({
        scrollTop: $(elAttr).offset().top
      }, 700
      );
    }
    return false
  })
}); 