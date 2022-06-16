"use strict";

const slider = function () {
	const slides = document.querySelectorAll(".testimonial--card");
	console.log(slides);
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
