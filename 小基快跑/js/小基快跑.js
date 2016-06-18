// JavaScript Document
window.onload=function(){
	var pic=document.getElementById("pic");	
	var txt=document.getElementById("txt");	
	var gz=document.getElementById("gz");
	var box=document.getElementById("box");
	var gb=document.getElementById("gb");
	var con=document.getElementById("content");
	var btns=con.getElementsByTagName("button");
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");
	var picLi=pic.getElementsByTagName("li");
	var txtLi=txt.getElementsByTagName("li");
	var iShow=0;
	for(var i=0;i<btns.length;i++){
		btns[i].index=i;
		btns[i].onclick=function(){
			for(var j=0;j<picLi.length;j++){
				picLi[j].className="";
				txtLi[j].className="";
			}
			picLi[this.index].className="active";
			txtLi[this.index].className="active";
			iShow=this.index;
			return iShow;
		}
	}
	prev.onclick=function(){
		if(iShow>0){
			picLi[iShow].className="";
			txtLi[iShow].className="";
			picLi[iShow-1].className="active";
			txtLi[iShow-1].className="active";
			iShow--;
			return iShow;
		}
	}
	next.onclick=function(){
		if(iShow<picLi.length-1){
			picLi[iShow].className="";
			txtLi[iShow].className="";
			picLi[iShow+1].className="active";
			txtLi[iShow+1].className="active";
			iShow++;
			return iShow;
		}
	}
	gz.onclick=function(){
		var newDiv=document.createElement("div");
		document.body.appendChild(newDiv);
		newDiv.id="newDiv";
		box.style.display="block";
		box.style.top=140+"px";
		box.style.left=(document.documentElement.clientWidth-box.offsetWidth)/2+"px";
		box.style.zIndex=100;
	}
	gb.onclick=function(){
		box.style.display="none";
		var newDiv=document.getElementById("newDiv");
		newDiv.parentNode.removeChild(newDiv);	
	}
}