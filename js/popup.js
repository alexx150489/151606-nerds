var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".close-btn"); 
var name = popup.querySelector("[name=name]"); 
var form = popup.querySelector("form"); 
var email = popup.querySelector("[name=email]"); 

link.addEventListener("click", function(event) {  
event.preventDefault();
popup.classList.add("modal-content-show");
name.focus();         
});

close.addEventListener("click", function(event) { 
event.preventDefault();
popup.classList.remove("modal-content-show"); 
popup.classList.remove("modal-error");         
});

form.addEventListener("submit", function(event) { 
if (!name.value || !email.value) { 
event.preventDefault();
popup.classList.remove("modal-error");
popup.offsetWidth = popup.offsetWidth; 
popup.classList.add("modal-error"); 
}
});

window.addEventListener("keydown", function(event) {  
if (event.keyCode === 27) {
popup.classList.remove("modal-content-show"); 
popup.classList.remove("modal-error"); 
}
});

