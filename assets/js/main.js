//  custom cursor
const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = {
  x: 0,
  y: 0,
};
const cursorBorderPos = {
  x: 0,
  y: 0,
};

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(0, 144, 144, .4)";
      cursorBorder.style.setProperty("--size", "55px");
    }
    if (item.dataset.cursor === "pointer2") {
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "60px");
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "30px");
  });
});
function loginClick() {
  var loginTab = document.getElementById("login-tab");
  loginTab.click();
}
function signupClick() {
  var signupTab = document.getElementById("signup-tab");
  signupTab.click();
}
// back to top
const tapTopBtn = document.querySelector(".tap-to-top-button");
const tapTopTopBox = document.querySelector(".tap-to-top-box");
tapTopBtn?.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
if (tapTopTopBox) {
  window.onscroll = function () {
    if (pageYOffset >= 1000) {
      tapTopTopBox.classList.remove("hide");
    } else {
      tapTopTopBox.classList.add("hide");
    }
  };
}
//  cart
// ==== CART ==================
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// == Open cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};

// == Close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

const postActionsControllers = document.querySelectorAll(
  ".post-actions-controller"
);

// When post action controllers are clicked, the action content is opened and closed

postActionsControllers.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const postActionsContent = document.getElementById(targetId);

    if (postActionsContent) {
      const isVisible = postActionsContent.getAttribute("data-visible");

      if (isVisible === "false") {
        postActionsContent.setAttribute("data-visible", "true");
        postActionsContent.setAttribute("aria-hidden", "false");
        btn.setAttribute("aria-expanded", "true");
      } else {
        postActionsContent.setAttribute("data-visible", "false");
        postActionsContent.setAttribute("aria-hidden", "true");
        btn.setAttribute("aria-expanded", "false");
      }
    }
  });
});

// If the action content is opened, it is closed by clicking outside of it

function handleClickOutside(event) {
  postActionsControllers.forEach((btn) => {
    const targetId = btn.getAttribute("data-target");
    const postActionsContent = document.getElementById(targetId);

    if (
      postActionsContent &&
      postActionsContent.getAttribute("data-visible") === "true"
    ) {
      if (!postActionsContent.contains(event.target) && event.target !== btn) {
        postActionsContent.setAttribute("data-visible", "false");
        postActionsContent.setAttribute("aria-hidden", "true");
        btn.setAttribute("aria-expanded", "false");
      }
    }
  });
}

document.addEventListener("click", handleClickOutside);

postActionsControllers.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

const likeBtns = document.querySelectorAll(".post-like");

// When the like buttons are clicked, they are colored red or this action is undone

likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener("click", () => {
    if (likeBtn.classList.contains("active")) {
      likeBtn.classList.remove("active");
    } else {
      likeBtn.classList.add("active");
    }
  });
});

// Swiper

var swiper = new Swiper(".swiper", {
  grabCursor: true,
  speed: 400,
  mousewheel: {
    invert: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
// Slider version 1
$(".owl-carousel.version-1").owlCarousel({
  loop: true,
  margin: 15,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
    },
  },
});

// Slider version 2
$(".owl-carousel.version-2").owlCarousel({
  loop: true,
  margin: 15,
  center: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
    },
  },
});
