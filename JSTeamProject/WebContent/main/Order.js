function Order(odrNo, odrPName, odrEName, odrCName, odrCnt, odrPrice){
    this.odrNo = odrNo,        //주문번호
    this.odrPName = odrPName,  //상품명
    this.odrEName = odrEName,  //계산원
    this.odrCName = odrCName,  //고객넘버
    this.odrCnt = odrCnt,      //수량
    this.odrPrice = odrPrice   //가격

}

//get
Order.prototype.getodrNo = function(){ return this.odrNo }//주문번호
Order.prototype.getodrPName = function(){ return this.odrPName }//상품명
Order.prototype.getodrEName = function(){ return this.odrEName }//계산원
Order.prototype.getodrCName = function(){ return this.odrCName }//고객넘버
Order.prototype.getodrCnt = function(){ return this.odrCnt }//수량
Order.prototype.getodrPrice = function(){ return this.odrPrice }//가격

//set
Order.prototype.setodrNo = function(odrNo){ this.odrNo = odrNo }//주문번호
Order.prototype.setodrPName = function(odrPName){ this.odrPName = odrPName }//상품명
Order.prototype.setodrEName = function(odrEName){ this.odrEName = odrEName }//계산원
Order.prototype.setodrCName = function(odrCName){ this.odrCName = odrCName }//고객넘버
Order.prototype.setodrCnt = function(odrCnt){ this.odrCnt = odrCnt }//수량
Order.prototype.setodrPrice = function(odrPrice){ this.odrPrice = odrPrice }//가격


//toString
Customer.prototype.toString = function(){
    return '주문번호' + this.odrNo + ', 상품명: ' + this.odrPName 
            + ', 계산원:' + this.odrEName + ', 고객넘버: ' + this.odrCName
            + ', 수량: ' + this.odrCnt+ ', 가격: ' + this.odrPrice;
}

