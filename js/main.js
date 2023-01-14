const toTop = document.querySelector(".scroll-to-top");

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const navLink = document.querySelectorAll("#main-nav-bar ul li");

navLink.forEach((item) => {
  item.addEventListener("click", function () {
    navLink.forEach((link) => link.classList.remove("current"));

    this.classList.add("current");
  });
});
