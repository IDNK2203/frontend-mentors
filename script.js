console.log("May the force be with you")

// form validation 

// hooks
let input = document.querySelector("input")
let form = document.querySelector("form")
let msg_box = document.querySelector(".error-msg")

console.log(input , msg_box ,form )
// Error function
function show_err(field){
    if(!field.validity.valid){
        msg_box.textContent =`Please provide a valid Email`
    }
    msg_box.style.display = "block"
}
// check Validity on input event and show error msg
input.addEventListener("input" , function(){
    if(!this.validity.valid){
        show_err(this)
    }
    else{
        msg_box.style.display = "none"
    }
    console.log("the force")
})
// check valiidity of form on submission
form.addEventListener("submit" , function(e){
    if(!input.validity.valid){
        show_err(input)
        e.preventDefault()
        console.log("the forceror")
    }
})