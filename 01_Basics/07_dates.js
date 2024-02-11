//since the midnight of January 1,1970,UTC
//stored in ms
let d=new Date()
console.log(d);
console.log(d.toString());
console.log(d.toISOString());
console.log(d.toDateString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleString());
console.log(typeof d);
let d1 = new Date(2024, 0, 23);//Month start from 0
console.log(d1.toString());
let d2 = new Date("2024-01-23")
console.log(d2.toLocaleString());

let t = Date.now();
console.log(t);//ms from Jan 1 ,1970
console.log(d.getTime());//ms from Jan 1 ,1970
console.log(Math.floor(Date.now()/1000));//in seconds
let d3 =new Date();
console.log(d3.getFullYear());
console.log(d3.getDay());
console.log(d3.getMonth());
console.log(d3.toLocaleString());
d3.toLocaleString("default",{
    weekday: "long",
    month: "numeric",
    year: "numeric"
})
console.log(d3.toLocaleString());