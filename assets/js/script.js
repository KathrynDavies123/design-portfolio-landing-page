let backwardsarrow = document.querySelector(".backwardsarrow");
let forwardsarrow = document.querySelector(".forwardsarrow");
let slideshowcontainer = document.querySelector(".slideshowcontainer");
let img = document.querySelector("#slideimage");
let initial = 0;
let width = img.clientWidth;

document.body.onload = function () {
    width = img.clientWidth;
};


addEventListener("resize", function () {
  width = img.clientWidth;
}
);

forwardsarrow.addEventListener("click", function () {
    if (initial > -(width * 2)) {
      if (width > 270) {
        initial -= width + 30;
      } else {
        initial -= width + 15;
      }
      slideshowcontainer.style.transform = `translateX(${initial}px)`;
    }
  });
  
  backwardsarrow.addEventListener("click", function () {
    if (initial < width * 2) {
      if (width > 270) {
        initial += width + 30;
      } else {
        initial += width + 15;
      }
      slideshowcontainer.style.transform = `translateX(${initial}px)`;
    }
  });


