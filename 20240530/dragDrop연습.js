const box = document.querySelectorAll(".box");
const imgBox = document.querySelector(".imageBox");
boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    console.log(`over: ${e.currentTarget.classList.value}`);
    e.preventDefault();
    e.currentTarget.classList.add("hovered");
  });
  box.addEventListener("dragleave", (e) => {
    e.currentTarget.classList.add("hovered");
  });
  box.addEventListener("drop", (e) => {
    e.currentTarget.classList.add("hovered");
    e.currentTarget.classList.append(imgBox);
  });
});
