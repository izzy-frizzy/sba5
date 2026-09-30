let title = document.getElementById("title");
let field = document.getElementById("field");

let titleError = document.getElementById("titleError");
let inputError = document.getElementById("inputError");

let form = document.getElementById("personalBlog");
let posts = document.getElementById("blogPosts");

let postThread = [];

title.value = localStorage.getItem("title") || "";
field.value = localStorage.getItem("input") || "";

form = document.addEventListener("submit", function (event) {
  event.preventDefault();
  let titleInput = title.value;
  let fieldInput = field.value;

  let blog = {
    titleInput,
    fieldInput,
  };

  if (titleInput === "" || fieldInput === "") {
    alert("please write in the missing input fields");
    title.value = "";
    field.value = "";
    return;
  }

  postThread.push(blog);
  showBlog();

  title.value = "";
  field.value = "";
});

title.addEventListener("input", function () {
  localStorage.setItem("title", title.value);
  if (!title.validity.valid) {
    if (title.validity.valueMissing) {
      titleError.textContent = "A Title is Required";
    }
  } else {
    titleError.textContent = "";
  }
});

field.addEventListener("input", function () {
  localStorage.setItem("input", field.value);
  if (!field.validity.valid) {
    if (field.validity.valueMissing) {
      inputError.textContent = "Input is Required";
    }
  } else {
    inputError.textContent = "";
  }
});

function showBlog(){
    posts.innerHTML = ""

    for(let i = 0; i < postThread.length; i++){
        let blogs = document.createElement("li");

        blogs.innerText = `${postThread[i].titleInput} \n \n ${postThread[i].fieldInput}` 
         posts.appendChild(blogs)

    }

}