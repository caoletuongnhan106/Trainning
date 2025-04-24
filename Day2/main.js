// Hàm (function)
// 1. Hàm?
// - Một khối mã
// - Làm 1 việc cụ thể

// 2. Loại hàm
// - Built-in
// - Tự định nghĩa

// 3.Tính chất
// - Không thực thi khi định nghĩa
// - Sẽ thực thi khi được gọi
// - Có thể nhận tham số
// - Có thể trả về 1 giá trị

// 4.Tạo hàm đầu tiên
    function showDialog(){
        alert('Hi xin chao cac ban!')
    }
    showDialog();

// Tham số hàm
    function writeLog(message){
        console.log(message)
    }
    writeLog('Test message');
// Tham số kiểu dữ liệu
    function writeLog(message){
        console.log(typeof message)
    }
    writeLog('JavaScript', 'PHP');
// Truyền nhiều tham số
    function writeLog(message, message2){
        console.log(message)
        console.log(message2)
    }
    writeLog('TEST','TEST_2');
// Truyền nhiều tham số kiểu if
    function writeLog(message,message2){
        if(message){
            console.log(message)
        } 
        if(message2){
            console.log(message2)
        }
    }
    writeLog('Log 1','Log 2');
// Arguments
    function writeLog(){
        console.log(arguments)
    }
    writeLog('Log 1','Log 2');
// Arguments for of
    function writeLog(){
        for (var param of arguments){
            console.log(param)
        }
    }
    writeLog('Log 1','Log 2','Log 3');
// Return trong function
    function cong(a,b) {
        return a + b;
    }
    var result = cong(2,8);
    console.log(result)
// Khai báo biến trong hàm
    function showMessage(){
        function showMessage2(){
            console.log('Message 2');
        }
        showMessage2
    }
    showMessage
// 1. Declaration function
    function showMessage(){
        console.log('Declaration function');
    }
// 2. Expression function
    var showMessage2 = function(){
        console.log('Expression function')
    }
// Tạo chuỗi
    var fullName = 'Nhan Cao'
    console.log(fullName)
// Tạo chuỗi sử dụng backslash
    var fullName = 'Nhan Cao \'is Developer\''
    console.log(fullName)
// Độ dài chuỗi
    console.log(fullName.length)
// Template string ES6
    var firstName = 'Nhan';
    var lastName = 'Cao';
    console.log(`Tôi là: ${firstName} ${lastName}`);
// Làm việc với chuỗi
    var myString = 'Hoc JS tai F8!'
// 1.Length
    console.log(myString.length)
// 2. Find index
    console.log(myString.search('JS'))
// 3. Cut string
    console.log(myString.slice(4,6))
// 4. Replace
    console.log(myString.replace(/JS/g, 'JavaScript'))
// 5. Convert to upper case
    console.log(myString.toLocaleUpperCase())
// 6. Convert to lower case
    console.log(myString.toLowerCase())
// 7. Trim (loại bỏ space ở 2 đầu)
    console.log(myString.trim())
// 8. Split
    var languages = 'JavaScript, PHP, Ruby';
    console.log(languages.split(', '))
// 9. Get a character by index
    const myString2 = 'Nhan Cao';
    console.log(myString2[1])

// Number - toString (chuyển number thành string)
    var age = 18;
    console.log(age.toString());
//Number - toFixed (làm tròn số, số thập phân)
    var PI = 3.14000;
    console.log(PI.toFixed(2))

// Tạo mảng
    var language = [
        'Javascript',
        'PHP',
        'Ruby',
        null,
        {},
        123,
        function(){

        },
    ]
// Kiểm tra Array
    console.log(Array.isArray(new Array(1,2)))
// Làm việc với Array
    var languages = [
        'Javascript',
        'PHP',
        'Ruby',
    ]
//1. toString (dấu ,  mặc định không thể thay đổi)
    console.log(languages.toString()) //kết quả: Javascript,PHP,Ruby
//2. Join
    console.log(languages.join(' - ')) //kết quả: Javascript - PHP - Ruby
//3. Pop (xóa đi phần tử ở cuối mảng, và trả vè chính cái phần tử đã xóa)
    console.log(languages.pop())
    //kết quả: Ruby
    console.log(languages)
    //['Javascript','PHP']
//4. Push (thêm 1 hoặc nhiều phần tử ở cuối mảng và trả về độ dài mới của mảng)
    console.log(languages.push('Dart', 'Java'))
    //kết quả: 5
    console.log(languages)
    //['Javascript','PHP','Ruby','Dart','Java']
//5. Shift (xóa đi phần tử ở đầu mảng, và trả vè chính cái phần tử đã xóa)
    console.log(languages.shift())
    //kết quả: Javascript
    console.log(languages)
    //['PHP','Ruby']
//6. UnShift (thêm 1 hoặc nhiều phần tử ở đầu mảng và trả về độ dài mới của mảng)
    console.log(languages.unshift('Dart', 'Java'))
    //kết quả: 5
    console.log(languages)
    //['Dart','Java','Javascript','PHP','Ruby',]
//7. Splice (xóa hoặc chèn 1 phần từ bất tử bất kỳ trong array)
// Xóa
    languages.splice(1, 2) //1 là số chỉ con trỏ đến vị trí muốn xóa, 2 là muốn xóa mấy phần tử
    console.log(languages) //kết quả: ['Javascript']
// Chèn
    languages.splice(1, 1, 'Dart') //1 là số chỉ con trỏ đến vị trí muốn chèn, 1 là muốn xóa mấy phần tử, 'Dart' phần tử muốn chèn
    console.log(languages) // kết quả: ['Javascript','Dart','Ruby']
//8. Concat (nối 2 array)
    var languages = [
        'Javascript',
        'PHP',
        'Ruby',
    ];
    var languages2 = [
        'Dart',
        'Java',
    ];
    console.log(languages.concat(languages2))
    // kết quả: ['Javascript','PHP','Ruby','Dart','Java']
//9. Slice (cắt phần tử của array)
    console.log(languages.slice(1,2)) //1 là vị trí bắt đầu cắt, 2 là vị trí kết thúc cắt
    //kết quả: ['PHP']

// Object
    var emailKey =  'email';
    var myInfo = {
        name: 'Nhan Cao',
        address: 'Ho Chi Minh',
        age: 24,
        [emailKey]: 'caoletuongnhan@gmail.com',
        getName:  function(){
            return this.name;
        }
    };
    console.log(myInfo.getName());
// Function -> Method (phương thức)
// Other -> Property (thuộc tính)

// Object constructor (xây dựng đối tượng)
    function User(firstName, lastName, avatar){
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;

        this.getName = function(){
            return `${this.firstName} ${this.lastName} ${this.avatar}`
        }
    }
        var author = new User('Son','Dang','Avatar');
        var user = new User('Nhan','Cao','Avatar');
//Object prototype
    function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function(){
        return `${this.firstName} ${this.lastName} ${this.avatar}`
    }
}   
    User.prototype.className = 'F8';
    User.prototype.getClassName = function(){
        return this.className;
    }

    var user = new User('Son','Dang','Avatar 1');
    var user2 = new User('Nhan','Cao','Avatar 2');

    console.log(user.className);
    console.log(user2.getClassName());