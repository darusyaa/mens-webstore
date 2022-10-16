// mobile dropdown
//* Цикл через все кнопки выпадающего списка для переключения между скрытием и отображением его выпадающего содержимого */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var item = document.getElementsByClassName("dropdown-item");
dropdown.addEventListener("click", function(event) {
  event.preventDefault();
  item.classList.toggle("active");
});

// const children = document.querySelector(".works__hover");
 
// children.addEventListener("click", function(e) {
//   e.preventDefault();
//   this.closest('.works__row-image').classList.toggle('active');
// });