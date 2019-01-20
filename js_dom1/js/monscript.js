
// // Pour créer le DOM avant de charger le script

 window.onload = function() {  

// 	// Méthode 1

// 	var id1= document.getElementById("id1");
// 	id1.onclick=function(e){
// 		alert("bonjour! tu as cliqué sur " + e.target.id);
// 	}

// 	// Méthode 2

// 	var id2= document.getElementById("id2");
// 	id2.addEventListener("click", function(e){
// 		alert("tu as cliqué sur " + e.target.id + " et tu es sur " + e.currentTarget.id)
// 	}, false);

// 	var id3= document.getElementById("id3");
// 	id3.addEventListener("click", function(e){
// 		alert("tu as cliqué sur " + e.target.id + " et tu es sur " + e.currentTarget.id);e.stopPropagation();
// 	}, false);


// 	//---------------------------------------------------------------------------------------


// 	var id4=document.getElementById("id4");
// 	id4.addEventListener("mouseover", function(e){		
// 		id4.src="img/grains-de-cafe.jpg";	idem à id4.setAttribute("src", "img/grains-de-cafe.jpg")	
// 	});	

// 	var id4=document.getElementById("id4");
// 	id4.addEventListener("mouseout", function(e){		
// 		id4.src="img/grains-couleur.jpg";		
// 	});


// 	//-----------------------------------------------------------------------------------------

// 	var id5=document.getElementById("id5");
// 	id5.addEventListener("click", function(e){
// 	if(id5.src=="file:///C:/Users/Stagiaire/Documents/Exercices/js_dom/img/cafe-ethiopie.png"){
// 		id5.src="file:///C:/Users/Stagiaire/Documents/Exercices/js_dom/img/cafe-guadeloupe.png";
// 	} else {
// 		id5.src="file:///C:/Users/Stagiaire/Documents/Exercices/js_dom/img/cafe-ethiopie.png";			
// 	}
// 	});

	//----------------------------------------------------------------------------------------


	 var para=document.getElementById("para");
	 var bleu=document.getElementById("bleu");
	 var rouge=document.getElementById("rouge");
	 var vert=document.getElementById("vert");
	 var result=document.getElementById("result");

	 bleu.addEventListener("click", function(e){
	 	para.style.color="blue";	
	 	para.style.backgroundColor="gray";
	 	result.innerHTML="vous avez cliqué sur " + e.target.id; // ou e.target.innerHTML (si texte dans le tag)
	 })	
	 rouge.addEventListener("click", function(e){
	 	para.style.color="red";
	 	result.innerHTML="vous avez cliqué sur rouge";
	 	para.style.transform="rotate(20deg)";
	 })	 
	 vert.addEventListener("click", function(e){
	 	para.style.color="green";
	 	para.style.fontSize="3em";
	 	result.innerHTML="vous avez cliqué sur vert";
	 })

	 var div1=document.getElementById("div1");
	 var div2=document.getElementById("div2");
	 var btn=document.getElementById("btn");

	 btn.addEventListener("click", function(e){	 	
	 	div2.innerHTML=getComputedStyle(div1).backgroundColor;
	 })

	var id6=document.getElementById("id6");	
	id6.addEventListener("click", function(e){
		id6.classList.toggle("red");
	})
	
}



// Par contre, les déclarations de fonction ne sont que des déclarations, 
//on peut les mettre en dehors de window.onload


// Méthode 3

// function maFonction(){
// 	alert("tu as cliqué");
// }	

