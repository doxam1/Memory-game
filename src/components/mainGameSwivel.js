const squares = document.querySelectorAll(".square");

squares.forEach((sq) => {
  sq.addEventListener("click", () => {
    const mainGameDiv = document.querySelector(".mainGame");

    mainGameDiv.classList.add("swivel");

    setTimeout(() => {
      mainGameDiv.classList.remove("swivel");
    }, 5000);
  });
});
