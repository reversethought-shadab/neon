class MyHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="home-section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="home-content">
                        <div class="bg-effect">
                            <img src="../assets/images/home/home-bg.gif" class="img-fluid bg-gif" alt="">
                            <img src="../assets/svg/home/1.png" class="img-fluid effect1 rotate-effect" alt="" style="transform: rotate(0deg);">
                            <img src="../assets/svg/home/2.svg" class="img-fluid effect2 rotate-effect" alt="" style="transform: rotate(0deg);">
                        </div>
                        <div>
                            <h1>USE MEGABOT TO <div class="title-effect">
                                    <img src="../assets/images/title-effect.png" alt=""><span>SIMPLIFY</span>
                                </div> YOUR LIFE</h1>
                            <p>
                                Megabot is a robust AI tool that uses artificial intelligence algorithms to generate
                                various kinds of content.
                                The tool was developed to support users with effortlessly generating high-quality
                                content, saving both energy and time while maintaining an uninterrupted level of
                                creativity and accuracy.

                            </p>
                            <a data-cursor="pointer" class="start-link"><i class="iconsax" data-icon="play-circle"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M8.73999 12.2299V10.5599C8.73999 8.47988 10.21 7.62988 12.01 8.66988L13.46 9.50988L14.91 10.3499C16.71 11.3899 16.71 13.0899 14.91 14.1299L13.46 14.9699L12.01 15.8099C10.21 16.8499 8.73999 15.9999 8.73999 13.9199V12.2299Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</i>Start free trial</a>
                        </div>
                    </div>
                    <div class="home-laptop px-md-0 px-3">
                        <div class="laptop-sec position-relative">
                            <div class="hand-sec">
                                <img src="../assets/images/home/hand.png" class="img-fluid left-hand" alt="hand">
                                <img src="../assets/images/home/hand.png" class="img-fluid right-hand" alt="hand">
                                <img src="../assets/images/home/finger.png" class="img-fluid left-finger" alt="hand">
                                <img src="../assets/images/home/finger.png" class="img-fluid right-finger" alt="hand">
                            </div>
                            <img src="../assets/images/home/laptop.png" class="img-fluid laptop-img" alt="laptop" style="transform: rotateX(60deg);">
                        </div>
                        <div class="home-info">
                            <ul class="info-list">
                                <li>Ask anything </li>
                                <li>Generate image</li>
                                <li>Translate anything</li>
                            </ul>
                            <ul class="star-rating">
                                <li><i class="ri-star-fill"></i></li>
                                <li><i class="ri-star-fill"></i></li>
                                <li><i class="ri-star-fill"></i></li>
                                <li><i class="ri-star-fill"></i></li>
                                <li><i class="ri-star-fill"></i></li>
                            </ul>
                            <h4>A technique to write
                                all of your material 10 times more quickly.</h4>
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
