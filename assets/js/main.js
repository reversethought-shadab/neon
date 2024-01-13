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

// // == Close Working JavaScript
// if (document.readyState == "loading") {
//   document.addEventListener("DOMContentLoaded", ready);
// } else {
//   ready();
// }

// // == Making Function
// function ready() {
//   // Remove items from cart
//   var removeCartButtons = document.getElementsByClassName("cart-remove");
//   //   console.log(removeCartButtons);
//   for (var i = 0; i < removeCartButtons.length; i++) {
//     var button = removeCartButtons[i];
//     button.addEventListener("click", removeCartItem);
//   }
//   // == Quantity changes
//   var quantityInputs = document.getElementsByClassName("cart-quantity");
//   for (var i = 0; i < quantityInputs.length; i++) {
//     var input = quantityInputs[i];
//     input.addEventListener("change", quantityChanged);
//   }
//   // Add to cart
//   var addCart = document.getElementsByClassName("add-cart");
//   for (var i = 0; i < addCart.length; i++) {
//     var button = addCart[i];
//     button.addEventListener("click", addCartClicked);
//   }

//   // Buy button work
//   document
//     .getElementsByClassName("btn-buy")[0]
//     .addEventListener("click", buyButtonClicked);
// }

// // Buy button
// function buyButtonClicked() {
//   alert("Your order is placed");
//   var cartContent = document.getElementsByClassName("cart-content")[0];
//   while (cartContent.hasChildNodes()) {
//     cartContent.removeChild(cartContent.firstChild);
//   }
//   updatetotal();
// }

// // == Remove items from cart
// function removeCartItem(event) {
//   var buttonClicked = event.target;
//   buttonClicked.parentElement.remove();
//   updatetotal();
// }

// // == Quantity changes
// function quantityChanged(event) {
//   var input = event.target;
//   if (isNaN(input.value) || input.value <= 0) {
//     input.value = 1;
//   }
//   updatetotal();
// }

// // Add to cart
// function addCartClicked(event) {
//   var button = event.target;
//   var shopProducts = button.parentElement;
//   var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
//   var price = shopProducts.getElementsByClassName("price")[0].innerText;
//   var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
//   addProductToCart(title, price, productImg);
//   updatetotal();
// }
// function addProductToCart(title, price, productImg) {
//   var cartShopBox = document.createElement("div");
//   cartShopBox.classList.add("cart-box");
//   var cartItems = document.getElementsByClassName("cart-content")[0];
//   var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
//   for (var i = 0; i < cartItemsNames.length; i++) {
//     if (cartItemsNames[i].innerText == title) {
//       alert("You have already add this item to cart");
//       return;
//     }
//   }

//   var cartBoxContent = `
//   <img src="${productImg}" alt="image" class="cart-img">
// 		<div class="detail-box">
// 			<div class="cart-product-title">${title}</div>
// 			<div class="cart-price">${price}</div>
// 			<input class="cart-quantity" type="number" value="1">
// 		</div>
// 	<i class='bx bxs-trash-alt cart-remove'></i>
// `;

//   cartShopBox.innerHTML = cartBoxContent;
//   cartItems.append(cartShopBox);
//   cartShopBox
//     .getElementsByClassName("cart-remove")[0]
//     .addEventListener("click", removeCartItem);
//   cartShopBox
//     .getElementsByClassName("cart-quantity")[0]
//     .addEventListener("change", quantityChanged);
// }
// // == Uptade total
// function updatetotal() {
//   var cartContent = document.getElementsByClassName("cart-content")[0];
//   var cartBoxes = cartContent.getElementsByClassName("cart-box");
//   var total = 0;
//   for (var i = 0; i < cartBoxes.length; i++) {
//     var cartBox = cartBoxes[i];
//     var priceElement = cartBox.getElementsByClassName("cart-price")[0];
//     var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
//     var price = parseFloat(priceElement.innerText.replace("$", ""));
//     var quantity = quantityElement.value;
//     total = total + price * quantity;
//   }
//   // if price contain some cents value
//   total = Math.round(total * 100) / 100;

//   document.getElementsByClassName("total-price")[0].innerText = "$" + total;
// }
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
