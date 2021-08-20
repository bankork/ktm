import { EventInterface } from '../interfaces/event-interface';

declare let $: any;
declare let jQuery: any;
declare let objectFitImages: any;
declare let jarallax: any;

interface IonRangeSliderInterface{
    to: any;
    from: any;
}

export const loadScript = (url: string) => {
  const body = document.body as HTMLDivElement;
  const script = document.createElement('script');
  script.innerHTML = '';
  script.src = url;
  script.async = false;
  script.defer = true;
  body.appendChild(script);
};

export const  initTemplate = () =>   $(() => {
    // var v = $;
        jQuery(document).ready(() => {
          // tslint:disable-next-line:one-variable-per-declaration
            let e, i, s, t, o, r, n, l, a, d, p, c, _;

            objectFitImages(),
              // tslint:disable-next-line:only-arrow-functions typedef
                $(window).scroll(() => {
                  // tslint:disable-next-line:no-shadowed-variable
                    const e = $('header.header');
                    1 <= $(window).scrollTop() ? e.addClass('header--fixed') : e.removeClass('header--fixed');
                }),
              // tslint:disable-next-line:only-arrow-functions
                $(window).scroll(() => {
                    const e = $('header.header--front_3');
                    40 <= $(window).scrollTop() ? e.addClass('header--sticky') : e.removeClass('header--sticky');
                }),
                (() => {
                    const i = $('.aside-dropdown');
                    if (i.length) {
                        const e = $('.dropdown-trigger'),
                            s = $('.aside-dropdown__close'),
                            t = $('.aside-dropdown .main-menu__link--scroll');
                        e.on('click', () => {
                            i.addClass('aside-dropdown--active');
                        }),
                          // tslint:disable-next-line:only-arrow-functions typedef
                            s.on('click', () => {
                                i.removeClass('aside-dropdown--active');
                            }),
                            t.on('click', () => {
                                i.removeClass('aside-dropdown--active');
                            }),
                            $(document).on('click', (e: EventInterface) => {
                                $(e.target).closest('.dropdown-trigger, .aside-dropdown__inner').length || (i.removeClass('aside-dropdown--active'), e.stopPropagation());
                            });
                    }
                })()
             , (() => {
                let e = $(".promo-slider");
                if (e.length) {
                  var r = $(".promo-slider__count"),
                    i = $(".slider__nav--promo .slider__prev"),
                    s = $(".slider__nav--promo .slider__next");
                  e.on("init afterChange", (e: any, i: any, s: any, t: any) => {
                    var o = (s || 0) + 1;
                    r.text(o + "/" + i.slideCount);
                  }),
                    e.slick({ fade: !0, adaptiveHeight: !0, infinite: !0, speed: 1200, prevArrow: i, nextArrow: s });
                }
              })(),
                (e = $('.video-trigger')).length && e.fancybox(),
                $('.alert__close').on('click', (e: EventInterface) => {
                    $(e.target).parent('.alert').fadeOut(300);
                }),
                $('.accordion').length &&
                    $('.accordion .accordion__close').on('click', (e: EventInterface) => {
                        $(e.target).toggleClass('accordion__close--active').parents().children('.accordion__text-block').stop().slideToggle(300);
                    }),
                (i = $('.jarallax')),
                jarallax.length && i.jarallax({ speed: 0.3 }),
                (s = $('.tabs')).length && s.responsiveTabs({ startCollapsed: 'false' }),
                (t = $('.js-counter')).length && t.counterUp({ delay: 10, time: 1500 }),
              (() => {
                const e = $('.causes-slider');
                if (e.length) {
                  const i = $('.causes-slider__nav .slider__prev'),
                    s = $('.causes-slider__nav .slider__next');
                  e.slick({
                    slidesToShow: 3,
                    prevArrow: i,
                    nextArrow: s,
                    responsive: [
                      { breakpoint: 1200, settings: { slidesToShow: 2 } },
                      { breakpoint: 768, settings: { slidesToShow: 1 } },
                    ],
                  });
                }
              })(),
            (o = $('.projects-masonry')).length && o.isotope({ itemSelector: '.projects-masonry__item', percentPosition: !0 }),
          (() => {
              const i = $('.gallery-masonry');
              if (i.length) {
                  i.isotope({ itemSelector: '.gallery-masonry__item', percentPosition: !0 });
                  const f = $('.filter-panel__item');
                  f.on('click', (e: EventInterface) => {
                      const g = $(e.target).attr('data-filter');
                      i.isotope({ filter: g });
                  }),
                      f.on('click', (e: EventInterface) => {
                          f.removeClass('filter-panel__item--active'), $(e.target).addClass('filter-panel__item--active');
                      });
              }
          })(),
          (() => {
              const e = $('.range-slider .range-slider__b');
              if (e.length) {
                  const i = $('.range-slider__min'),
                      s = $('.range-slider__max');
                  e.ionRangeSlider({
                      type: 'double',
                      min: 0,
                      max: 1200,
                      from: 50,
                      to: 900,
                      skin: 'round',
                      step: 10,
                      onChange(e: IonRangeSliderInterface) {
                          i.val(e.from), s.val(e.to);
                      },
                  });
              }
          })(),
          (() => {
              if ($('.cart-item__count').length) {
                  const e = $('.cart-item__minus'),
                      i = $('.cart-item__plus');
                  e.on('click', (e: EventInterface) => {
                      let f = $(e.target).parent().find('input'),
                          i = parseInt(f.val()) - 1;
                      return (i = i < 1 ? 1 : i), f.val(i), f.change(), !1;
                  }),
                      i.on('click', (e: EventInterface) => {
                          const f = $(e.target).parent().find('input');
                          return f.val(parseInt(f.val()) + 1), f.change(), !1;
                      });
              }
          })(),
          (() => {
              if ($('.form__count').length) {
                  const e = $('.form__minus'),
                      i = $('.form__plus');
                  e.on('click', (e: EventInterface) => {
                      let f = $(e.target).parent().find('input'),
                          i = parseInt(f.val()) - 1;
                      return (i = i < 1 ? 1 : i), f.val(i), f.change(), !1;
                  }),
                      i.on('click', (e: EventInterface) => {
                          const f = $(e.target).parent().find('input');
                          return f.val(parseInt(f.val()) + 1), f.change(), !1;
                      });
              }
          })(),
          (r = $('.form__select')).length && r.niceSelect({}),
          (n = $('.shop__aside-trigger')).length &&
              (n.on('click', () => {
                  $('body').find('.aside-holder').toggleClass('aside-holder--visible'), $('body').find('.shop__backdrop').toggleClass('shop__backdrop--visible');
              }),
              $('.shop__aside-close').on('click', () => {
                  $('body').find('.aside-holder').removeClass('aside-holder--visible'), $('body').find('.shop__backdrop').removeClass('shop__backdrop--visible');
              }),
              $('.shop__backdrop').on('click', (e: EventInterface) => {
                  $(e.target).removeClass('shop__backdrop--visible'), $('body').find('.aside-holder').removeClass('aside-holder--visible');
              })),
          $('.aside-menu__item--has-child a').on('click', (e: EventInterface) => {
              $(e.target).parent().children('.aside-menu__sub-list').stop().slideToggle(300);
          }),
          (l = $('a.anchor[href^="#"]')).length &&
              l.on('click', (e: EventInterface) => {
                  const i = $(e.target);
                  $('html, body')
                      .stop()
                      .animate({ scrollTop: $(i.attr('href')).offset().top }, 600),
                      e.preventDefault();
              }),
          (a = $('a.main-menu__link--scroll')).length && a.mPageScroll2id({ highlightClass: 'main-menu__link--highlighted' }),
          (d = $('.main-slider')).length &&
              (d.slick({ slidesToShow: 1, slidesToScroll: 1, arrows: !1, asNavFor: '.nav-slider', fade: !0 }), $('.nav-slider').slick({ slidesToShow: 4, slidesToScroll: 1, asNavFor: '.main-slider', focusOnSelect: !0, arrows: !1 })),
          (() => {
              const e = $('.projects-slider');
              if (e.length) {
                  const i = $('.projects-slider__nav .slider__prev'),
                      s = $('.projects-slider__nav .slider__next');
                  e.slick({
                      slidesToShow: 3,
                      prevArrow: i,
                      nextArrow: s,
                      responsive: [
                          { breakpoint: 1200, settings: { slidesToShow: 2 } },
                          { breakpoint: 768, settings: { slidesToShow: 1 } },
                      ],
                  });
              }
          })(),
          (() => {
              const e = $('.related-slider');
              if (e.length) {
                  const i = $('.related-slider__nav .slider__prev'),
                      s = $('.related-slider__nav .slider__next');
                  e.slick({
                      slidesToShow: 4,
                      slidesToScroll: 1,
                      prevArrow: i,
                      nextArrow: s,
                      responsive: [
                          { breakpoint: 1200, settings: { slidesToShow: 3 } },
                          { breakpoint: 992, settings: { slidesToShow: 2 } },
                          { breakpoint: 576, settings: { slidesToShow: 1 } },
                      ],
                  });
              }
          })(),
          (() => {
              const e = $('.instagram-slider');
              if (e.length) {
                  const i = $('.instagram-slider__nav .slider__prev'),
                      s = $('.instagram-slider__nav .slider__next');
                  e.slick({
                      prevArrow: i,
                      nextArrow: s,
                      slidesToShow: 6,
                      responsive: [
                          { breakpoint: 1600, settings: { slidesToShow: 5 } },
                          { breakpoint: 1200, settings: { slidesToShow: 4 } },
                          { breakpoint: 992, settings: { slidesToShow: 3 } },
                          { breakpoint: 768, settings: { slidesToShow: 2 } },
                      ],
                  });
              }
          })(),
          (p = $('.donors-slider')),
              (c = $('.donors-slider--style-1')),
              (_ = $('.donors-slider--style-2')),
            p.length &&
            (c.slick({
              arrows: !1,
              dots: !0,
              slidesToShow: 4,
              adaptiveHeight: !0,
              responsive: [
                { breakpoint: 992, settings: { slidesToShow: 3 } },
                { breakpoint: 768, settings: { slidesToShow: 2 } },
                { breakpoint: 576, settings: { slidesToShow: 1 } },
              ],
            }),
              _.slick({
                rows: 2,
                slidesPerRow: 4,
                arrows: !1,
                dots: !0,
                adaptiveHeight: !0,
                responsive: [
                  { breakpoint: 992, settings: { rows: 2, slidesPerRow: 3 } },
                  { breakpoint: 768, settings: { rows: 2, slidesPerRow: 2 } },
                  { breakpoint: 765, settings: { rows: 2, slidesPerRow: 1 } },
                ],
              })),
              (() => {
                const e = $('.testimonials-slider--style-1');
                if (e.length) {
                  const i = $('.testimonials-style-1__nav .slider__prev'),
                    s = $('.testimonials-style-1__nav .slider__next');
                  e.slick({ prevArrow: i, nextArrow: s, adaptiveHeight: !0 });
                }
              })(),
              (() => {
                const e = $('.testimonials-slider--style-2');
                if (e.length) {
                  const i = $('.testimonials-style-2__nav .slider__prev'),
                    s = $('.testimonials-style-2__nav .slider__next');
                  e.slick({ prevArrow: i, nextArrow: s, adaptiveHeight: !0 });
                }
              })(),
              (() => {
                const e = $('.testimonials-slider--style-3');
                if (e.length) {
                  const i = $('.testimonials-style-3__nav .slider__prev'),
                    s = $('.testimonials-style-3__nav .slider__next');
                  e.slick({ prevArrow: i, nextArrow: s, adaptiveHeight: !0, slidesToShow: 3, responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }] });
                }
              })(),
              (() => {
                const e = $('.items-slider');
                if (e.length) {
                  const i = $('.items-slider__nav .slider__prev'),
                    s = $('.items-slider__nav .slider__next');
                  e.slick({ prevArrow: i, nextArrow: s, fade: !0 });
                }
              })(),
          (() => {
              const e = $('.pages-slider');
              if (e.length) {
                  const i = $('.pages-slider__nav .slider__prev'),
                      s = $('.pages-slider__nav .slider__next');
                  e.slick({
                      slidesToShow: 3,
                      prevArrow: i,
                      nextArrow: s,
                      adaptiveHeight: !0,
                      responsive: [
                          { breakpoint: 992, settings: { slidesToShow: 2 } },
                          { breakpoint: 768, settings: { slidesToShow: 1 } },
                      ],
                  });
              }
          })();
        });
});
