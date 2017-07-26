/**
 * 
 */

function Worker(empNo, empName, empAge, empSex, empSal, empWorkHour,part){
	Employee.call(this,empNo, empName, empAge, empSex, empSal, empWorkHour);
	this.part = part;
}

Worker.prototype.getPart = function(){
	return this.part;
};
Worker.prototype.setPart = function(part){
	this.part=part;
}

Worker.prototype.takeOrder = function(){
	console.log(this.name+' 이 테이크 아웃을 해주고있습니다.');
};

Worker.prototype.bake = function(){
	
	console.log(this.name+ ' 이 햄버거를 만듭니다.');
};
Worker.prototype.cleanse = function(){
	console.log(this.name+ ' 이 설거지를 합니다. ');

};
Worker.prototype.ride= function(){
	console.log(this.name+' 이 배달을 준비 합니다.');

};
Worker.prototype.toString = function(){
	console.log('part : '+part);
}
