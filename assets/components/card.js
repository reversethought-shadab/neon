class MyCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="card-section">
      <div class="container-fluid">
        <div class="row ">
          <div class="col-md-4 col-lg-3 col-sm-12 ">
            <div class="effect">
              <div class="effect-img">
                <img src="assets/images/stories/1.jpg" alt />
                <video src="assets/images/stories/video.mp4" autoplay loop muted </video>
                </div>
                <div class="image-title"> <a href="#">
                  Customize Neon 
                </a>  <i class="fa fa-arrow-right"></i></div>
            </div>
          </div>
          <div class="col-md-4 col-lg-3 col-sm-12 ">
            <div class="effect">
              <div class="effect-img">
                <img src="assets/images/stories/3.jpg" alt />
                <video src="assets/images/stories/video2.mp4" autoplay loop muted </video>
                </div>
                <div class="image-title"> <a href="#">
               Customize FloRo
                </a> <i class="fa fa-arrow-right"></i></div>
            </div>
          </div>
          <div class="col-md-4 col-lg-3 col-sm-12 ">
            <div class="effect">
              <div class="effect-img">
                <img src="assets/images/stories/5.jpg" alt />
                <video src="assets/images/stories/video3.mp4" autoplay loop muted </video>
                </div>
                <div class="image-title"> <a href="#">
                  Business Logo
                </a> <i class="fa fa-arrow-right"></i></div>
            </div>
          </div>
          <div class="col-md-4 col-lg-3 col-sm-12 ">
            <div class="effect">
              <div class="effect-img">
                <img src="assets/images/stories/6.jpg" alt />
                <video src="assets/images/stories/video4.mp4" autoplay loop muted </video>
                </div>
                <div class="image-title"> <a href="#">
                  Best Seller
                </a> <i class="fa fa-arrow-right"></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>
      `;
  }
}
customElements.define("my-card", MyCard);
