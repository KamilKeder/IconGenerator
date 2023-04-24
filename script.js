var input_info = document.querySelector("#input_info");
var input_checkbox = document.querySelector("#input_checkbox");
var input_rozmiar = document.querySelector("#input_rozmiar");
var button_generuj = document.querySelector("#button_generuj");
var button_pobierz = document.querySelector("#button_pobierz");
var div_generacja = document.querySelector("#div_generacja");
var img_wygenerowana = document.querySelector("#img_wygenerowana");

button_generuj.addEventListener("click",generuj);
button_pobierz.addEventListener("click",()=>{
	let miejsce = img_wygenerowana.getAttribute("src");

	saveAs(miejsce,"ikona.jpg");
})
function generuj(){
	var zmienna_lokalna = "";
    urlExists("https://img.icons8.com/"+zmienna_lokalna+input_info.value, function(exists) {
  if (exists) {
  	div_generacja.classList.remove("ukryty");
	if (input_checkbox.checked == true) {
		zmienna_lokalna = "color/"
	}
	if(input_rozmiar.value == ""){

		img_wygenerowana.src = "https://img.icons8.com/"+zmienna_lokalna+input_info.value
	}else{
		if(input_rozmiar.value > 300){
			img_wygenerowana.src = "https://img.icons8.com/"+zmienna_lokalna+"300/"+input_info.value;
		}else{
		img_wygenerowana.src = "https://img.icons8.com/"+zmienna_lokalna+input_rozmiar.value+"/"+input_info.value;
	}
	}

}else{
alert("Niestety nie ma takiej ikonu, spróbuj inaczej. Pamiętaj aby ją opisać w języku Angielskim.")
}})}
    function urlExists(url, callback) {
  fetch(url, { method: 'head' })
  .then(function(status) {
    callback(status.ok)
  });
}

