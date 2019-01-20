

// VARIABLES ET CONCAT------------------------------------------------

// var prenom="Julie";
// var nom="Dupont";
// console.log(`Bonjour ${prenom} ${nom}`);


// FONCTION ----------------------------------------------------------

// var x=2;
// var y=6;
// console.log(add(x,y));

// function add(x,y){
// 	return (x+y);
// }


// PALINDROME------------------------------------------------------------

// var mot=prompt("tape un mot");
// var motInverse="";
// var motMin=mot.toLowerCase();

// for(i=0; i<motMin.length; i++){
// 	motInverse=motMin[i] + motInverse;
// }
// if (motMin==motInverse){
// 	console.log("palindrome");
// } else {
// 	console.log("pas palindrome");
// }


// CONDITION IF-----------------------------------------------------------

// var x=Number(prompt("saisis un nb entre 0 et 10"));
// var y = 5;
// var condition1=x<=y;
// if(condition1){
// 	console.log(`${x} est inférieur ou égal à ${y}`);
// } else {
// 	console.log(`${x} est supérieur à ${y}`);
// } 


// BOUCLE WHILE-------------------------------------------------------------

// var y=Number(prompt("Entre un nb entre 1 et 10"));
// while((y<=0) || (y>10)){
// 	y=Number(prompt("Non, c'est pas ça!!! Essaie encore: entre un nb entre 1 et 10"));
// }
// console.log("bravo!");


// BOUCLE FOR-------------------------------------------------------------

// var tab=["D", "E", "F"];
// for (var i = 0; i < tab.length; i++) {
// 	console.log(tab[i]);
// }


// CALCUL DE MOYENNE--------------------------------------------------------------

// var cumulNotes=0;
// var nbNotes=Number(prompt("combien de notes veux-tu rentrer?"))
// for (var i = 0; i < nbNotes; i++) {
// 	cumulNotes=cumulNotes+Number(prompt("entre une note"));
// }
// console.log(cumulNotes/nbNotes);

// var total=0;
// var nbNotes=3;
// var moyenne=0;
// for (var i = 0; i < 3; i++) {
// 	total=Number(prompt("saisis une note"))+total;

// }
// calculMoyenne(total, nbNotes);
// console.log(moyenne);

// function calculMoyenne(x,y){
// 	moyenne=x/y;
// 	return moyenne;
// }


// var tab=[];
// var somme=0;
// var nb=Number(prompt("combien de notes"));
// for (var i = 0; i < nb; i++) {
// 	tab[i]=(Number(prompt("saisis une note")));
// 	somme=somme+tab[i];	
// }
// console.log(calculMoyenne(somme, nb));

// function calculMoyenne(x,y){
// 	moyenne=x/y;
// 	return moyenne;
// }


// LE NOMBRE MYSTERE--------------------------------------------------------------

// var x=Number(prompt("entre un nb pour trouver le nombre mystère"));
// var y=10;
// var z=1;

// while(x!=y){
//	z++;
// 	if (x>y){		
// 		x=Number(prompt("ce nb est plus grand que le nombre mystère, entre un autre nb"));
// 	} else (x<y){// 		
// 		x=Number(prompt("ce nb est plus petit que le nombre mystère, entre un autre nb"));
// 	}
// }
// alert("bravo, c'était "+ y + " ! Tu l'as trouvé en " + z + " coups");


// MANIPULER LES CHAINES DE CARACTERE---------------------------------------------

// var x= prompt("donne moi ton nom de domaine");
// var tab= x.split('.');
// alert("l'extension est ." + tab[(tab.length-1)]);

// var x= prompt("donne moi ton nom de domaine");
// var tab=x.split('.');
// alert(tab.join('-'));


// CLASSER DES NOTES SELON SUP OU INF A LA MOYENNE--------------------------------------

// var tab=[];
// var somme=0;
// var notesSup=0;
// var notesInf=0;
// var moyenne=0;
// var nbNotes=Number(prompt("Combien de notes voulez-vous entrer?"));
// for (var i = 0; i < nbNotes; i++) {
// 	tab.push(Number(prompt(`Entrez la note ${i+1}`)));
// 	if (tab[i]<10){
// 		notesInf++;
// 	} else {
// 		notesSup++;
// 	}
// }

// console.log(`il y a ${notesInf} notes en dessous de 10`);
// console.log(`il y a ${notesSup} notes au dessus de 10`);
// console.log(`la moyenne est de ${calculMoyenne(tab)}`);


// function calculMoyenne(x){
// 	for (var i = 0; i < x.length; i++) {
// 		somme=somme+x[i];
// 	}
// 	moyenne=somme/x.length;
// 	return moyenne;
// }


// INTRO A L'OBJET----------------------------------------------------------------

// var nb=[];
// var compteur=0;
// var code=prompt(`choisis une opération grâce aux symboles +, -, * ou /`);

// while((code!= "+") && (code!="-") && (code!="*") && (code!="/") && (compteur<2)){	
// 	code=prompt(`Ah non, c'est pas le bon symbole, recommence!`);
// 	compteur++;		
// }
// if(compteur<2){
// 	for (var i = 0; i < 2; i++) {
// 		nb[i]= Number(prompt("Entre un nombre"));
// 	}
// 	if (code== "+"){
// 		console.log(add(nb[0],nb[1]));
// 	} else if(code== "-"){
// 		console.log(sub(nb[0],nb[1]));
// 	} else if(code== "*"){
// 		console.log(mult(nb[0],nb[1]));
// 	} else {
// 		console.log(div(nb[0],nb[1]));
// 	}
// } else {
// 	alert("casse toi!");
// }

// function add(a,b){
// 	return (a+b);
// }
// function sub(a,b){
// 	return (a-b);
// }
// function mult(a,b){
// 	return (a*b);
// }
// function div(a,b){
// 	return (a/b);
// }

//-------------------------------------------------------------------------------------

// var chien1={
// 	name: "Limbo",
// 	color:"marron",
// 	race:"Bouvier Bernois",
// 	nbPattes: 4,
// 	parler: function(x){
// 		console.log(`Bonjour ${x}, je m'appelle ${this.name} et j'ai ${this.nbPattes} pattes.`)
// 	},
// 	laisse:{
// 		color: "red",
// 	}
// }

// var chien2={
// 	name: "Wouah Wouah",
// 	color:"blanc",
// 	race:"caniche",
// 	nbPattes: 3,
// 	parler: function(x){
// 		console.log(`Bonjour ${x}, je m'appelle ${this.name} et j'ai mordu ${chien1.name}.`)
// 	},
// 	laisse:{
// 		color: "blue",
// 	}
// }
//--------------------------------------------------------------------------------------
// var listChiens=[chien1, chien2];

// for (var i = 0; i < listChiens.length; i++) {
// 	console.log(listChiens[i].name);
// }
//----------------------------------------------------------------------------------------
// chien1.parler(chien2.name);
// console.log(chien1.laisse.color);


//CONSTRUCTEUR-------------------------------------------------------------------------

function Chien(a, b){
	this.name=a;
	this.color=b;
	this.parler=function(x){
		alert("Bonjour! " + x + " je m'appelle " + this.name + " .");
	}
}

var chien1 = new Chien("Limbo", "marron");
var chien2 = new Chien("Uzo", "noir");

console.log(chien1.name);
chien2.parler("nico");