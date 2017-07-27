/**
 * 
 */

//test
/*function Owner(empNo, empName, empAge, empSex, 
		empSal, empWorkHour,division){*/
//function Customer(cNum,cName,cAge,cSex,cWeight){


//
console.log('------------------ 지점장 정보 출력 --------------------');
var owner = new Owner('o001', 'John Cena', 87, '남자', 3000, 3, '티아카데미');

console.log(owner.toString());
owner.countCash();
console.log(' ');

//
console.log('------------------ 매니저 정보 출력 --------------------');
var mng = [];
mng.push(new Manager());

console.log(' ');


//
console.log('------------------ 사원 정보 출력 --------------------');
var worker = [];
worker.push(new Worker('W001','민요한','23','남자',2300000 ,'09시~18시','cleanse'));
worker.push(new Worker('W002','김만지','27','여자',1300000 ,'09시~18시','bake'));
worker.push(new Worker('W003','김한올','25','여자',1800000 ,'09시~18시','ride'));
worker.push(new Worker('W004','이만규','32','남자',2000000 ,'09시~18시','takeOrder'));
worker.push(new Worker('W005','박성호','28','남자',800000 ,'18시~24시','ride'));
worker.push(new Worker('W006','김지영','20','여자',1500000 ,'18시~01시','bake'));

for(i in worker){
	console.log(worker[i].toString());
}

// 나이순 정렬
worker.sort(function(a,b){return a.getAge()-b.getAge()});
for(i =0;i<worker.length; i++){
    console.log(worker[i].toString());
}

console.log(' ');



console.log(' ');
console.log('------------------ 고객정보 출력 --------------------');
//customer 배열에 push 해보기
var customer = [];	//배열을 만든다 
//값을 Array.push()로 집어넣는데 (new 생성자 사용)
customer.push(new Customer('c001', '뚱이', 27, '남자', 108));
customer.push(new Customer('c002', '집게사장', 56, '남자', 78));
customer.push(new Customer('c003', '진주', 17, '여자', 138));
customer.push(new Customer('c004', '스폰지밥', 24, '남자', 27));
customer.push(new Customer('c005', '징징이', 29, '남자', 62));
customer.push(new Customer('c006', '퐁퐁부인', 47, '여자', 98));

for(i in customer){
	console.log(customer[i].toString());
}


// 0번 고객의 구매 시나리오 구현
console.log(' ');
customer[0].order();		//주문
customer[0].purchase();		//결제

customer[0].eat();
customer[0].pee();





//영업점 시나리오 한편 ㅋ
//odrNo, odrPNum, odrPName, odrEmpName, odrCNum, odrQuan, odrPrice

var orders = [];	//배열선언
//push로 배열에 오더 정보를 집어넣을 수 있음
orders.push(new Order(1, 3, '상품이름', '직원이름', '고객넘버'
		, '물건수량', '총 가격'));
orders.push(new Order(2, '상품번호', '상품이름', '직원이름', '고객넘버'
		, '물건수량', '총 가격'));
orders.push(new Order(3, '상품번호', '상품이름', '직원이름', '고객넘버'
		, '물건수량', '총 가격'));
orders.push(new Order(4, '상품번호', '상품이름', '직원이름', '고객넘버'
		, '물건수량', '총 가격'));
orders.push(new Order(5, '상품번호', '상품이름', '직원이름', '고객넘버'
		, '물건수량', '총 가격'));


//for in 함수로 정보 출력하기
for (i in orders){
	console.log(orders[i].toString());
}
