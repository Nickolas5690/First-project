!function(){var e,t;e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),e.addEventListener("click",(function(){var a="true"===e.getAttribute("aria-epanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-epanded",!a),t.classList.toggle("is-hidden")})),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}()}();
//# sourceMappingURL=accessories-page.52f5dcb5.js.map