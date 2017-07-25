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
Employee.prototype.getNo = function(){
	return this.pNum
	}
Employee.prototype.getName = function(){
	return this.pName
	}
Employee.prototype.getPrice = function(){
	return this.pPrice
	}
Employee.prototype.getType = function(){
	return this.pType
	}
Employee.prototype.getWeight = function(){
	return this.pWeight
	}
Employee.prototype.getCalory = function(){
	return this.pCalory
	}




























