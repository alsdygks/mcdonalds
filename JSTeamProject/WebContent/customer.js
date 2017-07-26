/**
 * 
 */


function Customer(cNum,cName,cGender,cAge){
this.cNum=cNum,//고객 넘버
this.cName=cName,//고객 이름
this.cGender=cGender,//고객 성별
this.cAge=cAge// 고객 연령대

}

Customer.prototype.getcNum = function(){
	return this.cNum
};
Customer.prototype.getcName = function(){
	return this.cName
};
Customer.prototype.getcGender = function(){
	return this.cGender
};
Customer.prototype.getcAge = function(){
	return this.cAge
};
//게터세터
Customer.prototype.setcNum = function(cNum){
	 this.cNum=cNum
};
Customer.prototype.setcName = function(cName){
	 this.cName=cName
};
Customer.prototype.setcGender = function(cGender){
	 this.cGender=cGender
};
Customer.prototype.setcAge = function(cAge){
	 this.cAge=cAge
};










