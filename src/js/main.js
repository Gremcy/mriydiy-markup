import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import $ from 'jquery';
import 'slick-carousel';
// import datepicker from './modules/datepicker';

function fixHeight() {
  const vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// $(document).ready(() => {
//   // eslint-disable-next-line no-restricted-globals
//   if (location.hash) {
//     // eslint-disable-next-line no-restricted-globals
//     const targetElement = $(location.hash);
//     if (targetElement.length) {
//       $('html, body').animate(
//         {
//           scrollTop: targetElement.offset().top,
//         },
//         400
//       );
//     }
//   }
// });

$(document).ready(() => {
  fixHeight();

  window.addEventListener('resize', () => {
    fixHeight();
  });

  $.fn.modalOpen = function () {
    $('.js-modal').modalCloseAll();
    $('body').addClass('is-hidden');
    $(this).fadeIn(1);
    $(this).addClass('is-open');
    $('.camps-photo-slider').slick('setPosition');
    return this;
  };

  $.fn.modalClose = function () {
    $(this).fadeOut(1);
    $(this).removeClass('is-open');
    $('body').removeClass('is-hidden');
    return this;
  };

  $.fn.modalCloseAll = function () {
    $('.js-modal').modalClose();
    return this;
  };

  $(document).on('click', '.js-close-modal', () => {
    $('.js-modal').modalCloseAll();
    /* eslint-disable */
    $('.youtube-video-iframe')[0].contentWindow.postMessage(
      '{"event":"command","func":"' + 'stopVideo' + '","args":""}',
      '*'
    );
    /* eslint-enable */
  });

  $(document).on('click', '.js-modal-link', (e) => {
    const target = $(e.currentTarget).attr('data-target');
    const $modal = $(`.js-modal[data-modal="${target}"]`);

    if ($modal.length) {
      $modal.modalOpen();
    }
  });

  $('.faq-item-top').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.faq-item-drop').not(this).removeClass('in').next().slideUp();
  });

  $('.documents-item-top').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.documents-item-drop').not(this).removeClass('in').next().slideUp();
  });

  // $('.faq-item-drop').click(function () {
  //   $(this).toggleClass('in').next().slideToggle();
  //   $('.faq-item-drop').not(this).removeClass('in').next().slideUp();
  // });

  // home tabs star
  if ($('.tabs__nav-btn').length > 0) {
    const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
    const tabsItems = document.querySelectorAll('.tabs__item');

    tabsBtn.forEach((item) => {
      item.addEventListener('click', () => {
        const currentBtn = item;
        const tabId = currentBtn.getAttribute('data-tab');
        const currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
          // eslint-disable-next-line no-shadow
          tabsBtn.forEach((item) => {
            item.classList.remove('active');
          });

          // eslint-disable-next-line no-shadow
          tabsItems.forEach((item) => {
            item.classList.remove('active');
          });

          currentBtn.classList.add('active');
          currentTab.classList.add('active');
        }
      });
    });

    document.querySelector('.tabs__nav-btn').click();
  }

  // contacts tab
  $(document).on('click', '.contacts-tab-question', () => {
    $('.contacts-tab-question').addClass('active');
    $('.contacts-form-question').addClass('show');
    $('.contacts-tab-call').removeClass('active');
    $('.contacts-form-call').removeClass('show');
  });

  $(document).on('click', '.contacts-tab-call', () => {
    $('.contacts-tab-call').addClass('active');
    $('.contacts-form-call').addClass('show');
    $('.contacts-tab-question').removeClass('active');
    $('.contacts-form-question').removeClass('show');
  });

  // menu
  $(document).on('click', '.header-burger', () => {
    $('.menu-wrapper').addClass('show');
    $('.menu-overlay').addClass('show');
    $('body').addClass('is-hidden');
  });
  $(document).on('click', '.menu-close', () => {
    $('.menu-wrapper').removeClass('show');
    $('.menu-overlay').removeClass('show');
    $('body').removeClass('is-hidden');
  });

  $(document).on('click', '.menu-overlay', () => {
    $('.menu-wrapper').removeClass('show');
    $('.menu-overlay').removeClass('show');
    $('body').removeClass('is-hidden');
  });

  $('.menu-opened-heading').click(function () {
    $(this).toggleClass('open').next().slideToggle();
  });

  if ($('.home-experience-slider').length > 0) {
    $('.home-experience-slider').slick({
      slidesToShow: 4,
      arrows: true,
      dots: false,
      infinite: false,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: $('.home-experience-slider-arrows .slick-prev'),
      nextArrow: $('.home-experience-slider-arrows .slick-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            variableWidth: false,
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    });
  }

  if ($('.home-values-container').length > 0) {
    $('.home-values-container').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      infinite: false,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 767,
          settings: 'unslick',
        },
      ],
    });
  }

  if ($('.kindergarten-approach-slider').length > 0) {
    $('.kindergarten-approach-slider').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      infinite: false,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 767,
          settings: 'unslick',
        },
      ],
    });
  }

  if ($('.contacts-school-slider').length > 0) {
    $('.contacts-school-slider').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      infinite: false,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 666,
          settings: 'unslick',
        },
      ],
    });
  }

  if ($('.js-kindergarten-branches-slider').length > 0) {
    $('.js-kindergarten-branches-slider').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      infinite: false,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 677,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1024,
          settings: 'unslick',
        },
      ],
    });
  }

  if ($('.online-reviews-slider').length > 0) {
    $('.online-reviews-slider').slick({
      slidesToShow: 3,
      arrows: true,
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      prevArrow: $('.online-reviews-slider-arrows .slick-prev'),
      nextArrow: $('.online-reviews-slider-arrows .slick-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1.2,
            arrows: false,
            dots: true,
          },
        },
      ],
    });
  }

  if ($('.kindergarten-desktop-slider').length > 0) {
    $('.kindergarten-desktop-slider').slick({
      slidesToShow: 1,
      fade: true,
      arrows: true,
      dots: false,
      infinite: true,
      slidesToScroll: 1,
      prevArrow: $('.kindergarten-desktop-slider-arrows .slick-prev'),
      nextArrow: $('.kindergarten-desktop-slider-arrows .slick-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            arrows: true,
            dots: false,
            fade: false,
          },
        },
      ],
    });
  }

  if ($('.online-video-slider').length > 0) {
    $('.online-video-slider').slick({
      slidesToShow: 1,
      arrows: true,
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      prevArrow: $('.online-video-slider-arrows .slick-prev'),
      nextArrow: $('.online-video-slider-arrows .slick-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    });
  }

  if ($('.home-videos-slider').length > 0) {
    $('.home-videos-slider').slick({
      slidesToShow: 3,
      dots: true,
      arrows: false,
      infinite: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 666,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($('.camps-parents-slider').length > 0) {
    $('.camps-parents-slider').slick({
      slidesToShow: 3,
      dots: true,
      arrows: true,
      infinite: true,
      slidesToScroll: 1,
      prevArrow: $('.camps-parents-slider-arrows .slick-prev'),
      nextArrow: $('.camps-parents-slider-arrows .slick-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 666,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($('.camps-reviews-slider').length > 0) {
    $('.camps-reviews-slider').slick({
      slidesToShow: 2,
      dots: true,
      arrows: true,
      infinite: true,
      slidesToScroll: 1,
      prevArrow: $('.camps-reviews-slider-arrows .slick-prev'),
      nextArrow: $('.camps-reviews-slider-arrows .slick-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 666,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($('.camps-bubble-container').length > 0) {
    $('.camps-bubble-container').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      infinite: false,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1023,
          settings: 'unslick',
        },
      ],
    });
  }

  if ($('.camps-our-mob-slider').length > 0) {
    $('.camps-our-mob-slider').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      infinite: false,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1023,
          settings: 'unslick',
        },
      ],
    });
  }

  if ($('.camps-list-container').length > 0) {
    $('.camps-list-container').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      infinite: false,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 666,
          settings: 'unslick',
        },
      ],
    });
  }

  // if ($('.camps-clubs-container').length > 0) {
  //   $('.camps-clubs-container').slick({
  //     slidesToShow: 1,
  //     arrows: false,
  //     dots: true,
  //     infinite: false,
  //     slidesToScroll: 1,
  //     mobileFirst: true,
  //     responsive: [
  //       {
  //         breakpoint: 666,
  //         settings: 'unslick',
  //       },
  //     ],
  //   });
  // }

  if ($('.one-news-interesting-slider').length > 0) {
    $('.one-news-interesting-slider').slick({
      slidesToShow: 3,
      arrows: false,
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
            infinite: true,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 666,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($('.camp-get-container').length > 0) {
    $('.camp-get-container').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      infinite: false,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 666,
          settings: 'unslick',
        },
      ],
    });
  }

  if ($('.camp-program-container').length > 0) {
    $('.camp-program-container').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      infinite: false,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 666,
          settings: 'unslick',
        },
      ],
    });
  }

  if ($('.camps-photo-slider').length > 0) {
    $('.camps-photo-slider').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      infinite: false,
      slidesToScroll: 1,
    });
  }

  if ($('.home-text-rewievs-slider').length > 0) {
    $('.home-text-rewievs-slider').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      infinite: false,
      slidesToScroll: 1,
    });
  }

  /* eslint-disable */
  // Устанавливаем конечную дату в миллисекундах. То есть дату когда закончится отчет
  let startDate = new Date($('.camp-timer').data('timer')).getTime();

  // Обновляем таймер каждую секунду
  let x = setInterval(function () {
    // Получаем текущее время в миллисекундах
    let now = new Date().getTime();

    // Узнаем разницу во времени, между текущей даты и конечной даты
    let diff = startDate - now;

    // Считаем дни, часы, минуты и секунды
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    $('#countdown-days').text(days);
    $('#countdown-hours').text(hours);
    $('#countdown-minutes').text(minutes);
    // $('#countdown-seconds').text(seconds);

    // Если время истекло, то вместо таймера выводим некий текст.
    /* if (diff < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Акция истекла";
    } */
  }, 1000);
  /* eslint-enable */
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.config({
    ignoreMobileResize: true,
  });

  // анімація зірочок форми
  gsap.to('.js-request-anim', {
    scrollTrigger: {
      trigger: '.home-request-fluid',
      // start: 'end top',
      // markers: true,
      scrub: 0.4,
    },
    rotate: 390,
  });

  // анімація розпорядку дня
  const tlSecondModels = gsap.timeline();
  tlSecondModels.fromTo(
    '.js-stager-anim',
    { yPercent: 50, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      stagger: {
        each: 0.15,
      },
      ease: 'power4.out',
    }
  );
  ScrollTrigger.create({
    animation: tlSecondModels,
    trigger: '.js-stager-trigger',
    start: 'top center+=100',
    // markers: true,
  });

  // datapicker
  jQuery('#datetimepicker').datetimepicker({
    format: 'd.m.Y H:i',
    inline: true,
    lang: 'ru',
    timepicker: false,
  });

  // input file
  $('.input-file input[type=file]').on('change', function () {
    const file = this.files[0];
    $(this).next().html(file.name);
  });

  if ($('.vacancies-hire-slider').length > 0) {
    $('.vacancies-hire-slider').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      infinite: false,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 767,
          settings: 'unslick',
        },
      ],
    });
  }

  // таби на сторінці вакансій
  const tabs = document.querySelectorAll('.home-news-top-tabs-item');
  const contents = document.querySelectorAll('.home-news-container');
  if (tabs.length && contents.length) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        const tabContent = tab.getAttribute('data-tab');
        contents.forEach((content) => {
          if (
            tabContent === 'all' ||
            content.getAttribute('data-content') === tabContent
          ) {
            // eslint-disable-next-line no-param-reassign
            content.style.display = 'grid';
          } else {
            // eslint-disable-next-line no-param-reassign
            content.style.display = 'none';
          }
        });
      });
    });
    tabs[3].click();
  }

  // scroll на сторінці вакансії
  const onlineFirstBtn = document.querySelector('.online-first-btn');
  if (onlineFirstBtn) {
    onlineFirstBtn.addEventListener('click', () => {
      const vacanciesHire = document.getElementById('vacancies-hire');
      if (vacanciesHire) {
        vacanciesHire.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  }

  // cookie
  const cookieBanner = document.getElementById('cookieConsentBanner');
  const acceptButton = document.getElementById('acceptCookies');
  const cookieCloseBtn = document.querySelector(
    '.cookie-consent-banner-close-btn'
  );
  if (localStorage.getItem('cookiesAccepted') !== 'true') {
    cookieBanner.style.display = 'flex';
  }
  acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.style.display = 'none';
  });
  cookieCloseBtn.addEventListener('click', () => {
    cookieBanner.style.display = 'none';
  });
});
