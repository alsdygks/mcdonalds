function Employee(empNo, empName, empAge, empSex, empSal, empWorkHour){
    Person.call(this, empNo, empName, empAge, empSex),
	this.empSal=empSal ,//월급
    this.empWorkHour=empWorkHour//근무시간

}   
Employee.prototype = new Person();

// getters n setters
Employee.prototype.getEmpSal = function(){return this.empSal;}//월급
Employee.prototype.getEmpWorkHour = function(){return this.empWorkHour;}//근무시간

Employee.prototype.setEmpSal = function(empSal){this.empSal = empSal;}//월급
Employee.prototype.setEmpWorkHour = function(empWorkHour){this.empWorkHour = empWorkHour;}//근무시간
