function Product(pNum,pName ,pPrice,pType,pWeight,pCalory){
this.pNum=pNum,//제품코드
this.pName =pName ,//제품명
this.pPrice=pPrice, //제품가격
this.pType=pType,//제품종류 (1버거,2사이드메뉴,3음료 )
this.pWeight=pWeight, //제품 중량
this.pCalory=pCalory //칼로리
}   

Product.prototype.getpNum = function(){
    return this.pNum
    }
Product.prototype.getpName = function(){
    return this.pName
    }
Product.prototype.getpPrice = function(){
    return this.pPrice
    }
Product.prototype.getpType = function(){
    return this.pType
    }
Product.prototype.getpWeight = function(){
    return this.pWeight
    }
Product.prototype.getpCalory = function(){
    return this.pCalory
    }

Product.prototype.setpNum = function(pNum){this.pNum=pNum};
Product.prototype.setpName = function(pName){this.pName=pName};
Product.prototype.setpPrice = function(pPrice){this.pPrice=pPrice};
Product.prototype.setpType = function(pType){this.pType=pType};
Product.prototype.setpWeight = function(pWeight){this.pWeight=pWeight};
Product.prototype.setpCalory = function(pCalory){this.pCalory=pCalory};

Product.prototype.toString  = function(){ 'pNum : '+this.pNum+' pName : '+this.pName+' pPrice : '+this.pPrice+' pType : '+this.pType+' pWeight : '+this.pWeight+' pCalory : '+this.pCalory  };



















