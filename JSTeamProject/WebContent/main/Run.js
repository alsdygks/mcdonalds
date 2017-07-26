/**
 * 
 */

//test
/*function Owner(empNo, empName, empAge, empSex, 
		empSal, empWorkHour,division){*/
//function Customer(cNum,cName,cAge,cSex,cWeight){


//
var owner = new Owner('o001', 'John Cena', 87, '남자', 3000, 3, '티아카데미');

console.log(owner.toString());
owner.countCash();

//customer 배열에 push 해보기
var customer = [];
customer.push(new Customer('c001', '뚱이', 27, '남자', 108));
customer.push(new Customer('c002', '집게사장', 56, '남자', 78));
customer.push(new Customer('c003', '진주', 17, '여자', 138));
customer.push(new Customer('c004', '스폰지밥', 24, '남자', 27));
customer.push(new Customer('c005', '징징이', 29, '남자', 62));
customer.push(new Customer('c006', '퐁퐁부인', 47, '여자', 98));

console.log('------------------ 고객정보 출력 --------------------');
for(i in customer){
	console.log(customer[i].toString());
}

console.log();
customer[0].eat();
