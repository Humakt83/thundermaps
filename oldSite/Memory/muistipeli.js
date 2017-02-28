function Pala(nimi, monta){
	this.nimi = nimi;
	this.monta = monta;
}
function valittu(id, nimi){
	var j = 0;
	var lapi = true;
	for(j = 0; j<tarkistus.length;j++){
		if(nimi == tarkistus[j]){ lapi = false;}
	}
	if(!(id==funid && valintoja < 2) && !loppu && lapi){
		if(valintoja == 2){
			document.getElementById(funid).src = "Tausta.png";
			document.getElementById(apuid).src = "Tausta.png";
			valintoja = 0;
			apuid = "1";
			funid = "2";
			valittuvanha = "3";
			valittuuusi = "4";
		}
		apuid = funid;
		funid = id;
		valintoja++;
		valittuvanha = valittuuusi;
		valittuuusi = nimi;
		nimi = nimi + ".png";
		document.getElementById(id).src= nimi;
		if(valittuvanha == valittuuusi){
			valintoja = 0;
			pisteet++;
			document.getElementById('piste').innerHTML = "Score: " + pisteet;
			tarkistus[tarkistusindex] = valittuuusi;
			tarkistusindex++;
			if(pisteet == totalpisteet){
				document.getElementById('piste').innerHTML = voitto;
				loppu = true;
			}
		}
		klikkauksia++;
		document.getElementById('klik').innerHTML = "Clicks: " +klikkauksia;
	}
}
function kokoa(paloja){
	palauta();
	var pelipalat = "<table><tr>";
	var kerta = 0;
	var tosipala = paloja/2;
	var valittuja = 1;
	var random;
	while (paloja > 0){
		random = Math.floor(Math.random() * palat.length);
		while (palat[random].monta===0){random = Math.floor(Math.random() * palat.length);}
		if(!(palat[random].monta==2 && valittuja>tosipala)){
			if(palat[random].monta==2){valittuja++;}
			pelipalat = pelipalat + "<td><img src='Tausta.png' id='"+palat[random].nimi + palat[random].monta +"' name='"+palat[random].nimi +"' onClick='valittu(this.id, this.name);'></td>";
			palat[random].monta = palat[random].monta - 1;
			paloja--;
			kerta++;
			if(kerta==5){
				pelipalat= pelipalat + "</tr><tr>";
				kerta=0;
			}
		}
	}
	pelipalat = pelipalat + "</tr></table>";
	document.getElementById('pelialue').innerHTML = pelipalat;
}
var loppu = false;
var voitto = "Victory!";
var valittuuusi = " ";
var valittuvanha = " ";
var valintoja = 0;
var palat = [];
var tarkistus = [];
var tarkistusindex = 0;
var funid = "";
var apuid = "";
var pisteet = 0;
var totalpisteet = 0;
var klikkauksia = 0;
palat[0] = new Pala("Arrow", 2);
palat[1] = new Pala("Axe", 2);
palat[2] = new Pala("Backpack", 2);
palat[3] = new Pala("Book", 2);
palat[4] = new Pala("Boots", 2);
palat[5] = new Pala("Bow", 2);
palat[6] = new Pala("Cards", 2);
palat[7] = new Pala("Chainmail", 2);
palat[8] = new Pala("Clover", 2);
palat[9] = new Pala("Crocodile", 2);
palat[10] = new Pala("Crossbow", 2);
palat[11] = new Pala("Gems", 2);
palat[12] = new Pala("Gold", 2);
palat[13] = new Pala("Horseshoe", 2);
palat[14] = new Pala("Medal", 2);
palat[15] = new Pala("Moose", 2);
palat[16] = new Pala("Mushrooms", 2);
palat[17] = new Pala("Oak", 2);
palat[18] = new Pala("Pinetree", 2);
palat[19] = new Pala("Platemail", 2);
palat[20] = new Pala("Ring", 2);
palat[21] = new Pala("Shield", 2);
palat[22] = new Pala("Staff", 2);
palat[23] = new Pala("Stone", 2);
palat[24] = new Pala("Sword", 2);
palat[25] = new Pala("Treasure", 2);
palat[26] = new Pala("Willow", 2);
function helppo(){
	totalpisteet = 5;
	kokoa(10);
}
function normaali(){
	totalpisteet = 10;
	kokoa(20);
}
function vaikea(){
	totalpisteet = 15;
	kokoa(30);
}
function palauta(){
	var i = 0;
	for(i=0; i<palat.length; i++){
		palat[i].monta = 2;
	}
	document.getElementById('klik').innerHTML = "Clicks: 0";
	document.getElementById('piste').innerHTML = "Score: 0";
	loppu = false;
	klikkauksia = 0;
	pisteet = 0;
	for(i=0; i<tarkistus.length; i++){
		tarkistus[i] = "";
	}
	tarkistusindex = 0;
	apuid = "i";
	funid = "p";
	valittuvanha = "o";
	valittuuusi = "u";
	valintoja = 0;
}