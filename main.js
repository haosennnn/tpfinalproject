const sr = ScrollReveal({
	distance: "30px",
	duration: 1800,
	reset: true,
});

sr.reveal(
	`.introduction`,
	{
		origin: "top",
		interval: 200,
	}
);

sr.reveal(`.p-1, .p-3`, {
	origin: "left",
});

sr.reveal(`.p-2`, {
	origin: "right",
});

let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
let slideIndex1 = [1,1];
let slideId1 = ["mySlides3", "mySlides4"]
showSlides1(1, 0);
// showSlides1(1, 1);

function plusSlides1(n, no) {
  showSlides1(slideIndex1[no] += n, no);
}

function showSlides1(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId1[no]);
  if (n > x.length) {slideIndex1[no] = 1}    
  if (n < 1) {slideIndex1[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex1[no]-1].style.display = "block";  
}

function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");

	if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
