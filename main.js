import "./style.css";
const actions = document.querySelectorAll(".action");

const completeAction = (targetId) => {
  const target = document.querySelector(targetId);
  target.classList.remove("hidden");
  target.scrollIntoView({ behavior: "smooth" });
  import(`./styles/${targetId.slice(1, targetId.length)}.css`);
};

actions.forEach((action) => {
  action.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = e.target.href.split("/").at(-1);
    completeAction(targetId);
  });
});
