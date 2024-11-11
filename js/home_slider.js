document.addEventListener('DOMContentLoaded', function() {
    var slider = tns({
        container: '.banner__slider',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: true,
        nav: false,
        gutter:0,
        center:true,
        mouseDrag:true,
        controlsText: [
        '<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'
        ]
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var slider = tns({
        container: '.home__landing__slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        controls: false,
        nav: true,
        center:false,
        mouseDrag:true,
        loop:false,
        responsive: {
            640: {
              edgePadding: 20,
              gutter: 20,
              items: 2
            },
            700: {
              gutter: 30
            },
            900: {
              items: 4
            }
          }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var slider = tns({
        container: '.home__team__slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        controls: true,
        center:false,
        mouseDrag:true,
        nav:false,
        autoplayButton:false,
        loop:false,
        responsive: {
            640: {
              edgePadding: 20,
              gutter: 20,
              items: 2
            },
            700: {
              gutter: 30
            },
            900: {
              items: 4
            }
          },
          controlsText: [
            '<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'
            ]

    });
});