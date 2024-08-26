//> Date library
//> Date objects represent a single moment in time
//> represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

let myDate = new Date();
console.log(myDate); // 2024-08-26T06:12:31.221Z
console.table([
    myDate.getDate(), // 26
    myDate.getMonth() + 1, // 8 (+1 because it starts from 0)
    myDate.getFullYear(), // 2024
    myDate.getHours(), // 12
    myDate.getMinutes(), // 9
    myDate.getSeconds(), // 41
]);
console.table([
    myDate.toString(), // 'Mon Aug 26 2024 11:43:43 GMT+0530 (India Standard Time)'
    myDate.toDateString(), // 'Mon Aug 26 2024'
    myDate.toTimeString(), // '11:46:56 GMT+0530 (India Standard Time)'
    myDate.toLocaleDateString(), // '26/8/2024'
    myDate.toLocaleTimeString(), // '11:48:28 am'
    myDate.toISOString(), // '2024-08-26T06:17:44.214Z'
    myDate.toJSON(), // '2024-08-26T06:19:09.152Z'
]);

let myCreatedDate = new Date(2024, 0, 26, 5, 8, 9); // yyyy, mm (0->jan), dd, hour, min, sec
console.log(myCreatedDate.toLocaleString()); // 26/1/2024, 5:08:09 am

let myCreatedDate2 = new Date("2024-01-26 13:30:35"); // yyyy-mm-dd hh:min:sec
console.log(myCreatedDate2.toLocaleString()); // 26/1/2024, 1:30:35 pm

let myCreatedDate3 = new Date("01-26-2024"); // mm-dd-yyyy
console.log(myCreatedDate3.toLocaleString()); // 26/1/2024, 12:00:00 am

let timeStamp = Date.now(); // returns miliseconds passed since the epoch
console.log(timeStamp); // 1724654005859
// useful for calculating time durations