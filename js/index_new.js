//轮播图
$('.index_slide').swiper({
	autoplay : 4000,
	speed:1500,
	effect:'slide',
	autoplayDisableOnInteraction : false,
	loop : true
});

var _select_btn = $('.select_btn').find('.show'),
	_show = $('.col-sm-9').find('.show_box');

_select_btn.on('click',function(){
	var i = $(this).index();
	$(this).css('color','#e68d00').siblings().css('color','#000');
	_show.eq(i).fadeIn(500).siblings().fadeOut(500);
});

var galleryTop = new Swiper('.gallery-top', {

	spaceBetween: 10
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	spaceBetween: 10,
	centeredSlides: true,
	slidesPerView: 'auto',
	touchRatio: 0.2,
	slideToClickedSlide: true
});
galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop;

var swiper = new Swiper('.index_slide_02', {
	nextButton: '.swiper-button-right',
	prevButton: '.swiper-button-left',
	pagination: '.swiper-pagination',
	slidesPerView: 4,
	paginationClickable: true,
	spaceBetween: 30,
	loop:true
});

//var _index_hover_icons = $('.index_icons').find('li');
//_index_hover_icons.onmouseover(function(){
//	var _show_img = $(this).find('.img');
//	_show_img.css('z-index','111');
//});