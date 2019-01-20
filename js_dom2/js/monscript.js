 

 	var class1=document.getElementsByClassName("class1");
 	var bleu=document.getElementById("bleu");
 	var rouge=document.getElementById("rouge");
 	var vert=document.getElementById("vert");

 	bleu.addEventListener("click", function(e){
 		for (var i = 0; i < class1.length; i++) {
	 		class1[i].style.color=getComputedStyle(bleu).backgroundColor;
	 	}
 	})
 	
 	rouge.addEventListener("click", function(e){
 		for (var i = 0; i < class1.length; i++) {
	 		class1[i].style.color=getComputedStyle(rouge).backgroundColor;
	 	}
 	})

 	vert.addEventListener("click", function(e){
 		for (var i = 0; i < class1.length; i++) {
	 		class1[i].style.color=getComputedStyle(vert).backgroundColor;
	 	}
 	})
	var parent= document.getElementById("parent");

	parent.addEventListener("click", function(e){
		var newLink=document.createElement("a");
		newLink.href="http://www.bongo.fr";
		newLink.innerHTML="Vous pouvez aller sur le site Bongo"
		document.getElementById("parent").appendChild(newLink);
	})
	
	var papa= document.getElementById("papa");
	var maman= document.getElementById("maman");
	var i=0;
	papa.addEventListener("click", function(e){		
		i++;
		var newDiv=document.createElement("div");
		newDiv.id="id" + i;
		newDiv.innerHTML="Element " + i;		
		document.getElementById("maman").appendChild(newDiv);		
		newDiv.addEventListener("click", function(e){
			maman.removeChild(newDiv);
		})		
	})	



window.addEventListener("keydown", function(e){
	document.getElementById("img1").style.transition= "all 0.4s";
	if(e.keyCode==39){
		document.getElementById("img1").style.left =  document.getElementById("img1").offsetLeft + 100 + "px";
	}
	if(e.keyCode==40){
		document.getElementById("img1").style.top = document.getElementById("img1").offsetTop + 100 + "px";
	}
	if(e.keyCode==37){
		document.getElementById("img1").style.left = document.getElementById("img1").offsetLeft - 100 + "px";
	}
	if(e.keyCode==38){
		document.getElementById("img1").style.top = document.getElementById("img1").offsetTop - 100 + "px";
	}
	if(e.keyCode==32){
		document.getElementById("bruit").play();
		var oeuf=document.createElement("img");
		oeuf.src="img/egg.jpg";

		document.getElementById("egg").appendChild(oeuf);
		oeuf.style.position="absolute";
		oeuf.style.width="5%";
		oeuf.style.top=document.getElementById("img1").offsetTop + 250 + "px";
		oeuf.style.left=document.getElementById("img1").offsetLeft + 150 + "px";
		oeuf.style.animationName="anim1";
		oeuf.style.animationDuration="8s";
	}
})
