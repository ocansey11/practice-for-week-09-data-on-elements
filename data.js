// Your code here
// Pseudocode
//click/select on an option
//press add button
//get target value
//add/append target value to the ul's inner html
//pass their data-attributes into css style and give each a different colour

window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("add");
  const type = document.getElementById("type");
  const shoppingList = document.getElementById("shopping-list");

  function addItem() {
    const selectCollection = type.selectedOptions;
    const selectedType = selectCollection[0].innerText;

    const shoppingLi = document.createElement("li");
    shoppingLi.innerHTML = selectedType;
    shoppingLi.setAttribute("data-type", selectCollection[0].value);
    shoppingList.appendChild(shoppingLi);
  }

  button.addEventListener("click", addItem);
});
