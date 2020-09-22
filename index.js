
let pricing_toggler = document.querySelector("#pricing_toggler")
let annually = Array.from(document.querySelectorAll(".annually"))
let monthly = Array.from(document.querySelectorAll(".monthly"))

pricing_toggler.addEventListener("change" , (e)=>{
  annually.forEach((annual)=>{
    annual.classList.toggle("hidden")
  })
  monthly.forEach((month)=>{
    month.classList.toggle("hidden")
  })
})
