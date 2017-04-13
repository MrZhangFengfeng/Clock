$(document).ready(function(){
	function init(){
		drowLines($('.line-min'),60,85);
		drowLines($('.line-hour'),12,80);
		drowNumbers($('.number'));		
		move();
	}
	init();

	function drowLines(wrap,total,translateX){
		var gap = 360/total;
		var strHtml = "";
		for( var i=0;i<total;i++){
			strHtml += '<li style = "transform:rotate('+(i*gap)+'deg) translate('+translateX+'px,-50%)"></li>';			
		}
		wrap.html(strHtml);
	}
	function drowNumbers(wrap){
		/*r:半径  angle：角度  X：X轴坐标 Y：Y轴坐标*/
		var r = wrap.width()/2;
		var strHtml = "";
		for(var i=1;i<=12;i++){
			var angle = (i-3)/6*Math.PI;
			var x = r + r * Math.cos(angle);

			var y = r + r*Math.sin(angle);
			strHtml+='<li style="left:'+x+'px; top:'+y+'px;">'+i+'</li>';
		}
		wrap.html(strHtml);
	}

	function move(){
		var moveHour = $(".hour"),
		    moveMin = $(".min"),
		    moveSec = $(".sec");

		setInterval(function(){
			var now = new Date(),
			    hour = now.getHours(),
			    min = now.getMinutes(),
			    sec = now.getSeconds();
			
			var secAngle = sec*6 - 90,
				minAngle = min*6+sec*6/60 -90,
				hourAngle = hour*30 + min*6/30 -90;

			moveHour.css('transform','rotate('+hourAngle+'deg)');
			moveMin.css('transform','rotate('+minAngle+'deg)');
			moveSec.css('transform','rotate('+secAngle+'deg)');
		},1000);
	}
})