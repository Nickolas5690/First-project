(()=>{const t=document.querySelector("[data-menu-button]"),e=document.querySelector("[data-menu]");t.addEventListener("click",(()=>{const n="true"===t.getAttribute("aria-epanded")||!1;t.classList.toggle("is-open"),t.setAttribute("aria-epanded",!n),e.classList.toggle("is-hidden")}))})(),(()=>{const t={openContactsBtn:document.querySelector("[data-contacts-open]"),closeContactsBtn:document.querySelector("[data-contacts-close]"),contacts:document.querySelector("[data-contacts]")};function e(){t.contacts.classList.toggle("hidden")}t.openContactsBtn.addEventListener("click",e),t.closeContactsBtn.addEventListener("click",e)})(),(()=>{const t={openBuyBtn:document.querySelector("[data-buy-open]"),closeBuyBtn:document.querySelector("[data-buy-close]"),buy:document.querySelector("[data-buy]")};function e(){t.buy.classList.toggle("is-hid")}t.openBuyBtn.addEventListener("click",e),t.closeBuyBtn.addEventListener("click",e)})();
//# sourceMappingURL=accessories-page.df5509ae.js.map