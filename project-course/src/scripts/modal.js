document.addEventListener("DOMContentLoaded", function () {
    const openModalButtons = document.querySelectorAll(".open-modal");
    const closeModalButtons = document.querySelectorAll(".close-modal");

    openModalButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const modalId = this.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            modal.classList.add("show");
        });
    });

    closeModalButtons.forEach((button) => {
        button.addEventListener("click", function () {
            this.closest(".modal").classList.remove("show");
        });
    });

    document.querySelectorAll(".modal").forEach((modal) => {
        modal.addEventListener("click", function (e) {
            if (e.target === this) {
                this.classList.remove("show");
            }
        });
    });
});
