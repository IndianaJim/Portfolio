const portfolioContainer = document.querySelector(".projects");

portfolioContainer.addEventListener("click", e => {
  //   console.log(e);

  const modalToggle = e.target.closest(".portfolio-link");

  if (!modalToggle) return;

  const modal = modalToggle.nextElementSibling;
  const closeButton = modal.querySelector(".modal-close");

  modal.classList.add("is-open");

  closeButton.addEventListener("click", _ => {
    modal.classList.remove("is-open");
  });
});
