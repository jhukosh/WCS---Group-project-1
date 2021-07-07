const map = document.querySelector("#map");
let paths = map.querySelectorAll(".map_img a");
let links = map.querySelectorAll(".list_map ul li a");
let country = "";

links.forEach(function (link){
    link.addEventListener("click", function(){
        if(country!= ""){
            country.style.fill = "#75a3a3";
            let identifier = link.getAttribute("title");
            console.log(identifier);
            let countryUpdate = document.getElementById(identifier);
            countryUpdate.style.fill = "#3100a5";
            country = countryUpdate;
        } else {
            let identifier = link.getAttribute("title");
            let countryUpdate = document.getElementById(identifier);
            countryUpdate.style.fill = "#3100a5";
            country = countryUpdate;
        }
    })
})


// MODAL JAPAN //

var modalJapan = document.getElementById('myModalJapan');

// Get the button that opens the modal
var btnJapan = document.getElementById("myBtnJapan");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnJapan.onclick = function() {
  modalJapan.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalJapan.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalJapan) {
    modalJapan.style.display = "none";
  }
}

// MODAL MEXICO //

var modalMexico = document.getElementById('myModalMexico');

// Get the button that opens the modal
var btnMexico = document.getElementById("myBtnMexico");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btnMexico.onclick = function() {
  modalMexico.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalMexico.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalMexico) {
    modalMexico.style.display = "none";
  }
}

