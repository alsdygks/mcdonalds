/**
 * 
 */
function Product(pNum,pName ,pPrice,pType,pWeight,pCalory){
	this.pNum=pNum,//제품코드
	this.pName =pName ,//제품명
	this.pPrice=pPrice, //제품가격
	this.pType=pType,//제품종류 (1버거,2사이드메뉴,3음료 )
	this.pWeight=pWeight, //제품 중량
	this.pCalory=pCalory //칼로리
}
Employee.prototype.getpNum = function(){
	return this.pNum
}
Employee.prototype.getpName = function(){
	return this.pName
}
Employee.prototype.getpPrice = function(){
	return this.pPrice
}
Employee.prototype.getpType = function(){
	return this.pType
}
Employee.prototype.getpWeight = function(){
	return this.pWeight
}
Employee.prototype.getpCalory = function(){
	return this.pCalory
}
// 위  get 아래  set 
Employee.prototype.setpNum = function(pNum){
	this.pNum=pNum;
}
Employee.prototype.setpName = function(pName){
	this.pName=pName;
}
Employee.prototype.setpPrice = function(pPrice){
	this.pPrice=pPrice;
}
Employee.prototype.setpType = function(pType){
	this.pType=pType;
}
Employee.prototype.setpWeight = function(pWeight){
	this.pWeight=pWeight;
}
Employee.prototype.setpCalory = function(pCalory){
	this.pCalory=pCalory;
}






























