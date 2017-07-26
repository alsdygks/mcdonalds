/**
 *         부모 Class?인 Person
 */

function Person(no, name, age, sex){//}, address){
    this.no = no,
    this.name = name,
    this.age = age,
    this.sex = sex//,
//    this.address = address
} 

//getters n setters
Person.prototype.getNo = function(){return this.no;}
Person.prototype.getName = function(){return this.name;}
Person.prototype.getAge = function(){return this.age;}
Person.prototype.getSex = function(){return this.sex;}
//Person.prototype.getAddress = function(){return this.address;}

Person.prototype.setNo = function(no){this.no = no;}
Person.prototype.setName = function(name){this.name = name;}
Person.prototype.setAge = function(age){this.age = age;}
Person.prototype.setSex = function(sex){this.age = age;}
//Person.prototype.setAddress = function(address){this.address = address;} 