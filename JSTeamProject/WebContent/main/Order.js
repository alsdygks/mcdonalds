function Order(odrNo, odrPName, odrEName, odrCName, odrCnt, odrPrice){
    this.odrNo = odrNo,        //주문번호
    this.odrPName = odrPName,  //주문된 상품명
    this.odrEName = odrEName,  //계산원 이름
    this.odrCName = odrCName,  //주문한 고객 이름
    this.odrCnt = odrCnt,      //주문수량
    this.odrPrice = odrPrice   //주문가격

}

//get
Order.prototype.getodrNo = function(){ return this.odrNo }//주문번호
Order.prototype.getodrPName = function(){ return this.odrPName }//주문된 상품명
Order.prototype.getodrEName = function(){ return this.odrEName }//계산원 이름
Order.prototype.getodrCName = function(){ return this.odrCName }//주문한 고객 이름
Order.prototype.getodrCnt = function(){ return this.odrCnt }//주문수량
Order.prototype.getodrPrice = function(){ return this.odrPrice }//주문가격

//set
Order.prototype.setodrNo = function(odrNo){ this.odrNo = odrNo }//주문번호
Order.prototype.setodrPName = function(odrPName){ this.odrPName = odrPName }//주문된 상품명
Order.prototype.setodrEName = function(odrEName){ this.odrEName = odrEName }//계산원 이름
Order.prototype.setodrCName = function(odrCName){ this.odrCName = odrCName }//주문한 고객 이름
Order.prototype.setodrCnt = function(odrCnt){ this.odrCnt = odrCnt }//주문수량
Order.prototype.setodrPrice = function(odrPrice){ this.odrPrice = odrPrice }//주문가격


//toString
Order.prototype.toString = function(){
    return '주문번호' + this.odrNo + ', 주문된 상품명: ' + this.odrPName 
            + ', 계산원 이름:' + this.odrEName + ', 주문한 고객 이름: ' + this.odrCName
            + ', 주문수량: ' + this.odrCnt+ ', 주문가격: ' + this.odrPrice;
}

