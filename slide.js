document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide");
    var captions = document.querySelectorAll(".caption");
  
    for (var i = 0; i < slides.length; i++) {
      slides[i].addEventListener("mouseover", showCaption);
      slides[i].addEventListener("mouseout", hideCaption);
    }
  
    function showCaption() {
      var caption = this.querySelector(".caption");
      caption.style.display = "block";
    }
  
    function hideCaption() {
      var caption = this.querySelector(".caption");
      caption.style.display = "none";
    }
  });