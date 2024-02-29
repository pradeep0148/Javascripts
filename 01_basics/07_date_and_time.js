let myDate =new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

// let myCreatedDate =new Date(2024,2,1)
// console.log(myCreatedDate.toDateString());

let myCreatedDate =new Date(2024,2,1 ,5,24)
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp =Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


newDate.toLocaleString('default',{
    weekday:"long"
    
})