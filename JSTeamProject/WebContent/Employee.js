function Employee(empNo, empName, empAge, empSex, empSal, empWorkHour){
     Person.call(this, empNo, empName, empAge, empSex)
    this.empSal=empSal ,//월급
    this.empPart=empPart ,//하는일
    this.empPos=empPos ,//직급
    this.empWorkHour=empWorkHour//근무시간

}
Employee.prototype = new Person();

// getters n setters
Employee.prototype.getEmpSal = function(){return this.empSal;}//월급
Employee.prototype.getEmpPart = function(){return this.empPart;}//하는일
Employee.prototype.getEmpPos = function(){return this.empPos;}//직급
Employee.prototype.getEmpWorkHour = function(){return this.empWorkHour;}//근무시간

Employee.prototype.setEmpSal = function(empSal){this.empSal = empSal;}//월급
Employee.prototype.setEmpPart = function(empPart){this.empPart = empPart;}//하는일
Employee.prototype.setEmpPos = function(empPos){this.empPos = empPos;}//직급
Employee.prototype.setEmpWorkHour = function(empWorkHour){this.empWorkHour = empWorkHour;}//근무시간

//toString
Employee.prototype.toString = function(){
    return '사번' + this.no + ', 이름: ' + this.name 
            + ', 나이:' + this.age + ', 성별: ' + this.sex
            + '직무: ' + this.empPart + ', 월급: ' + this.empSal
            + ', 직급: ' + this.empPos + ', 근무시간: ' + this.empWorkHour;
}