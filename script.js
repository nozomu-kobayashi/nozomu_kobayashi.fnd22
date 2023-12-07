"use strict";

const img_src = ["./6.jpg", "./7.jpg", "./8.jpg"];
let num = -1;

function slide_time() {
  if (num === 2) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("slide_img").src = img_src[num];
}
setInterval(slide_time, 5000);
