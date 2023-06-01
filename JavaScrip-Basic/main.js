// Khai báo Biến
// var fullName='Nguyen Minh THuan';
// var age=23

// // Gọi Hàm Thông Báo 
// alert(fullName);
// alert(age)


/** Giới Thiệu Một số built-in
 * 1.Alert
 * 2.Console, console.log('') 
 * 3.Confirm
 * 4.Prompt
 * 5.Set Timeout
 * 6.Set Interval
 */

var fullName=('THuận nhỏ');

console.error(fullName)

// // Dùng Để xác Nhận
confirm('Xác Nhận đủ tuổi')


// // dùng để xác nhận và có text đễ người dùng nhập vào
prompt('Xác Nhận đủ tuổi')

// dùng để chuyền 1 function và thời gian và giá trị thời gian đươc tín bằng mili giây
setTimeout(function() {
    alert('thông báo')
},2000)// 2 giây

// 
setInterval(function() {
    console.log('Day Là Log'+Math.random)
},2000)// 2 giây

