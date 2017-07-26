/**
 * 
 */

function Owner(empNo, empName, empAge, empSex, 
		empSal, empWorkHour,division){
	Employee.call(this);
	this.division = division	//소유한 지점
}

Owner.prototype = new Employee();

//getters and setters
Owner.prototype.getDivision = function(){return this.division;}

Owner.prototype.setDivision - function(division){
	this.division = division;
}

//toString()
Owner.prototype.toString = function(){
	return '사번: ' + this.no +
		   '  이름: ' + this.name +
		   '  나이: ' + this.age +
		   '  성별: ' + this.sex +
		   '\n월급: ' + this.empSal +
		   '  근무시간: ' + this.empWorkHour
}

//기능
Owner.prototype.countCash = function(){
	console.log('지점장이 돈을 셉니다.');
}


