/*--------------------------------------------------------------------------------------------
|	@desc:		HTML5 Canvas Tutorial On Creating Snowfall Effect
|	@author:	Aravind Buddha
|	@url:		http://www.techumber.com
|	@date:		19 JAN 2013
|	@email:     aravind@techumber.com
|	@license:	Free! to Share,copy, distribute and transmit ,
|               but i'll be glad if my name listed in the credits'
---------------------------------------------------------------------------------------------*/
(function(w,d,m,c) {
    //Create canvas tag on fly
 	var cnvs,ctx,Wt,Ht,maxF,flakes,b= d.getElementsByTagName('body')[0];
	cnvs = d.createElement(c);
 	b.appendChild(cnvs);
 	//init canvas and set dimenctions
 	ctx=cnvs.getContext('2d');
 	Wt=w.innerWidth;
 	Ht=w.innerHeight;
 	cnvs.width=Wt;
 	cnvs.height=Ht;
 	//Creating snow flakes
	maxF= 1000; //max flakes
	flakes = [];
	for(var i = 0; i < maxF; i++)
	{
		//pusing into flakes array
		flakes.push({
			x: m.random()*Wt, //x-axis
			y: m.random()*Ht, //y-axis
			r: m.random()*3,  //snow radious
		})
	}
	function snowfall(){
		ctx.clearRect(0, 0, Wt, Ht);
		//drawing intitial snowflakes on canvas
		ctx.fillStyle = "#fff";
		ctx.beginPath();
		for(var i = 0; i < maxF; i++){
			var f = flakes[i];
			ctx.moveTo(f.x, f.y);
			ctx.arc(f.x, f.y, f.r, 0, m.PI*2, true);
		}
		ctx.fill();

		//moving snow flakes
		var angl=0;
		for(var i=0;i<maxF;i++){
			angl+=0.1;
			var f=flakes[i];
			//moving top to bottom using Cos
			f.y += m.abs(m.cos(angl))*3;
			//resetting snowflakes when they are
			//out of frame
			if(f.x > Wt || f.x < 0 || f.y > Ht){
				f.x=m.random()*Wt;
				f.y=-10;
			}
		}
	}
	//calling snowfall function every 30 sec
	setInterval(snowfall, 0.1);
}(window,document,Math,'canvas'));
