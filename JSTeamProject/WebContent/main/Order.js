function Order(odrNo, odrPNum, odrPName, odrEmpName, odrCName, odrQuan, odrPrice){
    this.odrNo = odrNo,                //주문번호
    this.odrPNum = odrPNum,            //상품코드
    this.odrPName = odrPName,        //상품명
    this.odrEmpName = odrEmpName,    //계산원
    this.odrCName = odrCName,            //고객넘버
    this.odrQuan = odrQuan,            //수량
    this.odrPrice = odrPrice        //가격

}

//get
Order.prototype.getOdrNo = function(){ return this.odrNo }//주문번호
Order.prototype.getOdrPNum = function(){ return this.odrPNum }//상품코드
Order.prototype.getOdrPName = function(){ return this.odrPName }//상품명
Order.prototype.getOdrEmpName = function(){ return this.odrEmpName }//계산원
Order.prototype.getOdrCName = function(){ return this.odrCName }//고객넘버
Order.prototype.getOdrQuan = function(){ return this.odrQuan }//수량
Order.prototype.getOdrPrice = function(){ return this.odrPrice }//가격

//set
Order.prototype.setOdrNo = function(){ this.odrNo = odrNo }//주문번호
Order.prototype.setOdrPNum = function(){ this.odrPNum = odrPNum }//상품코드
Order.prototype.setOdrCName = function(){ this.odrPName = odrPName }//상품명
Order.prototype.setOdrEmpName = function(){ this.odrEmpName = odrEmpName }//계산원
Order.prototype.setOdrCNum = function(){ this.odrCName = odrCName }//고객넘버
Order.prototype.setOdrQuan = function(){ this.odrQuan = odrQuan }//수량
Order.prototype.setOdrPrice = function(){ this.odrPrice = odrPrice }//가격

//toString()
Order.prototype.toString = function(){
	return '번호: ' + this.odrNo + ' 상품코드: ' + this.odrPNum +
		' 상품명: ' + this.odrPName + ' 계산원: ' + this.odrEmpName +
		'\n고객명: ' + this.odrCName + ' 수량: ' + this.odrQuan +
		' 가격: ' + this.odrPrice;
}