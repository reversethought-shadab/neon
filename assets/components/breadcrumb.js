class MyBreadcrumb extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <ul class="centermiddledown breadcrumbs">
  <div class="bgground">
    <li><a class="fas fa-home" href="#"></a></li>
    <li><a href="#">About</a></li>
    <li>Contact</li>
  </div>
</ul>
      `;
  }
}
customElements.define("my-breadcrumb", MyBreadcrumb);
