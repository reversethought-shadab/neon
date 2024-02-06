// Header Component
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
    <section class="w-100">
    <div class="container-fluid w-100 gx-0">

      <div class="announcement-bar">
        <p class="announcement-message text-center">
          🎆 New Year 2024 Sale! Flat 24% OFF at Checkout
        </p>
      </div>
    </div>
  </section>
  <div class="container-fluid topbar bg-dark d-none d-lg-block">
    <div class="container px-0">
        <div class="topbar-top d-flex justify-content-center  flex-lg-wrap">
            <div class="top-info flex-grow-0 break">
                <span class="rounded-circle btn-sm-square  me-2">
                    <img src="assets/images/svg/warr.svg" alt="">
                </span>
                <div class=" border-white d-flex align-items-center">
                    <p class="mb-0 text-white fs-6 fw-normal">2 Year Warranty</p>
                </div>
               
            </div>
            <div class="top-info flex-grow-0  break">
                <span class="rounded-circle btn-sm-square  me-2">
                    <img src="assets/images/svg/happy.svg" alt="">
                </span>
                <div class=" border-white d-flex align-items-center">
                    <p class="mb-0 text-white fs-6 fw-normal">12000+ Happy Customers</p>
                </div>
               
            </div>
            <div class="top-info flex-grow-0 mx-3 break-2 ">
                <span class="rounded-circle btn-sm-square  me-2">
                    <img src="assets/images/svg/delivery.svg" alt="">
                </span>
                <div class="  border-white d-flex align-items-center">
                    <p class="mb-0 text-white fs-6 fw-normal">100% Timely Delivery</p>
                </div>
               
            </div>
        </div>
    </div>
