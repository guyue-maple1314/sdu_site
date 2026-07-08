$(function() {
	if (!isIE || ieVer == 10 || isIE11) {
        // $(".kuaijie").click(function(){
        //     $(".kuaijie").toggleClass("on");
        // });

        $(".kuaijie").hover(function() {
            $(".kuaijie").stop().addClass("on");
        }, function() {
            $(".kuaijie").stop().removeClass("on");
        });

		var gw = $(window).width();
		var vidIndex = 0;
		var slide_ba = new Swiper('.banner', {
			speed: 1000,
			spaceBetween: 0,
			loop: true,
			slidesPerView: 1,
			watchOverflow: true,
			lazy: {
				loadPrevNext: true
			},
			//effect : 'fade',fadeEffect: {crossFade: true},
			autoplay: {
				delay: 8000,
				stopOnLastSlide: false,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".banner .swiDots",
				clickable: !0,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.banner .next',
				prevEl: '.banner .prev',
			},
			on: {
				init: function() {
					var vid = $("#slide-video").attr('data-swiper-slide-index');
					vidIndex = vid;
				},
                slideChangeTransitionStart: function(swiper) {
                    $('.banner .banner-pro').removeClass('ani');
                    var numd = this.realIndex+1;
                    $('.jindu .numd').html('0'+numd);

                    var numt = this.slides.length-2;
                    $('.jindu .numt').html('0'+numt);
                },
				slideChangeTransitionEnd: function(swiper) {
                    $('.banner .banner-pro').addClass('ani');
					var videoList = $('.slide-ba').find("video");
					if (videoList.length) {
						for (var i = 0; i < videoList.length; i++) {
							videoList[i].pause();
						}
					};
					var swiper = this;
					if (gw > 1200) {
						if ($(".slide-ba .swiper-slide-active video").length > 0) {
							swiper.autoplay.stop();
							setTimeout(function() {
								swiper.autoplay.stop();
								var vio = $(".slide-ba .swiper-slide-active").find("video")[0];
								vio.currentTime = 0;
								vio.volume = 0;
								vio.play();
								vio.addEventListener('ended',
								function() {
									swiper.slideNext();
									swiper.autoplay.start();
								});
							},
							10);

						}
					}
				},
                
			},

		});
		// 移动端去掉视频
		var baVideo = $("#slide-video");
		if (baVideo.length != 0) {
			if (gw <= 1200) {
				slide_ba.removeSlide(vidIndex);
			};
		};
		// 移动端去掉视频
	}


var swi0 = new Swiper('.lt1Box', {
        speed: 1000,
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1,
        watchOverflow: true,
        lazy: {
            loadPrevNext: true
        },
        effect : 'fade',fadeEffect: {crossFade: true},
        autoplay: {
            delay: 6000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".lt1Box .dots",
            clickable: !0,
            bulletActiveClass: 'active'
        },
    });

    var swi4 = new Swiper('.lt4Box', {
        speed: 1000,
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1,
        watchOverflow: true,
        lazy: {
            loadPrevNext: true
        },
        //effect : 'fade',fadeEffect: {crossFade: true},
        autoplay: {
            delay: 6000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".lt4Box .dots",
            clickable: !0,
            bulletActiveClass: 'active'
        },
    });

    var swi7 = new Swiper('.lt7Box', {
        speed: 1000,
        spaceBetween: 60,
        loop: true,
        slidesPerView:3,
        slidesPerGroup : 3,
        watchOverflow: true,
        lazy: {
            loadPrevNext: true
        },
        //effect : 'fade',fadeEffect: {crossFade: true},
        autoplay: {
            delay: 6000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".lt7Box .dots",
            clickable: !0,
            bulletActiveClass: 'active'
        },
        breakpoints:{
            1025: {
                spaceBetween: 60,
                slidesPerView:3,
                slidesPerGroup : 3,
            },
            769: {
                spaceBetween: 15,
                slidesPerView:2,
                slidesPerGroup : 3,
            },
            200: {
                spaceBetween: 15,
                slidesPerView:1,
                slidesPerGroup : 1,
            }
        },
    });

    var swi7s = new Swiper('.lt7sBox', {
        speed: 1000,
        spaceBetween: 60,
        loop: true,
        slidesPerView:3,
        slidesPerGroup : 3,
        watchOverflow: true,
        lazy: {
            loadPrevNext: true
        },
        //effect : 'fade',fadeEffect: {crossFade: true},
        autoplay: {
            delay: 600000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".lt7sBox .dots",
            clickable: !0,
            bulletActiveClass: 'active'
        },
        breakpoints:{
            1025: {
                spaceBetween: 60,
                slidesPerView:3,
                slidesPerGroup : 3,
            },
            769: {
                spaceBetween: 15,
                slidesPerView:2,
                slidesPerGroup : 3,
            },
            200: {
                spaceBetween: 15,
                slidesPerView:1,
                slidesPerGroup : 1,
            }
        },
    });

    var swi9 = new Swiper('.lt9Box', {
        speed: 1000,
        spaceBetween: 0,
        loop: true,
        
        //effect : 'fade',fadeEffect: {crossFade: true},
        
        pagination: {
            el: ".lt9Box .dots",
            clickable: !0,
            bulletActiveClass: 'active'
        },
    });

    var swi13 = new Swiper('.lt13Box', {
        speed: 1000,
        spaceBetween: 25,
        slidesPerView: 3,
        loop: true,
        //effect : 'fade',fadeEffect: {crossFade: true},
        autoplay: {
            delay: 6000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".lt13Box .dots",
            clickable: !0,
            bulletActiveClass: 'active'
        },
    });

    var swi17 = new Swiper('.lt17Box', {
        speed: 1000,
        spaceBetween: 28,
        loop: true,
        slidesPerView:4,
        watchOverflow: true,
        lazy: {
            loadPrevNext: true
        },
        //effect : 'fade',fadeEffect: {crossFade: true},
        autoplay: {
            delay: 6000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".lt17Box .dots",
            clickable: !0,
            bulletActiveClass: 'active'
        },
        breakpoints:{
            1025: {
                spaceBetween: 28,
                slidesPerView:4,
            },
            769: {
                spaceBetween: 15,
                slidesPerView:2,
            },
            200: {
                spaceBetween: 15,
                slidesPerView:2,
            }
        },
    });

    
})