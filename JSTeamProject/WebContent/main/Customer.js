function Customer(cNum,cName,cAge,cSex,cWeight){
	Person.call(this, cNum, cName,cAge,cSex)
	this.cWeight = cWeight
}

Customer.prototype = new Person();

//getters n setters
Customer.prototype.getcNum = function(){return this.cNum;}//고객 넘버
Customer.prototype.getcName = function(){return this.cName;}//고객 이름
Customer.prototype.getcGender = function(){return this.cGender;}//고객 성별
Customer.prototype.getSex = function(){return this.sex;}// 고객 연령대

Customer.prototype.setcNumo = function(cNum){this.cNum = cNum;}//고객 넘버
Customer.prototype.setcName = function(cName){this.cName = cName;}//고객 이름
Customer.prototype.setcGender = function(cGender){this.cGender = cGender;}//고객 성별
Customer.prototype.setcAge = function(cAge){this.cAge = cAge;}//고객 연령대

//기능
Customer.prototype.purchase = function(){
	console.log(this.name + '이(가) 결제하였습니다.');
}
Customer.prototype.order = function(){
	console.log(this.name + '이(가) 음식을 주문하였습니다.');
}
Customer.prototype.eat = function(){
	console.log(this.name + '이(가) 음식을 먹습니다.');
	this.cWeight += 0.5;
	console.log(this.name + '이(가) 음식을 먹어 몸무게가 늘었습니다.' + 
			'현재 몸무게: ' + this.cWeight);
}



//toString
Customer.prototype.toString = function(){
    return '고객 넘버' + this.cNum + ', 고객 이름: ' + this.cName 
            + ', 고객 성별:' + this.cGender + ', 고객 연령대: ' + this.cAge;
}