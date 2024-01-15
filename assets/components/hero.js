class MyHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="home-section">
    
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="home-content">
            <div class="bg-effect">
              <img
                src="assets/images/home-bg.gif"
                class="img-fluid bg-gif"
                alt
              />
              <img
                src="assets/images/svg/1.png"
                class="img-fluid effect1 rotate-effect"
                alt
                style="transform: rotate(0deg)"
              />
              <img
                src="assets/images/svg/home-svg.svg"
                class="img-fluid effect2 rotate-effect"
                alt
                style="transform: rotate(0deg)"
              />
            </div>
            <div>
              <h1 class="india">
                India's No.1
                <div class="title-effect india">
                  <img src="assets/images/svg/title-effect.png" class="india" alt /><span
                    style="font-family: Golden_Hopes"
                    >World Class</span
                  >
                </div>
                Neon Lights
              </h1>

              <a data-cursor="pointer" class="start-link mt-3"
                ><i class="iconsax" data-icon="play-circle"
                  ><svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8.73999 12.2299V10.5599C8.73999 8.47988 10.21 7.62988 12.01 8.66988L13.46 9.50988L14.91 10.3499C16.71 11.3899 16.71 13.0899 14.91 14.1299L13.46 14.9699L12.01 15.8099C10.21 16.8499 8.73999 15.9999 8.73999 13.9199V12.2299Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg> </i
                >Start free trial</a
              >
            </div>
          </div>
          <div class="home-laptop px-md-0 px-3">
            <div class="laptop-sec position-relative">
              <div class="hand-sec">
                <img
                  src="assets/images/svg/hand.png"
                  class="img-fluid left-hand"
                  alt="hand"
                />
                <img
                  src="assets/images/svg/hand.png"
                  class="img-fluid right-hand"
                  alt="hand"
                />
                <img
                  src="assets/images/svg/finger.png"
                  class="img-fluid left-finger"
                  alt="hand"
                />
                <img
                  src="assets/images/svg/finger.png"
                  class="img-fluid right-finger"
                  alt="hand"
                />
              </div>
              <img
                src="assets/images/laptop.png"
                class="img-fluid laptop-img"
                alt="laptop"
                style="transform: rotateX(60deg)"
              />
            </div>
            <div class="home-info">
              <ul class="info-list list-unstyled">
              <div class="linkWrap text-center">
              <a href="customize-neon.html" class="cta style-9">
                <span class="text-dark">Customize Neon</span>
              </a>
            </div>
              </ul>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        `;
  }
}
customElements.define("my-hero", MyHero);
