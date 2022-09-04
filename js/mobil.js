// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//   const mobileMenuRef = document.querySelector("[data-menu]");

//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//     menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttribute("aria-expanded", !expanded);
    
//     document.body.classList.toggle("modal-open");
//     mobileMenuRef.classList.toggle("is-open");
//   });
// })();

(() => {
  const refs = {
    openMobilBtn: document.querySelector("[data-mobil-open]"),
    closeMobilBtn: document.querySelector("[data-mobil-close]"),
    mobil: document.querySelector("[data-mobil]"),
    body: document.querySelector("body"),
  };

  refs.openMobilBtn.addEventListener("click", toggleMobil);
  refs.closeMobilBtn.addEventListener("click", toggleMobil);

  function toggleMobil() {
    refs.mobil.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();