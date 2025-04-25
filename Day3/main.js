// I. Let, const
// *Điểm giống nhau var, let, const:
// 1. Đều có thể khai báo ra nhiều biến
// 2. Đều có thể gán bất cứ giá trị cho biến

// *Điểm khác nhau:
// 1. Cái phạm vi (Scope)
// Code block: if else, loop, {}, ...
// - var: có thể truy cập trong và ngoài scope
// - let, const: chỉ truy cập được trong scope
//TH1:
    if(true){
        var course = 'Javascript basic!';
    }
    console.log(course); 
//kết quả: var chạy được ; let, const báo lỗi
//TH2:
    {
        const course = 'Javascript basic!';
        {
            {
                console.log(course);
            }
        }
    }
//kết quả: var, let, const đều chạy được

// 2. Hosting
// - var: được Hosting
// - let, const: không được Hosting
    a = 1;
    var a = 1;
    console.log(a);
//kết quả: var chạy được; let, const báo lỗi

// 3. Assignment
// - const: không gắn lại được biến
// - var, let: có thể gắn lại được
    let a = 1;
    a = 100;
    console.log(a);
//kết quả: var, let chạy được (100); const báo lỗi

// 4. Khi nào dùng var, const, let
// - var: code thuần
// - const, let: dùng thư viện Babel
// + const: khi định nghĩa biến và không gán lại biến đó
// + let: khi cần gán lại giá trị cho biến
    let isSuccess = false;
    if (true){
        isSuccess = true;
    }
//TH2
    const a = {
        name: 'Javascript'
    };
    a.name = 'PHP';
    console.log(a.name);
//kết quả: const chạy được (PHP) vì code trên là gán lại thuộc tính cho a, chứ không phải gán lại a

// II. Arrow function (giúp code ngắn gọn hơn)
//TH1:
//Express function
    // const logger = function(log){
    //     console.log(log);
    // }
    // logger('Message...')
// Chuyển qua Arrow function
    const logger = (log) => {
    console.log(log);       
    }   
    logger('Message...')
//TH2:
    // const sum = (a, b) => {
    //     return a + b;
    // }
    console.log(sum(2,2));
//- Có thể viết ngắn hơn: (sau dấu => có thể hiểu là return, trừ khi có {} thì trong khối code phái có return)
    const sum = (a, b) => a +_b;
    console.log(sum(2, 2));
//- Muốn return object: (thêm dấu () trước object)
    const cong = (a, b) => ({a: a, b: b});
    console.log(sum(2, 2));
//- Arrow function có duy nhất 1 tham số thì có thể bỏ ()
    // const logger = log => console.log(log);       
    // logger('Message...')
//- Arrow function không có context: return this.
//- Không dùng làm function constructor được:
// Dưới đây là function constructor:
    // const Course = function(name, price) {
    //     this.name = name;
    //     this.price = price;
    // }
    // const jsCourse = new Course ('JS', 1000)
    // console.log(jsCourse)
// Không thể viết như trên với Arrow function
    const Course = (name, price) => {
        this.name = name;
        this.price = price;
    }
    const jsCourse = new Course ('JS', 1000)
    console.log(jsCourse) //kết quả sẽ báo lỗi

//Spread (...)
// Dùng để nối mảng
    var array1 = ['Javascript', 'Ruby', 'PHP'];
    var array2 = ['ReactJS', 'Dart'];
    var array3 = [...array1, ...array2];
    console.log(array3); //kết quả: ['Javascript', 'Ruby', 'PHP','ReactJS', 'Dart']
// Dùng hợp nhất 2 object lại với nhau
    var object1 = {
        name: 'Javascript'
    };
    var object2 = {
        price: 1000
    };
    var object3 = {
        ...object1,
        ...object2
    };
    console.log(object3) //kết quả: {name: 'Javascript', price: 1000}
// Dùng để truyền tham số cho hàm
    var array = ['Javascript', 'Ruby', 'PHP'];
    function logger(a, b , c){
        console.log(a, b, c);
    }
    logger(...array); //kết quả: Javascript Ruby PHP