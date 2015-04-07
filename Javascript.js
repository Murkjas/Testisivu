function Henkilo(etunimi, sukunimi, ika) {
	this.etunimi = etunimi;
	this.sukunimi = sukunimi;
	this.ika = ika;
}

var array = [];


function tyhjenna() {
	if (array.length > 0){
		array = [];
		listadiv.innerHTML = "";
	}
}


function lisaa() {
var z = document.forms["form"]["enimi"].value;
var c = document.forms["form"]["snimi"].value;
var v = document.forms["form"]["ika"].value;
	if (z == null || z == "") {
		alert("Syötä etunimi");
	}
	else if(c == null || c == ""){
		alert("Syötä sukunimi");
	}
	else if(v == null || v == ""){
		alert("Syötä ikä");
	}
	else if(isNaN(v)) {
		alert("Syötä ikä numeroina");
	}
	else {
		listadiv.innerHTML = "";
		var fenimi = document.getElementById("enimi").value;
		var fsnimi = document.getElementById("snimi").value;
		var fika = document.getElementById("ika").value;
		var uusihenkilo = new Henkilo(fenimi, fsnimi, fika);
		array.push(uusihenkilo);
			for(var j = 0; j < array.length;j++){
				var valittu = array[j];
				listadiv.innerHTML += "<h3>" + valittu.etunimi + " " + valittu.sukunimi + "</h3>"
					+ "<div>" + "<p>" + valittu.etunimi + " on " + valittu.ika
					+ " vuotta vanha." + "</p>" + "<hr>" + "</div>";
			}
		document.getElementById("formi").reset();
	}
}

// Drag-and-drop
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
	document.getElementById("pallo").src="oikein.jpg";
	document.getElementById("dndhead").innerHTML = "Oikein!";
}

// reset DnD
function reload(){
location.reload();
} 
