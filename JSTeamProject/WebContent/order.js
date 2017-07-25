/**
 * 
 */
function Order(odrNo, odrPNum, odrPName, odrEmpName, odrCNum, odrQuan, odrPrice ,odrStore){
	this.odrNo = odrNo,				//주문번호
	this.odrPNum = odrPNum,			//상품코드
	this.odrPName = odrPName,		//상품명
	this.odrEmpName = odrEmpName,	//계산원
	this.odrCNum = odrCNum,			//고객넘버
	this.odrQuan = odrQuan,			//수량
	this.odrPrice = odrPrice,		//가격
	this.odrStore = odrStore		//판매점보
}

//get
Order.prototype.getOdrNo = function(){ return this.odrNo }//주문번호
Order.prototype.getOdrPNum = function(){ return this.odrPNum }//상품코드
Order.prototype.getOdrPName = function(){ return this.odrPName }//상품명
Order.prototype.getOdrEmpName = function(){ return this.odrEmpName }//계산원
Order.prototype.getOdrCNum = function(){ return this.odrCNum }//고객넘버
Order.prototype.getOdrQuan = function(){ return this.odrQuan }//수량
Order.prototype.getOdrPrice = function(){ return this.odrPrice }//가격
Order.prototype.getOdrStore = function(){ return this.odrStore }//판매점보

//set
Order.prototype.setOdrNo = function(){ this.odrNo = odrNo }//주문번호
Order.prototype.setOdrPNum = function(){ this.odrPNum = odrPNum }//상품코드
Order.prototype.setOdrPName = function(){ this.odrPName = odrPName }//상품명
Order.prototype.setOdrEmpName = function(){ this.odrEmpName = odrEmpName }//계산원
Order.prototype.setOdrCNum = function(){ this.odrCNum = odrCNum }//고객넘버
Order.prototype.setOdrQuan = function(){ this.odrQuan = odrQuan }//수량
Order.prototype.setOdrPrice = function(){ this.odrPrice = odrPrice }//가격
Order.prototype.setOdrStore = function(){ this.odrStore = odrStore }//판매점보


