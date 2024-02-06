// Header Component
class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="container-fluid page-section  footer pt-5 pb-0 wow fadeIn" data-wow-delay="0.1s" style=" visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
      <div class="container py-5">
          <div class="row g-5">
              <div class="col-md-6 col-lg-3">
                  <h5 class=" mb-4">Get In Touch</h5>
                  <p><i class="fa fa-map-marker-alt me-3"></i>location </p>
                  <p>  <a href="tel:911234556789" class="text-decoration-none text-dark"> <i class="fa fa-phone-alt me-3"></i>1234556789</a></p>
                 <p>   <a href="mailto:info@example.com" class="text-decoration-none text-dark"><i class="fa fa-envelope me-3"></i>info@example.com</a></p>
                  <div class="d-flex pt-2">
                      <a class="btn btn-outline-dark btn-social" href=""><i class="fab fa-twitter"></i></a>
                      <a class="btn btn-outline-dark btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                      <a class="btn btn-outline-dark btn-social" href=""><i class="fab fa-youtube"></i></a>
                      <a class="btn btn-outline-dark btn-social" href=""><i class="fab fa-instagram"></i></a>
                      <a class="btn btn-outline-dark btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                  </div>
              </div>
              <div class="col-md-6 col-lg-3">
                  <!-- <h5 class=" mb-4">Quick Link</h5> -->
                  <a class="btn btn-link" href="customize-neon.html">Customise</a>
                  <a class="btn btn-link" href="best-seller.html">Shop Collection</a>
                  <a class="btn btn-link" href="">Signs for Business</a>
                  <a class="btn btn-link" href="">FloRo</a>
                  <a class="btn btn-link" href="contact.html">Contact Us</a>
                  
                </div>
                <div class="col-md-6 col-lg-3">
                <a class="btn btn-link" href="">Track Order</a>
                 
                  <a class="btn btn-link" href="">Why Neon Attack</a>
                  <a class="btn btn-link" href="">Neon Wall</a>
                  <a class="btn btn-link" href="blog.html">Blog</a>
                  <a class="btn btn-link" href="">Become our affiliate  partner</a>
                  
              </div>
              <div class="col-md-6 col-lg-3">
                  <h5 class=" mb-4">Newsletter</h5>
                  <p>Join Our Vibe Tribe</p>
                  <p class="highlight">Free Shipping On All Orders!</p>
                  <div class="position-relative w-100 mt-3">
                      <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style="height: 48px;">
                      <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i class="fa fa-paper-plane text-primary fs-4"></i></button>
                  </div>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="copyright">
              <div class="row">
                  <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                      © <a class="border-bottom" href="#">Neon</a>, All Right Reserved. 
        Designed By <a class="border-bottom" href="#">Shadab Choudhary</a>
                  </div>
                  <div class="col-md-6 text-center text-md-end">
                      <div class="footer-menu">
                          <a href="terms-condition.html">Terms & Conditions</a>
                          <a href="privacy-policy.html">Privacy Policy</a>
                          <a href="refund-policy.html">Refund Policy</a>
                          <a href="shipping-policy.html">Shipping Policy</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </footer>
   `;
  }
}

customElements.define("my-footer", MyFooter);
