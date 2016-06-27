// JavaScript Document
window.onload=function(){
	var page1=document.getElementById("page1");
	var page2=document.getElementById("page2");
	var page3=document.getElementById("page3");
	var music=document.getElementById("music");
	var audio=document.getElementsByTagName("audio")[0];
	//音乐播放结束，停止动画
	audio.addEventListener("ended",function(){
		music.className="";	
	})
	//控制音乐播放和图标动画
	music.addEventListener("click",function(){
		if(audio.paused){
			audio.play();
			this.className="play";
			this.style.animationPlayState="running";
		}
		else{
			audio.pause();
			this.style.animationPlayState="paused";
		}
	});	
	//切换页面效果
	page1.addEventListener("click",function(){
		page1.style.opacity=0.3;
		page2.style.opacity=0.3;
		slideUp(page1,100);
		slideUp(page2,100);
		slideUp(page3,100);
		setTimeout(function(){page2.style.opacity=1;},500);		
	});
	page2.addEventListener("click",function(){
		page2.style.opacity=0.3;
		page3.style.opacity=0.3;
		slideUp(page1,200);
		slideUp(page2,200);
		slideUp(page3,200);
		setTimeout(function(){page3.style.opacity=1;},500);			
	});
	function slideUp(obj,num){
		obj.style.webkitTransform="translate(0,-"+num+"%)";
		obj.style.mozTransform="translate(0,-"+num+"%)";
		obj.style.transform="translate(0,-"+num+"%)";
	}
}