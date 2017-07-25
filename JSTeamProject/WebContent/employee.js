/**
 * 
 */
function Employee(empNo,empName ,empAge ,empSal ,empSex ,empPart ,empPos ,empWorkHour){
 	this.empNo = empNo ,//사번
	this.empName= empName , //이름
	this.empAge = empAge , //나이
	this.empSal=empSal ,//월급
	this.empSex =empSex , //성별	
	this.empPart=empPart ,//하는일
	this.empPos=empPos ,//직급
	this.empWorkHour=empWorkHour//근무시간
		
}
// getters n setters
Employee.prototype.getEmpNo = function(){return this.empNo;}
Employee.prototype.getEmpName = function(){return this.empName;}
Employee.prototype.getEmpAge = function(){return this.empAge;}
Employee.prototype.getEmpSal = function(){return this.empSal;}
Employee.prototype.getEmpSex = function(){return this.empSex;}
Employee.prototype.getEmpPart = function(){return this.empPart;}
Employee.prototype.getEmpPos = function(){return this.empPos;}
Employee.prototype.getEmpWorkHour = function(){return this.empWorkHour;}

Employee.prototype.setEmpNo = function(empNo){this.empNo = empNo;}
Employee.prototype.setEmpName = function(empName){this.empName = empName;}
Employee.prototype.setEmpAge = function(empAge){this.empAge = empAge;}
Employee.prototype.setEmpSal = function(empSal){this.empSal = empSal;}
Employee.prototype.setEmpSex = function(empSex){this.empSex = empSex;}
Employee.prototype.setEmpPart = function(empPart){this.empPart = empPart;}
Employee.prototype.setEmpPos = function(empPos){this.empPos = empPos;}
Employee.prototype.setEmpWorkHour = function(empWorkHour){this.empWorkHour = empWorkHour;}
