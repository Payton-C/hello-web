// JavaScript Document
var WINDOW_WIDTH=0;
var WINDOW_HEIGHT=0;
var MARGIN_TOP=0;
var MARGIN_LEFT=0;
var RADIUS=0;
var hours=0;
var minutes=0;
var seconds=0;
const colors=["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#F4444","#C0000"];
var balls=[];

window.onresize=function(){window.location.href="";}
window.onload=function(){
	var canvas=document.getElementById("canvas");
	var context=canvas.getContext("2d");
	WINDOW_WIDTH=document.documentElement.clientWidth;
	WINDOW_HEIGHT=document.documentElement.clientHeight;
	RADIUS=Math.round(WINDOW_WIDTH*4/5/108)-1;
	MARGIN_TOP=Math.round(WINDOW_HEIGHT/10);
	MARGIN_LEFT=Math.round((WINDOW_WIDTH-108*(RADIUS+1))/2);
	canvas.width=WINDOW_WIDTH;
	canvas.height=WINDOW_HEIGHT;
	setInterval(function(){
		context.clearRect(0,0,context.canvas.width,context.canvas.height);
		get_time();	
		ballAct();
		draw(context);
	},50)
}



//绘制数字和小球
function draw(cxt){
	renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),cxt);
	renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),cxt);
	renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,cxt);
	renderDigit(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),cxt);
	renderDigit(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),cxt);
	renderDigit(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,cxt);
	renderDigit(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),cxt);
	renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),cxt);
	for(var i=0;i<balls.length;i++){
		cxt.fillStyle=balls[i].color;
		cxt.beginPath();
		cxt.arc(balls[i].x,balls[i].y,RADIUS,0,2*Math.PI);	
		cxt.closePath();
		cxt.fill();	
	}
}
function renderDigit(x,y,num,cxt){
	cxt.fillStyle="blue";
	for(var i=0;i<digit[num].length;i++){
		for(var j=0;j<digit[num][0].length;j++){
			if(digit[num][i][j]==1){
				cxt.beginPath();
				cxt.arc(x+(RADIUS+1)+j*2*(RADIUS+1),y+(RADIUS+1)+i*2*(RADIUS+1),RADIUS,0,2*Math.PI);
				cxt.closePath();
				cxt.fill();		
			}
		}
	}
}



//更新时间以及判断数字是否改变，预生成小球
 function get_time(){
	newTime=+new Date()+8*60*60*1000;
	var nxtTime=newTime+50;
	var time1=Math.round(newTime%(24*60*60*1000)/1000);
	var time2=Math.round(nxtTime%(24*60*60*1000)/1000);
	seconds=parseInt(time1%60);
	minutes=parseInt(time1/60)%60;
	hours=parseInt(time1/3600);
	var nxtSeconds=parseInt(time2%60);
	var nxtMinutes=parseInt(time2/60)%60;
	var nxtHours=parseInt(time2/3600);
	if(parseInt(hours/10)!= parseInt(nxtHours/10)){
		addBall(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10));
	}
	if(parseInt(hours%10)!= parseInt(nxtHours%10)){
		addBall(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10));
	}
	if(parseInt(minutes/10)!= parseInt(nxtMinutes/10)){
			addBall(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10));
	}
	if(parseInt(minutes%10)!= parseInt(nxtMinutes%10)){
			addBall(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10));
	}
	if(parseInt(seconds/10)!= parseInt(nxtSeconds/10)){
			addBall(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10));
	}
	if(parseInt(seconds%10)!= parseInt(nxtSeconds%10)){
			addBall(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10));
	}	
}
 
 
 
//添加小球数据到数组
function addBall(x,y,num){
	for(var i=0;i<digit[num].length;i++){
		for(var j=0;j<digit[num][0].length;j++){
			if(digit[num][i][j]==1){
				var aBall={
					x:x+(RADIUS+1)+j*2*(RADIUS+1),
					y:y+(RADIUS+1)+i*2*(RADIUS+1),
					g:1.5+Math.random(),
					vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,
					vy:-5,
					color:colors[Math.floor(Math.random()*colors.length)]	
				};
				balls.push(aBall);
			}
		}
	}
}

//小球运动
function ballAct(){
	var act=0;
	for(var i=0;i<balls.length;i++){
		balls[i].x+=balls[i].vx;
		balls[i].y+=balls[i].vy;
		balls[i].vy+=balls[i].g;
		if(balls[i].y>WINDOW_HEIGHT-RADIUS){
			balls[i].y=WINDOW_HEIGHT-RADIUS;
			balls[i].vy*=-0.6;
		}
		if(balls[i].x>0&balls[i].x-RADIUS<WINDOW_WIDTH){
			balls[act]=balls[i];
			act++;
		}
	}
	while(balls.length>act){
			balls.pop();
	}
}









