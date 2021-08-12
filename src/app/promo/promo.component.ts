import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})



export class PromoComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
    /*(function () {
      var e = $(".promo-slider");
      if (e.length) {
        var r = $(".promo-slider__count"),
          i = $(".slider__nav--promo .slider__prev"),
          s = $(".slider__nav--promo .slider__next");
        e.on("init", function (e:any, i:any, s:any, t:any) {
          var o = (s || 0) + 1; alert(JSON.stringify(s));
          r.text(o + "/" + i.slideCount);
        }),
        e.slick({ fade: !0, adaptiveHeight: !0, infinite: !0, speed: 1200, prevArrow: i, nextArrow: s });
      }
    })();*/
  }

  ngOnChanges() {
    /*alert('changed');
    (function () {
      var e = $(".promo-slider");
      if (e.length) {
        var r = $(".promo-slider__count"),
          i = $(".slider__nav--promo .slider__prev"),
          s = $(".slider__nav--promo .slider__next");
        e.on("afterChange", function (e:any, i:any, s:any, t:any) {
          var o = (s || 0) + 1; alert(JSON.stringify(s));
          r.text(o + "/" + i.slideCount);
        }),
          e.slick({ fade: !0, adaptiveHeight: !0, infinite: !0, speed: 1200, prevArrow: i, nextArrow: s });
      }
    })();*/

  }
}
