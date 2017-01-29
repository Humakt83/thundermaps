/*Programmed and designed by Risto Salama*/

function tarkista(){
	var i = 0;
	pelaajaa = document.getElementById('nimia').value;
	pelaajab = document.getElementById('nimib').value;
	pelaajac = document.getElementById('nimic').value;
	pelaajad = document.getElementById('nimid').value;
	if(pelaajaa != ""){pelaajia++; pelaaja1 = true; vuorotaulu[i] = pelaajaa; i++;}
	if(pelaajab != ""){pelaajia++; pelaaja2 = true; vuorotaulu[i] = pelaajab; i++;}
	if(pelaajac != ""){pelaajia++; pelaaja3 = true; vuorotaulu[i] = pelaajac; i++;}
	if(pelaajad != ""){pelaajia++; pelaaja4 = true; vuorotaulu[i] = pelaajad; i++;}
	if(pelaajia < 2){ 
		document.getElementById('tarkka').innerHTML = "In multiplayer, there must be at least two players";
	}else{
	var sivunteko="<table class='vaikeustaso'><tr><th colspan='5'>SELECT NEW GAME</th></tr>";
	sivunteko = sivunteko + "<tr><td class='vaikeus' width='113px'><img class='vaikea' src='Easy.png' alt='Start easy game' onMouseUp='document.helpponappi.src=\"Easy.png\"; helppo();' onMouseDown='document.helpponappi.src=\"Easypain.png\";' onMouseOut='document.helpponappi.src=\"Easy.png\";' name='helpponappi'></td>";
	sivunteko = sivunteko + "<td class='vaikeus' width='142px'><img class='vaikea' src='Normal.png' alt='Start normal game' onMouseUp='document.norminappi.src=\"Normal.png\"; normaali();' onMouseDown='document.norminappi.src=\"Normalpain.png\";' onMouseOut='document.norminappi.src=\"Normal.png\";' name='norminappi'></td>";
	sivunteko = sivunteko + "<td class='vaikeus' width='108px'><img class='vaikea' src='Hard.png' alt='Start hard game' onMouseUp='document.vaikeanappi.src=\"Hard.png\"; vaikea();' onMouseDown='document.vaikeanappi.src=\"Hardpain.png\";' onMouseOut='document.vaikeanappi.src=\"Hard.png\";' name='vaikeanappi'></td></tr></table>";
	sivunteko = sivunteko + "<table class='pelaajat'><tr>";
	if(pelaaja1){
		sivunteko = sivunteko +"<td class='pelaaja1'>"+pelaajaa+"<div id='pelaaja1'>Score: 0</div></td>";
	}
	if(pelaaja2){
		sivunteko = sivunteko +"<td class='pelaaja2'>"+pelaajab+"<div id='pelaaja2'>Score: 0</div></td>";
	}
	if(pelaaja3){
		sivunteko = sivunteko +"<td class='pelaaja3'>"+pelaajac+"<div id='pelaaja3'>Score: 0</div></td>";
	}
	if(pelaaja4){
		sivunteko = sivunteko +"<td class='pelaaja4'>"+pelaajad+"<div id='pelaaja4'>Score: 0</div></td>";
	}
	sivunteko = sivunteko + "</tr></table>";
	sivunteko = sivunteko + "<div id='pelialue' align='center' class='pelialue'></div>";
	sivunteko = sivunteko + "<div id='vuoro' align='center' class='vuoro'>Turntable.</div>";
	document.getElementById('sivu').innerHTML = sivunteko;
	}
}
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
			if(vuoro == 0){
					if(pelaaja1){pelaaja1pisteet++; document.getElementById('pelaaja1').innerHTML = "Score: " + pelaaja1pisteet;
					}else{
						if(pelaaja2){pelaaja2pisteet++;document.getElementById('pelaaja2').innerHTML = "Score: " + pelaaja2pisteet;
						}else{ pelaaja3pisteet++; document.getElementById('pelaaja3').innerHTML = "Score: " + pelaaja3pisteet;}
					}	
			}
			if(vuoro == 1){
					if(pelaaja2){pelaaja2pisteet++; document.getElementById('pelaaja2').innerHTML = "Score: " + pelaaja2pisteet;
					}else{
						if(pelaaja3){pelaaja3pisteet++;document.getElementById('pelaaja3').innerHTML = "Score: " + pelaaja3pisteet;
						}else{ pelaaja4pisteet++; document.getElementById('pelaaja4').innerHTML = "Score: " + pelaaja4pisteet;}
					}
			}
			if(vuoro == 2){
					if(pelaaja3){pelaaja3pisteet++; document.getElementById('pelaaja3').innerHTML = "Score: " + pelaaja3pisteet;
					}else{ pelaaja4pisteet++; document.getElementById('pelaaja4').innerHTML = "Score: " + pelaaja4pisteet;}
			}
			if(vuoro == 3){pelaaja4pisteet++; document.getElementById('pelaaja4').innerHTML = "Score: " + pelaaja4pisteet;}			
			pisteet++;
			tarkistus[tarkistusindex] = valittuuusi;
			tarkistusindex++;
			if(pisteet == totalpisteet){
				var lopputulos = [];
				lopputulos[0] = pelaaja1pisteet;
				lopputulos[1] = pelaaja2pisteet;
				lopputulos[2] = pelaaja3pisteet;
				lopputulos[3] = pelaaja4pisteet;
				lopputulos[4] = 0;
				var j = 0;
				var maksimiarvo = 0;
				var max = 4;
				tasapeli = false;
				while(j<lopputulos.length){
					if(lopputulos[j]==maksimiarvo)tasapeli = true;
					if(lopputulos[j]>lopputulos[max]){max=j; tasapeli = false; maksimiarvo = lopputulos[j];}
					j++;
				}
				if(tasapeli){voitto = "Draw!";
				}else{
					if(max == 0){ voitto = pelaajaa + " was victorious!";
					}else{
						if(max == 1){ voitto = pelaajab + " won the game!";
						}else{
							if(max == 2){ voitto = pelaajac + " is the winner!";
							}else{ voitto = pelaajad + " is unbeatable!";}
						}
					}
				}
				document.getElementById('vuoro').innerHTML = voitto;
				loppu = true;
			}
		}else{
			if(valintoja == 2){
				if(vuoro<pelaajia-1){vuoro++;}else{vuoro = 0;}
				document.getElementById('vuoro').innerHTML = vuorotaulu[vuoro]+"`s turn.";
			}
		}
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
			if(kerta==10){
				pelipalat= pelipalat + "</tr><tr>";
				kerta=0;
			}
		}
	}
	pelipalat = pelipalat + "</tr></table>";
	document.getElementById('pelialue').innerHTML = pelipalat;
}
var vuoro = 0;
var vuorotaulu = [];
var pelaaja1 = false;
var pelaaja2 = false;
var pelaaja3 = false;
var pelaaja4 = false;
var pelaajaa = "";
var pelaajab = "";
var pelaajac = "";
var pelaajad = "";
var pelaaja1pisteet = 0;
var pelaaja2pisteet = 0;
var pelaaja3pisteet = 0;
var pelaaja4pisteet = 0;
var pelaajia = 0;
var loppu = false;
var voitto = "";
var valittuuusi = " ";
var valittuvanha = " ";
var valintoja = 0;
var palat = [];
var tarkistus = [];
var tarkistusindex = 0;
var funid = "";
var apuid = "";
var totalpisteet = 0;
var pisteet = 0;
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
	totalpisteet = 15;
	kokoa(30);
}
function normaali(){	
	totalpisteet = 20;
	kokoa(40);
}
function vaikea(){
	totalpisteet = 25;
	kokoa(50);
}
function palauta(){
	vuoro = 0;
	var i = 0;
	for(i=0; i<palat.length; i++){
		palat[i].monta = 2;
	}
	if(pelaaja1){document.getElementById('vuoro').innerHTML = pelaajaa+"`s turn.";
	}else{
		if(pelaaja2){document.getElementById('vuoro').innerHTML = pelaajab+"`s turn.";
		}else{document.getElementById('vuoro').innerHTML = pelaajac+"`s turn.";}
	}
	if(pelaaja1)document.getElementById('pelaaja1').innerHTML = "Score: 0";
	if(pelaaja2)document.getElementById('pelaaja2').innerHTML = "Score: 0";
	if(pelaaja3)document.getElementById('pelaaja3').innerHTML = "Score: 0";
	if(pelaaja4)document.getElementById('pelaaja4').innerHTML = "Score: 0";
	pisteet = 0;
	pelaaja1pisteet = 0;
	pelaaja2pisteet = 0;
	pelaaja3pisteet = 0;
	pelaaja4pisteet = 0;
	loppu = false;
	for(i=0; i<tarkistus.length; i++){
		tarkistus[i] = "";
	}
	tarkistusindex = 0;
	apuid = "i";
	funid = "p";
	valittuvanha = "o";
	valittuuusi = "u";
	valintoja = 0;
	voitto = "";
}