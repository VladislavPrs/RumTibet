let menuBurger = document.querySelector('.header__menu-burger');
let menu = document.querySelector('.header__menu');
let content = document.querySelector('.header__content');
let elements = document.querySelector('.header__elements');
let header = document.querySelector('.header');
menuBurger.addEventListener('click', function(){
	menuBurger.classList.toggle('_active');
	menu.classList.toggle('_active');
	content.classList.toggle('_active');
	elements.classList.toggle('_active');
	header.classList.toggle('_active');
	document.body.classList.toggle('_lock');
})



const swiperDirections = document.querySelector('.swiper-directions');
let mySwiperDirections;


function mobileSliderDirections() {
	if (window.innerWidth <= 996 && swiperDirections.dataset.mobile == 'false') {
		mySwiperDirections = new Swiper(swiperDirections, {
			slidesPerView: 2,
			loop: true,
			slideClass: 'slide',
		});

		swiperDirections.dataset.mobile = 'true';
	}

	if (window.innerWidth > 996) {
		swiperDirections.dataset.mobile = 'false';
		if (swiperDirections.classList.contains('swiper-container-initialized')) {
			mySwiperDirections.destroy();
		}
	}
}

mobileSliderDirections()

window.addEventListener('resize', () => {
	mobileSliderDirections();
});

// ------------------------------------------------------------------------------------

const swiperBlog = document.querySelector('.swiper-blog');
let mySwiperBlog;

function mobileSliderBlog() {
	if (window.innerWidth <= 767 && swiperBlog.dataset.mobile == 'false') {
		mySwiperBlog = new Swiper(swiperBlog, {
			slidesPerView: 2,
			loop: true,
			slideClass: 'slide',
		});

		swiperBlog.dataset.mobile = 'true';
	}

	if (window.innerWidth > 767) {
		swiperBlog.dataset.mobile = 'false';
		if (swiperBlog.classList.contains('swiper-container-initialized')) {
			mySwiperBlog.destroy();
		}
	}
}

mobileSliderBlog()

window.addEventListener('resize', () => {
	mobileSliderBlog();
});

// ------------------------------------------------------------------------------------

const swiperGallery = document.querySelector('.swiper-gallery');
let mySwiperGallery;

function mobileSliderGallery() {
	if (window.innerWidth <= 767 && swiperGallery.dataset.mobile == 'false') {
		mySwiperGallery = new Swiper(swiperGallery, {
			slidesPerView: 2,
			loop: true,
			slideClass: 'slide',
		});

		swiperGallery.dataset.mobile = 'true';
	}

	if (window.innerWidth > 767) {
		swiperGallery.dataset.mobile = 'false';
		if (swiperGallery.classList.contains('swiper-container-initialized')) {
			mySwiperGallery.destroy();
		}
	}
}

mobileSliderGallery()

window.addEventListener('resize', () => {
	mobileSliderGallery();
});