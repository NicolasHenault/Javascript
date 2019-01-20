var image=document.getElementById("image");
var tab=["img1.jpg", "img2.jpg", "img3.jpg"];
var i=1;
var x=setInterval(change, 5000);

function change(){
		image.style.backgroundImage="url('img/"+tab[i]+"')";
 		i++;
 		if (i==tab.length) {
 			i=0;
 		}
}
	
 
