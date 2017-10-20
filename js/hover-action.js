var information= (function() {

	

	function onClick()
	{
		var v1 = this.parentElement.parentNode.children[0].classList;	
		if(this.innerHTML == "About Me"){
			this.innerHTML="Back";
			this.style.backgroundColor="#ee4b28"
			v1.add("hover");
			
		}
		else{	
			this.innerHTML="About Me";
			this.style.backgroundColor="#e55b3d"
			v1.remove("hover");
		}
		
	}
	return({
	
		buttonClick:function(cl){
			
			var ele=document.getElementsByClassName(cl);
			for(var i=0;i<ele.length;i++)
			{
				ele[i].addEventListener("click",onClick);
			}	
		},
		
	
	});

})();
