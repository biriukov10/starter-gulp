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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICQoJy5ocy1oZXJvX19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBsZXQgZWwgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGVsQXR0ciA9IGVsLmF0dHIoJ2hyZWYnKTtcclxuXHJcbiAgICBpZiAoZWxBdHRyICE9PSB1bmRlZmluZWQgJiYgZWxBdHRyICE9PSAnJykge1xyXG4gICAgICAkKCdodG1sJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiAkKGVsQXR0cikub2Zmc2V0KCkudG9wXHJcbiAgICAgIH0sIDcwMFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfSlcclxuXHJcblxyXG4gICQoJy5ocy1oZWFkZXItbWVudV9fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBlbCA9ICQodGhpcyk7XHJcbiAgICBsZXQgZWxBdHRyID0gZWwuYXR0cignaHJlZicpO1xyXG5cclxuICAgIGlmIChlbEF0dHIgIT09IHVuZGVmaW5lZCAmJiBlbEF0dHIgIT09ICcnKSB7XHJcbiAgICAgICQoJ2h0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICBzY3JvbGxUb3A6ICQoZWxBdHRyKS5vZmZzZXQoKS50b3BcclxuICAgICAgfSwgNzAwXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9KVxyXG59KTsgIl0sImZpbGUiOiJhcHAuanMifQ==
