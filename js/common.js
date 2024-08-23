$(function () {

	/* 풀페이지 휠 이동 */
	var swiper2 = new Swiper(".fullpage", {
		direction: "vertical",
		slidesPerView: 1,
		/* 		spaceBetween: 30, */
		mousewheel: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		hashNavigation: {
			watchState: true,
		},
		on: {
			slideChange: function () {
				if(this.realIndex==1){
					$('.progress').addClass('on');
				}else{
					$('.progress').removeClass('on');
				}
			}
		}
	});

	/* design 탭메뉴 */
	$('.design ul.tab >li').click(function () {
		$(this).addClass('on').siblings().removeClass('on');
		let idx = $(this).index();
		$('.design .container .d_bottom > div').eq(idx).addClass('on').siblings().removeClass('on');
	});

	/* design 슬라이드 */
	let swiper1 = new Swiper(".d_bottom .slidewrap", {
		autoplay: {
			delay: 3000, // delay between slides in milliseconds
			disableOnInteraction: false, // autoplay will not be disabled after user interaction
		  },
		  pagination: {
			el: ".slidewrap .swiper-pagination",
			clickable: true, // Add this line
		  },
	});

 

 

}); //ready end

