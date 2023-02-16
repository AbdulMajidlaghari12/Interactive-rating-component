const ratingElemets = document.querySelectorAll(".inline-block");
const submitBtn = document.querySelector("#SubmitBtn");
const initialScreen = document.querySelector("#initial-screen");
const thankyou = document.querySelector("#thankYouScreen");
let ratigValue;



// remving if already selected

function removeclass(item) {
  item.forEach((item) => {
    if (item.classList.contains("selected")) {
      item.classList.remove("selected");
    }
  });
}
// rating elements event handler 

ratingElemets.forEach((elements) =>
{
  elements.addEventListener("click", (e) =>
  {
    removeclass(ratingElemets);
    const target = e.target;
    ratigValue = Number(target.textContent);
    target.classList.add("selected")
    
  });
})


//Submit event handler 

submitBtn.addEventListener("click", () =>
{
  const star = document.getElementById("star")
  star.innerText = `You selected ${ratigValue}  out 5`;
  if (ratigValue === undefined) {
console.log("Please Select Rating First")
  } else {
    initialScreen.classList.add("hidden");
    thankyou.classList.remove("hidden");
  }
})
