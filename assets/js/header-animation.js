/**=====================
     Laptop Animation
==========================**/

// laptop rotate effect
const element = document.querySelector(".laptop-img");
let rotationDegree = 60;

window.addEventListener("scroll", () => {
  rotationDegree = Math.max(
    0,
    60 - (window.scrollY / window.innerHeight) * 120
  );
  element.style.transform = `rotateX(${rotationDegree}deg)`;
});

// effect object rotate
window.addEventListener("scroll", () => {
  const rotationAngle = window.pageYOffset * 0.15;
  const rotateObjects = document.querySelectorAll(".rotate-effect");
  rotateObjects.forEach((object) => {
    object.style.transform = `rotate(${rotationAngle}deg)`;
  });
});
