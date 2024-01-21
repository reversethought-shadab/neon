const pplrSelectItems = document.querySelectorAll(".pplr-selecter-item");
const textarea = document.querySelector(".textarea-neon");
const previewText = document.querySelector("#Preview-text");

const defaultFont = "Brittany Signature";
applyFont(defaultFont);
pplrSelectItems[0].classList.add("selected-font");

function applyFont(selectedFont) {
  textarea.style.fontFamily = selectedFont;
  textarea.style.fontSize = "16px";
  previewText.style.fontFamily = selectedFont;
  previewText.style.fontSize = "40px";
}

function handleFontItemClick(item) {
  pplrSelectItems.forEach((item) => item.classList.remove("selected-font"));

  item.classList.add("selected-font");

  const selectedFont = item.style.fontFamily;

  applyFont(selectedFont);
}

pplrSelectItems.forEach((item) => {
  item.addEventListener("click", () => {
    handleFontItemClick(item);
  });
});

textarea.addEventListener("input", () => {
  previewText.textContent = textarea.value;
});

function activateColor(event) {
  const selectedColorPallet = event.target;
  if (selectedColorPallet.classList.contains("color-pallet")) {
    document.querySelectorAll(".color-pallet").forEach(function (element) {
      element.classList.remove("active");
    });
    selectedColorPallet.classList.add("active");
    const selectedColor = selectedColorPallet.getAttribute("data-color");
    document.getElementById("Preview-text").style.color = selectedColor;
  }
}

$(document).ready(function () {
  // Hide all testimonials initially
  $(".card-rating").hide();

  // Show the first three testimonials with animation
  $(".card-rating").slice(0, 3).slideDown(800);

  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    const hiddenTestimonials = $(".card-rating:hidden").slice(0, 3);

    // Use slideDown with a longer duration for a smoother animation
    hiddenTestimonials.slideDown(800);

    if (hiddenTestimonials.length === 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }
  });
});

// review section
