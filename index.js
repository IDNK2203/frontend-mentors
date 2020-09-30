// hooks
let trial_form = document.querySelector(".trial-form");
let trial_form_input = Array.from(
  document.querySelectorAll(".trial-form__input")
);
let err_msg = Array.from(document.querySelectorAll(".trial-form__err-msg"));

trial_form.addEventListener("submit", (e) => {
  trial_form_input.forEach((input) => {
      if(!input.validity.valid){
        e.preventDefault();
        check_input_validity(input);
      }
  });
});

let check_input_validity = (field) => {
  let validity_value = field.validity.valid;
  let err_msg = field.parentElement.children[2];
  if (field.validity.valueMissing) {
    err_msg.textContent = `The field ${field.name} hasn't been filled yet`;
  } else if (field.validity.tooShort) {
    err_msg.textContent = `The feild ${field.name} should have at least ${field.minLength} characters; you have entered ${field.value.length}`;
  } else if (field.validity.typeMismatch) {
    err_msg.textContent = `The value entered in this field needs to be a ${field.type}`;
  } else if (field.validity.patternMismatch) {
    err_msg.textContent =
      "the set password value is not consistent with check password value";
  }
  
  function display_err(value){
    if (!value) {
      err_msg.style.display = "block";
    } 
    else{
      err_msg.style.display = "none"
    }
  }
  display_err(validity_value)
};

trial_form_input.forEach((input) => {
  input.addEventListener("input", () => {
    check_input_validity(input);
  });
});
// put novaldate attribute on for tag.
// select requierd DOM elements.
// prevent default form submission

// create function check validity on input
//  take in input as an argument
// if check if input pass the various validation check and display each error msg respectively

// loop over input and listen for the input event
// and call the check validity function on the input
// if input validity equals false
// prevent form submission and display error msg
// return
// else true  submit form data.

// check that validation state of inputs
// create function that loops over inputs and check validity
