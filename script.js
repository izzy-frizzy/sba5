let title = document.getElementById("title");
let field = document.getElementById("field");

let titleError = document.getElementById("titleError");
let inputError = document.getElementById("inputError")

let form = document.getElementById("personalBlog");

form = document.addEventListener("submit", function (event) {
  event.preventDefault();
});

title.addEventListener("input", function () {
  localStorage.setItem("title", title.value);
  if(!title.validity.valid){
    if(title.validity.valueMissing){
        titleError.textContent = "A Title is Required"
    }
  }
});

field.addEventListener("input", function(){
    localStorage.setItem("input",field.value)
    if(!field.validity.valid){
    if(field.validity.valueMissing){
        inputError.textContent = "input is Required"
    }
  }

})