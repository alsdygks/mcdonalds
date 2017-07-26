function Manager(empNo, empName, empAge, empSex, 
		empSal, empWorkHour, mngNo, empNo){
	Employee.call(this, empNo, empName, empAge, empSex,
			empSal, empWorkHour);
	this.mngNo = mngNo,//매니저 넘버
	this.empNo = empNo//직원 넘버
}

//getters n setters
Manager.prototype.getmngNo = function(){return this.mngNo;}//매니저 넘버
Manager.prototype.getempNo = function(){return this.empNo;}//직원 넘버

Manager.prototype.setmngNo = function(mngNo){this.mngNo = mngNo;}//매니저 넘버
Manager.prototype.setempNo = function(empNo){this.empNo = empNo;}//직원 넘버

//toString
Manager.prototype.toString = function(){
    return '매니저 넘버' + this.mngNo + ', 직원 넘버: ' + this.empNo;
}

Manager.prototype.hire = function(){
	console.log('직원을 고용합니다');
}
Manager.prototype.mngWork = function(){
	console.log('매니저 일을 합니다');
}

Manager.prototype.showMyWorkers = function(){
	
	for(i in this.empNo){
		console.log(this.mngNo + '번 ' + this.name + '의 관리 직원: ' + 
				'[사번: ' + empNo[i].getEmpNo() + ' 사원명: ' + 
				empNo[i].getEmpName() + ']');
	}
}