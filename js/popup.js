
var link = document.querySelector(".write-us");// Нахожу элемент с классом .write-us и присваиваю ему переменную link

var popup = document.querySelector(".modal-content");// Нахожу элемент с классом .modal-content и присваиваю ему переменную popup

var close = document.querySelector(".close-btn"); // Нахожу элемент с классом .close-btn и присваиваю ему переменную close

var name = popup.querySelector("[name=name]"); // Нахожу в переменной popup(.modal-content) элемент с атрибутом name со значением name

var form = popup.querySelector("form"); // Нахожу в переменной popup(.modal-content) элемент с названием form

var email = popup.querySelector("[name=email]"); // Нахожу в переменной popup(.modal-content) элемент с атрибутом name со значением email



link.addEventListener("click", function(event) { // на переменная link(.write-us) отлавливается событие click 
event.preventDefault();// Как я понял - устанавливается функция с названием event function(event), которая выполняет команду preventDefault (убирает событие по умолчинию как страховка)

popup.classList.add("modal-content-show");// переменной popup(.modal-content) при событии click добавляем класс modal-content-show, который делает display:block
name.focus();      // Делаем фокус на поле для имени   
});

close.addEventListener("click", function(event) { // на переменной close(.close-btn) отлавливается событие click
event.preventDefault();
popup.classList.remove("modal-content-show"); // переменной popup(.modal-content) при событии click убирает класс modal-content-show, который делал ее display:block
popup.classList.remove("modal-error");         // Убираем .modal-error анимацию при нажатии на крестик.
});

form.addEventListener("submit", function(event) { // на переменной form(элемент form) отлавливаем событие submit (кнопкой или нажатием на enter)
if (!name.value || !email.value) { // если в переменных name или(||) email нет ничего(без восклицательного знака было бы наоборот), то выводиться сообщение(alert).
event.preventDefault();
popup.classList.remove("modal-error");
popup.offsetWidth = popup.offsetWidth; // какойто хак, который позволяет проигрывать анимацию ошибки бесконечно
popup.classList.add("modal-error"); // переменной popup(.modal-content) при пустых формах добавляется .modal-error и запускает анимацию.
}
});

window.addEventListener("keydown", function(event) {  // Глобальный объект window(окно в котором DOM-дерево). Закрывает popup нажатием esc  (не работает в FireFoxe ! В Chrome работает)
if (event.keyCode === 27) {
popup.classList.remove("modal-content-show"); // переменной popup(.modal-content) при нажатии esc убирает класс modal-content-show, который делал ее display:block
popup.classList.remove("modal-error"); // Убираем .modal-error анимацию при esc
}
});
