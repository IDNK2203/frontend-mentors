window.addEventListener("load" , ()=>{
  update_display()
})

// ---nav bindings
let nav = document.querySelector('.nav');
let menu__icon__open= document.querySelector('.menu-icon__open')
let menu__icon__close= document.querySelector('.menu-icon__close')
let menu__icons= document.querySelector('.menu-icons')
// ---form bindings
let shorten_url_form= document.querySelector('.shorten-url-form')
let form__input= document.querySelector('.shorten-url-form__input')
let report = document.querySelector('.report')
let report_list= document.querySelector('.report__list')

// ---variable
let linkdb = JSON.parse(localStorage.getItem("linkdb_local")) || [] ;

// MENU TOGGLE FUNCTIONALITY
menu__icons.addEventListener("click" , ()=>{
  menu__icon__close.classList.toggle("hidden")
  menu__icon__open.classList.toggle("hidden")
  nav.classList.toggle("hidden")
})

//  POST REQUEST (API)
function fetch_shorten_url(){
  let input_link = form__input.value
  let request_option_obj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url:input_link})
  };
  form__input.value = ""
  fetch("https://rel.ink/api/links/" , request_option_obj)
  .then((response)=>{
    if(!response.ok){
      throw new Error("you operation might have run into some problems")
    }
    else{
      return response.json()
    }
  })
  .then((data)=>{
    console.log(data)
    create_link_obj (input_link , data)
  })
  .catch((err)=>{
    console.log(err );
  }) 
}

// CREATE LINKDB ITEM TO BE STORED IN LOCAL STORAGE
function create_link_obj(input_link , data) {
  let {hashid} = data
  // create short link
  let short_link = `https://rel.ink/${hashid}`
  
  let link_item = {
    _input_link : input_link,
    _short_link : short_link
  }

  linkdb.unshift(link_item)
  linkdb.splice(3)
  localStorage.setItem( "linkdb_local" ,JSON.stringify(linkdb))
  update_display()
}

// CLEAR SCREEN
function update_display() {
  while (report_list.firstChild) {
    report_list.firstChild.remove()
  } 
  display_link_items()
}

// UPDATE SCREEN DISPLAY
function display_link_items(){
  linkdb.forEach((link_item)=>{
    report_list.innerHTML +=
    `<li class="report__item">
      <p class="report__input-url">
      <a href='${link_item._input_link}' class='report__input-link'>${link_item._input_link}</a>
      </p>
      <div class="report__output-panel">
        <p class="report__output-url">
        <a href='${link_item._short_link}' class='report__output-link'>${link_item._short_link}</a>
        </p>
        <button class="btn btn--primary copy-btn">copy</button>
      </div>
    </li>`
  })
}
// FORM VALIDATION
shorten_url_form.addEventListener("submit", (e) => {
  if(!form__input.validity.valid){
    check_input_validity(form__input);
  }
  else{
    fetch_shorten_url()
  }
  e.preventDefault();
});

let check_input_validity = (field) => {
  let validity_value = field.validity.valid;
  let err_msg = field.parentElement.children[1];
  if (field.validity.valueMissing) {
    err_msg.textContent = `Please add a ${field.name}`;
  }
  else if (field.validity.patternMismatch) {
    err_msg.textContent =
    "Please input a valid url";
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

form__input.addEventListener("input", (e) => {
  check_input_validity(e.target);
});

// COPY TO CLIPBOARD  
report_list.addEventListener("click" ,(e)=>{
  if(e.target.classList.contains("copy-btn")){
    let link = e.target.parentElement.parentElement.children[0].children[0];
    let link_text = link.textContent;
    copyToClipboard(link_text) 
    show_feedback(e.target)
  }
})

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

function show_feedback(btn){
  btn.textContent = "copied";
  btn.style.background = "#232127";
  setTimeout(() => {
    btn.textContent = "copy";
    btn.style.background ="  hsl(180, 66%, 49%)";
  }, 1000);
} 