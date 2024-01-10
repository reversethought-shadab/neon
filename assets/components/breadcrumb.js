class MyBreadcrumb extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="breadcrumb-section">
      <div class="container">
          <div class="row">
              <div class="col-lg-6">
                  <div class="breadcrumb-content">
                      <div>
                          <h2><img src="assets/images/svg/breadcrumb-title.png" class="img-fluid" alt="title-effect"> <span><a href="index.html" class="text-decoration-none b-link">Home |</a></span> Customize Neon
                          </h2>
                          <p><i class="ri-subtract-line"></i>Email us with any questions, we would be happy to answer
                              your question. </p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 d-lg-inline-block d-none">
                  <div class="breadcrumb-img">
                      <img src="assets/images/josh-redd-Q9S0w7Bhx3A-unsplash-removebg-preview.png" class="img-fluid" alt="service">
                  </div>
              </div>
          </div>
      </div>
  </section>
      `;
  }
}
customElements.define("my-breadcrumb", MyBreadcrumb);
