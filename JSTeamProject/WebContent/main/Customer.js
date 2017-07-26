function Customer(cNum,cName,cGender,cAge){
this.cNum=cNum,//고객 넘버
this.cName=cName,//고객 이름
this.cGender=cGender,//고객 성별
this.cAge=cAge//고객 연령대

}

//getters n setters
Customer.prototype.getcNum = function(){return this.cNum;}//고객 넘버
Customer.prototype.getcName = function(){return this.cName;}//고객 이름
Customer.prototype.getcGender = function(){return this.cGender;}//고객 성별
Customer.prototype.getSex = function(){return this.sex;}// 고객 연령대

Customer.prototype.setcNumo = function(cNum){this.cNum = cNum;}//고객 넘버
Customer.prototype.setcName = function(cName){this.cName = cName;}//고객 이름
Customer.prototype.setcGender = function(cGender){this.cGender = cGender;}//고객 성별
Customer.prototype.setcAge = function(cAge){this.cAge = cAge;}//고객 연령대

//toString
Customer.prototype.toString = function(){
    return '고객 넘버' + this.cNum + ', 고객 이름: ' + this.cName 
            + ', 고객 성별:' + this.cGender + ', 고객 연령대: ' + this.cAge;
}