alert('Hello World ')

var fullName="Cao Le Tuong Nhan";
var age="24";
alert(fullName);
alert(age);

// 1.Mot so ham built in
// 1.1.Console
console.log(fullName);
// 1.2.Confirm
confirm('Xac nhan ban chua du tuoi!');
// 1.3.Prompt
prompt('Ban bao nhiu tuoi:')
// 1.4.Set timeout
setTimeout(function(){
    alert('Đây là thông báo')
}, 2000);
// 1.5.Set interval
setInterval(function(){
    console.log('Thong bao'+ Math.random())
},1000)

// 2. Toán từ trong JS
// 2.1 Toán tử so sánh - Comparison 
    var a = 1;
    var b = 2;
    if (a<b){
        alert('Dung');
    }
// 2.2 Toán tử logic - Logical
    var a = 1;
    var b = 2;
    if (a>0 && b>0){
        alert('a & b lớn hơn 0');
    }

    //3.Toán tử số học
// + -> Cộng
// - -> Trừ
// * -> Nhân
// ** -> Lũy thừa
// / -> Chia
// % -> Chia lấy số dư
// ++ -> Tăng 1 giá trị số
// -- -> Giảm 1 giá trị số

// 4. Toán tử gán
// x = y -> x = y
// x += y -> x = x + y
// x -= y -> x = x - y
// x *= y -> x = x * y
// x /= y -> x = x / y
// x **= y -> x = x ** y

// 5. Toán tử chuỗi
    var firstName = 'Nhan';
    var lastName = 'Cao';

    console.log(firstName + " " + lastName);

// 6. Toán tử so sánh
// == -> Bằng
// != -> Không Bằng
// > -> Lớn hơn
// < -> Nhỏ hơn
// >= -> Lớn hơn hoặc bằng
// <= -> Nhỏ hơn hoặc bằng
    var a = 1;
    var b = 2;
    if (a == b) {
        console.log('Điều kiện đúng!');
    } else {
        console.log ('Điều kiện sai!');
    }
// ===
    var a = '1';
    var b = 1;
    console.log(a === b); //kết quả false, tại vì so sánh value và data
//  !==
    var a = '1';
    var b = 1;
    console.log(a !== b); // kết quả true

// 7. Boolean
    var a = 1;
    var b = 2;
    var isSuccess = a > b;
    console.log(isSuccess);

//8. Kiểu dữ liệu
// 8.1 Number Type
    var a = 1;
    var b = 2;
    var c = 1.5;
    console.log(typeof a)
// 8.2 String type
    var fullName = 'Nhan Cao';
    console.log(typeof fullName)
// 8.3 Boolean type
    var isSuccess = true;
    console.log(typeof isSuccess)
// 8.4 Undefined type
    var age;
// 8.5 Null
    var isNull = null; //nothing
// 8.6 Symbol
    var id = Symbol('id'); //unique
    var id2 = Symbol('id'); //unique
// Function
    var myFunction = function(){
        alert('Hi, Xin chào các bạn!');
    }
// Object types
    var myObject = {
        name: 'Nhan Cao',
        age: 24,
        address: 'Ho Chi Minh',
    }

    var myArray = [
        'JavaScript',
        'PHP',
        'Ruby'
    ];
    console.log(typeof myArray)

// Toán tử và kiểu dữ liệu
// &&
        var a = 1;
        var b = 2;
        var result = 'A' && 'B' && 'C';
        if (a == b) {
            console.log('Điều kiện đúng!');
        } else {
            console.log ('Điều kiện sai!');
        } 
        // kết quả 'Điều kiện đúng!'
        var a = 1;
        var b = 2;
        var result = 'A' && 'B' && NaN;
        if (a == b) {
            console.log('Điều kiện đúng!');
        } else {
            console.log ('Điều kiện sai!');
        } 
        // kết quả 'Điều kiện sai!', nó nằm trong 6 kiểu boolean false
