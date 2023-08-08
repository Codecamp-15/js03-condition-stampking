// จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลข
//     - ถ้า input หารด้วย 2 ลงตัว ให้โชว์ข้อความ “Even number”
// - ถ้า input หารด้วย 2 ไม่ลงตัว ให้โชว์ข้อความ “Odd number”
let number = prompt("Write an even number!");

if (number % 2 == 0) {
    alert('even number');
} else {
    alert("Odd number!");
}
