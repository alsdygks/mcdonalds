function Customer(cNum,cName,cAge,cSex,cWeight){
	Person.call(this, cNum, cName,cAge,cSex);
	this.cWeight = cWeight
}

Customer.prototype = new Person();

//getters n setters
Customer.prototype.getcWeight = function(){return this.cWeight;}//고객 몸무게

Customer.prototype.setcWeight = function(cWeight){this.cWeight = cWeight;}//고객 몸무게

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
Customer.prototype.pee = function(){
	console.log(this.name + ' 고객님의 현재 몸무게: ' + this.cWeight);
	console.log(this.name + ' 고객님이 화장실로 달려갔습니다.');
	this.cWeight -= 1;
	console.log(this.name + ' 고객님이 화장실에 다녀와 몸무게가 줄었습니다.' + 
				'현재 몸무게: ' + this.cWeight);
}


//toString
Customer.prototype.toString = function(){
    return '고객번호: ' + this.no +
    	   '  고객명: ' + this.name +
    	   '  나이: ' + this.age +
    	   '  성별: ' + this.sex;	//wat bout console.log?
}