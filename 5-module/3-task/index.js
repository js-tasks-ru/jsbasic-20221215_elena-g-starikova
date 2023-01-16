
function initCarousel() {
  let carouselInner = document.querySelector(".carousel__inner");
  let carousel = document.querySelector(".carousel");
  let shift = 300;
  carousel.addEventListener("click", function(event) {

    for (node of carousel.child(Nodes)) {
      if (event.target.contains(".carousel__arrow") !== "true") return;

      if (event.target.classList.contains(".carousel__arrow" && ".carousel__arrow_right") === "true") {
        carouselInner.style.transform = 'translateX(-shift + "px")';
         if (shift === 900) {
          event.target.style.display = "none"
        }
        shift += shift
      };

      if (event.target.classList.contains(".carousel__arrow" && ".carousel__arrow_left") === "true") {
        carouselInner.style.transform = 'translateX(shift + "px")';
        
        if (shift === 900) {
          event.target.style.display = "none"
        }
        shift += shift
      };
     
    }
  })
}