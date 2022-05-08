window.onscroll = function(){
	var topScroll =document.body.scrollTop || document.documentElement.scrollTop;
	var cen = document.getElementsByClassName('cen')[0];
	console.log(topScroll)
	if(topScroll > 0){
		cen.style.display = "none"
	}else{
		cen.style.display = "block"
	}
}