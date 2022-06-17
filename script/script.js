"use strict";
// Mobile toggle nav
const toggleNav = function () {
	const icon1 = document.getElementById("a");
	const icon2 = document.getElementById("b");
	const icon3 = document.getElementById("c");

	const nav = document.querySelector(".nav--ul");
	const hamburger = document.querySelector(".hamburger-icon");
	const hero = document.querySelector(".hero");

	hamburger.addEventListener("click", () => {
		icon1.classList.toggle("a");
		icon2.classList.toggle("c");
		icon3.classList.toggle("b");
		nav.classList.toggle("hidden");
		nav.classList.toggle("drop-shadow");
		hero.classList.toggle("dark");
	});
};

toggleNav();

// SLIDER
const slider = function () {
	const slides = document.querySelectorAll(".testimonial--card");
	const dotsContainer = document.querySelector(".dots");
	let curSlide = 0;
	const maxSlide = slides.length - 1;
	// create dots
	const createDots = function () {
		slides.forEach(function (s, i) {
			dotsContainer.insertAdjacentHTML(
				"beforeend",
				`<button class='dots__dot' data-slide=${i}></button>`
			);
		});
	};

	const activateDot = function (slide) {
		document
			.querySelectorAll(".dots__dot")
			.forEach((dot) => dot.classList.remove("dots__dot--active"));

		document
			.querySelector(`.dots__dot[data-slide='${slide}']`)
			.classList.add("dots__dot--active");
	};

	const goToSlide = function (slide) {
		slides.forEach(
			(s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%`)
		);
	};

	const init = function () {
		createDots();
		activateDot(0);
		goToSlide(0);
	};
	init();

	// event handler
	dotsContainer.addEventListener("click", function (e) {
		if (e.target.classList.contains("dots__dot")) {
			const { slide } = e.target.dataset;
			goToSlide(slide);
			activateDot(slide);
		}
	});
};

slider();
