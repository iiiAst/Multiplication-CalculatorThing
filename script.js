const addButton = document.getElementById("Add");
const theList = document.getElementById("liist");
const input = document.getElementById("input");
const imput = document.getElementById("imput");
const deleteall = document.getElementById("DestroyAll")

addButton.addEventListener("click", () => {
  const item = document.createElement("li");
  const firstBox = parseFloat(input.value);
  const secondBox = parseFloat(imput.value);
  const product = firstBox * secondBox;
  item.innerText = `${firstBox} * ${secondBox} = ${product}`;
  theList.appendChild(item);
  input.value = "";
  imput.value = "";


})

deleteall.addEventListener("click", ()=>{
theList.innerHTML=""
})