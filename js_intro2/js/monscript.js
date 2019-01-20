// var nbAleatoire=entierAleatoire(1,100);
// var compteur=1;
// console.log(nbAleatoire);
// var tab=[];
// var nb=Number(prompt("Saisi un nombre entre 1 et 100"));
// tab.push(nb);
// while(nb!=nbAleatoire){		
// 	if(nb>nbAleatoire){
// 		nb=Number(prompt("Saisi un nombre plus petit"));
// 	} else {
// 		nb=Number(prompt("Saisi un nombre plus grand"));
// 	}
// 	tab.push(nb);
// 	compteur++;	
// }
// alert("Bravo, tu as gagné en " + compteur + " coup(s).");
// for (var i = 0; i < tab.length; i++) {
// 	console.log(tab[i]);
// }



// function entierAleatoire(min, max)
//    {
//     return Math.round(Math.random() * (max - min + 1)) + min;
//    }

//--------------------------------------------------------------------------------------------

// var tab=["hortense|500", "hortense|300", "Ludovina|25", "Ludovina|50"];
// var total=0;

// for (var i = 0; i < tab.length; i++) {
// 	var tab2=tab[i].split('|');
// 	total=total+Number(tab2[1]);
// }
// console.log(total);

//------------------------------------------------------------------------------------------

// var tab=[["A", "B"], ["C", "D"]];

// for (var i = 0; i < tab.length; i++) {	
// 	var tab2=tab[i];
// 	for (var j = 0; j < tab2.length; j++) {		
// 		console.log(tab2[j]);		
// 	}
// }

// Autre méthode:

// var tab=[["A", "B"], ["C", "D"]];

// for (var i = 0; i < tab.length; i++) {		
// 	for (var j = 0; j < tab[i].length; j++) {		
// 		console.log(tab[i][j]);		
// 	}
// }

//-------------------------------------------------------------------------------------------

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


//---------------------------------------------------------------------------------------------

// var chat1={
// 	color:"black",
// 	name:"colt",
// 	ditBonjour: function(nom){
// 		alert("Bonjour " + nom)
// 	},
// }

// var chat2={
// 	color:"red",
// 	name:"minou",
// 	ditBonjour: function(nom){
// 		alert("Bonjour " + nom)
// 	},
// 	laisse:{
// 		color:"blue"
// 	}
// }

// console.log(chat2.laisse.color);

//---------------------------------------------------------------------------------------------

// function Chat(a, b){
// 	this.name=a;
// 	this.color=b;
// 	this.disBonjour = function (x){
// 		alert("bonjour " + x + " je m'appelle " + this.name)
// 	};
	
// }

// var chat1= new Chat("yoda", "blanc");
// var chat2= new Chat("mystic", "gris");

// chat1.disBonjour(chat2.name);

//---------------------------------------------------------------------------------------------

function Operation (a,b){
	this.add= function(){
		alert (a+b)
	};
	this.sub= function(){
		alert (a-b)
	};
	this.mult= function(){
		alert (a*b)
	};
	this.div= function(){
		alert (a/b)
	};
}



var code=prompt(`choisis une opération grâce aux symboles +, -, * ou /`);
while((code!= "+") && (code!="-") && (code!="*") && (code!="/")){	
	code=prompt(`Ah non, c'est pas le bon symbole, recommence!`);		
}
var nb1= (Number(prompt("entre un nombre")));
var nb2= (Number(prompt("entre un autre nombre")));
var operation1= new Operation(nb1,nb2);

if (code== "+"){
		(operation1.add());
	} else if(code== "-"){
		(operation1.sub());
	} else if(code== "*"){
		(operation1.mult());
	} else {
		(operation1.div());
	}