</div>
<div class="container-fluid bg-light">
  <div class="container px-0">
      <nav class="navbar navbar-light navbar-expand-xl">
          <a href="index.html" class="navbar-brand magnet">
              <h1 class="text-primary display-4">Neon</h1>
          </a>
          <button class="navbar-toggler navbar__toggle  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-expanded="false">
          <div class="navbar__toggle__hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
          </button>
          <div class="navbar-collapse bg-light py-3 collapse" id="navbarCollapse" >
              <div class="navbar-nav mx-auto border-top">
                <div class="nav-item dropdown ">
                    <a href="#" class="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Customize</a>
                    <div class="dropdown-menu m-0  site-nav-dropdown ">
                      <div class="site-nav__dropdown site-nav__dropdown--left custom_menu_list">
                        <ul>
                          <li>
                            <a href="customize-neon.html" class="site-nav__link site-nav__child-link">
                              <img class="menu_image_sub lazyloaded"
                                data-src="assets/images/stories/1.jpg"
                                loading="lazy"
                                src="assets/images/stories/1.jpg">
                              <span class="site-nav__label">Neon Sign<span class="menu_image_arrow_right"><i
                                    class="fas fa-chevron-circle-right"></i></span>
                            </a>
                          </li>
                          <li>
                            <a href="customize-neon.html" class="site-nav__link site-nav__child-link">
                              <img class="menu_image_sub lazyloaded"
                                data-src="assets/images/stories/1.jpg"
                                loading="lazy"
                                src="assets/images/stories/1.jpg">
                              <span class="site-nav__label">Neon Sign<span class="menu_image_arrow_right"><i
                                    class="fas fa-chevron-circle-right"></i></span>
                            </a>
                          </li>
                        
                        </ul>
                       
                      
                      </div>
                    </div>
                </div>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle  " data-bs-toggle="dropdown">Shop Neon</a>
                    <div class="dropdown-menu m-0  site-nav-dropdown ">
                      <div class="site-nav__dropdown site-nav__dropdown--left custom_menu_list">
                        <ul>
                          <li>
                            <a href="best-seller.html" class="site-nav__link site-nav__child-link">
                              <img class="menu_image_sub lazyloaded"
                                data-src="assets/images/stories/1.jpg"
                                loading="lazy"
                                src="assets/images/stories/1.jpg">
                              <span class="site-nav__label">Best seller<span class="menu_image_arrow_right"><i
                                    class="fas fa-chevron-circle-right"></i></span>
                            </a>
                          </li>
                          <li>
                            <a href="customize-neon.html" class="site-nav__link site-nav__child-link">
                              <img class="menu_image_sub lazyloaded"
                                data-src="assets/images/stories/1.jpg"
                                loading="lazy"
                                src="assets/images/stories/1.jpg">
                              <span class="site-nav__label">For business<span class="menu_image_arrow_right"><i
                                    class="fas fa-chevron-circle-right"></i></span>
                            </a>
                          </li>
                          <li>
                            <a href="customize-neon.html"
                              class="site-nav__link site-nav__child-link site-nav__link--last">
                              <img class="menu_image_sub lazyloaded"
                                data-src="assets/images/stories/2.jpg"
                                loading="lazy"
                                src="assets/images/stories/2.jpg">
                              <span class="site-nav__label">For event <span class="menu_image_arrow_right"><i
                                    class="fas fa-chevron-circle-right"></i></span>
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="customize-neon.html" class="site-nav__link site-nav__child-link">
                              <img class="menu_image_sub lazyloaded"
                                data-src="assets/images/stories/1.jpg"
                                loading="lazy"
                                src="assets/images/stories/1.jpg">
                              <span class="site-nav__label">Under ₹4000 <span class="menu_image_arrow_right"><i
                                    class="fas fa-chevron-circle-right"></i></span>
                            </a>
                          </li>
                          <li>
                            <a href="customize-neon.html" class="site-nav__link site-nav__child-link">
                              <img class="menu_image_sub lazyloaded"
                                data-src="assets/images/stories/1.jpg"
                                loading="lazy"
                                src="assets/images/stories/1.jpg">
                              <span class="site-nav__label">For Kids <span class="menu_image_arrow_right"><i
                                    class="fas fa-chevron-circle-right"></i></span>
                            </a>
                          </li>
                          <li>
                            <a href="customize-neon.html"
                              class="site-nav__link site-nav__child-link site-nav__link--last">
                              <img class="menu_image_sub lazyloaded"
                                data-src="assets/images/stories/2.jpg"
                                loading="lazy"
                                src="assets/images/stories/2.jpg">
                              <span class="site-nav__label">FloRo Sign <span class="menu_image_arrow_right"><i
                                    class="fas fa-chevron-circle-right"></i></span>
                            </a>
                          </li>
                        </ul>
                      
                      </div>
                    </div>
                </div>
                 
                  <a href="head-light.html" class="nav-item nav-link">Head Light</a>
                  <a href="business-neon-logo.html" class="nav-item nav-link">Business Neon Logo</a>
                  <a href="why-neon.html" class="nav-item nav-link">Why Attack</a>
              </div>
              <div class="d-flex align-items-center flex-nowrap pt-xl-0">
                  <button class="btn-search btn btn-primary btn-primary-outline-0  icon-circle" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fas fa-search "></i></button>
                  <a href="cart.html" class="btn btn-cart btn-primary-outline-0 icon-circle rounded-pill py-3 px-4 ms-4" id="cart-icon"><i class="fa-solid fa-cart-shopping"></i></a>
                  <a href="login.html" class="btn btn-user btn-primary-outline-0 icon-circle rounded-pill py-3 px-4 ms-4"><i class="fa-solid fa-user"></i></a>
                  <div class="cart">
                    <h2 class="cart-title">Your Cart</h2>
                    <div class="cart-content">
                    </div>
                    <!-- total -->
                    <div class="total">
                      <div class="total-title">Total</div>
                      <div class="total-price">$0</div>
                    </div>
                    <!-- buy button -->
                    <button class="btn-buy" type="button">Checkout</button>
                    <!-- cart close -->
                    <span id="close-cart">x</span>
                    <!-- <i id="close-cart" class='fa fa-x'></i> -->
                    <!-- <button id="close-cart" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                  </div>
              </div>
          </div>
      </nav>
  </div>
</div>

<div class="modal " id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
      <div class="modal-content rounded-0">
          <div class="modal-header">
              <h4 class="modal-title mb-0" id="exampleModalLabel">Search by keyword</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex align-items-center">
              <div class="input-group w-75 mx-auto d-flex">
                  <input type="search" class="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1">
                  <span id="search-icon-1" class="input-group-text p-3"><i class="fa fa-search"></i></span>
              </div>
          </div>
      </div>
  </div>
</div>
</header>
 `;
  }
}

customElements.define("my-header", MyHeader);

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    link.classList.remove("active"); // Remove 'active' class from all links
    if (link.href === window.location.href) {
      link.classList.add("active"); // Add 'active' class to the link that matches the current URL
    }
  });
});
