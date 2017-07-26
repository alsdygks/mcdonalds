/**
 * 
 */
function Employee(empNo, empName, empAge, empSex, empSal, empWorkHour){
 	Person.call(this, empNo, empName, empAge, empSex)

	this.empSal=empSal ,//월급
	this.empPart=empPart ,//하는일
	this.empPos=empPos ,//직급
	this.empWorkHour=empWorkHour//근무시간
		
}
Employee.prototype = new Person();

// getters n setters
//Employee.prototype.getEmpNo = function(){return this.empNo;}
//Employee.prototype.getEmpName = function(){return this.empName;}
//Employee.prototype.getEmpAge = function(){return this.empAge;}
//Employee.prototype.getEmpSex = function(){return this.empSex;}
Employee.prototype.getEmpSal = function(){return this.empSal;}
Employee.prototype.getEmpPart = function(){return this.empPart;}
Employee.prototype.getEmpPos = function(){return this.empPos;}
Employee.prototype.getEmpWorkHour = function(){return this.empWorkHour;}

//Employee.prototype.setEmpNo = function(empNo){this.empNo = empNo;}
//Employee.prototype.setEmpName = function(empName){this.empName = empName;}
//Employee.prototype.setEmpAge = function(empAge){this.empAge = empAge;}
//Employee.prototype.setEmpSex = function(empSex){this.empSex = empSex;}
Employee.prototype.setEmpSal = function(empSal){this.empSal = empSal;}
Employee.prototype.setEmpPart = function(empPart){this.empPart = empPart;}
Employee.prototype.setEmpPos = function(empPos){this.empPos = empPos;}
Employee.prototype.setEmpWorkHour = function(empWorkHour){this.empWorkHour = empWorkHour;}

//toString
Employee.prototype.toString = function(){
	return '사번' + this.no + ', 이름: ' + this.name 
			+ ', 나이:' + this.age + ', 성별: ' + this.sex
			+ '직무: ' + this.empPart + ', 월급: ' + this.empSal
			+ ', 직급: ' + this.empPos + ', 근무시간: ' + this.empWorkHour;
}