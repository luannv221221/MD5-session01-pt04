// khai báo biến 
// khai báo viến var 
var userName = "Nguyễn Văn A"; // string
userName = 19; // numbrer
userName = []; // array
userName = {}; // object

// var có thẻ khai báo lại 
var demo = "Nguyễn Văn A";
var demo = "Nguyễn Văn B";
demo = "nguyễn Văn C";
console.log(demo);
console.log(test);
var test = "OK";
// for (var index = 0; index < 5; index++) {
//     console.log(index);
// }
// console.log(index);
// Khai với let 
// + vẫn gán lại giá trị 
// + Không khai áo lại 

// let fullName = "Nguyễn Văn Minh"; Không khai báo lại 
let fullName = "Nguyễn Ngọc Đại";
console.log("FullName", fullName);

for (let index = 0; index < 5; index++) {
    console.log(index);
}
// console.log(index);
// Từ khóa const 
// không thể khai báo lại 
// Không thể gán giá trị 
const PI = 3.14;
//const PI = 3.21; // Không thể khai báo lại
PI = 3.15;
console.log(PI);