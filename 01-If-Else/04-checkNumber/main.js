//  จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลข
//     - ถ้า input มากกว่า 0 ให้โชว์ข้อความ “Positive number”
// - ถ้า input เท่ากับ 0 ให้โชว์ข้อความ “Zero”
// - ถ้า input น้อยกว่า 0 ให้โชว์ข้อความ “Negative number”
// - ถ้า input ที่รับเข้ามาไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”

// let num = prompt('Enter number!');

// if (num > 0) {
//     alert("Positive number");
// } else if (num == 0) {
//     alert("Negative number");
// } else {
//     alert("Invalid number");
// }


let num = prompt('Enter number');

if (num.trim() === '' || num === null || isNaN(num)) {
    alert('Invalid Number');
} else if (+num > 0) {
    alert('Positive Number');
} else if ()


