!function(){var t,e;t=document.querySelector("[data-menu-button]"),e=document.querySelector("[data-menu]"),t.addEventListener("click",(function(){var n="true"===t.getAttribute("aria-epanded")||!1;t.classList.toggle("is-open"),t.setAttribute("aria-epanded",!n),e.classList.toggle("is-hidden")})),function(){var t={openContactsBtn:document.querySelector("[data-contacts-open]"),closeContactsBtn:document.querySelector("[data-contacts-close]"),contacts:document.querySelector("[data-contacts]")};function e(){t.contacts.classList.toggle("hidden")}t.openContactsBtn.addEventListener("click",e),t.closeContactsBtn.addEventListener("click",e)}(),function(){var t={openBuyBtn:document.querySelector("[data-buy-open]"),closeBuyBtn:document.querySelector("[data-buy-close]"),buy:document.querySelector("[data-buy]")};function e(){t.buy.classList.toggle("is-hid")}t.openBuyBtn.addEventListener("click",e),t.closeBuyBtn.addEventListener("click",e)}(),function(){var t={openAddBtn:document.querySelector("[data-add-open]"),closeAddBtn:document.querySelector("[data-add-close]"),add:document.querySelector("[data-add]")};function e(){t.add.classList.toggle("is-hidd")}t.openAddBtn.addEventListener("click",e),t.closeAddBtn.addEventListener("click",e)}()}();
//# sourceMappingURL=accessories-page.bb4bd1e0.js.map
