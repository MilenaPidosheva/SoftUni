function nextDay(year, month, day){
	let date = new Date(year, month - 1, day);
	let tomorrow = new Date(year, month -1, date.getDate()+1);
	console.log(`${tomorrow.getFullYear()}-${tomorrow.getMonth()+1}-${tomorrow.getDate()}`);
}
nextDay(2016, 9, 30);


// function nextDay(year,month,day){
//     let date = new Date(year, month-1, day);
//     let oneDay = 24 * 60 * 60 * 1000;
//     let nextDate = new Date(date.getTime() + oneDay);
//     return nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1)
//         +  '-' + nextDate.getDate();
// }
//console.log(nextDay(2016, 9, 30)); 


// function nextDay(y, m, d) {
//     let date=new Date(y, m-1,d);
//     let tomorrow=new Date(y,m-1,date.getDate()+1);
//     console.log(`${tomorrow.getFullYear()}-${tomorrow.getMonth()+1}-${tomorrow.getDate()}`);
// }