// I.Loop (Vòng lặp)
//1. for (lặp với điều kiện đúng)
    for (let i = 1; i <= 100; i++){
        console.log(i)
    } //kết quả: In ra 1-100
// for of Array
    let myArray = [
        'Javascript',
        'PHP',
        'Java',
        'Python'
    ];
    let arrayLength = myArray.length;
    for (let i = 0; i < arrayLength; i++){
        console.log(myArray[i]);
    }
//2.for/in (lặp qua key của đối tượng)
//Đối với Object
    let myInfo = {
        name : 'Nhan Cao',
        age: 24,
        address: 'Ho Chi Minh'
    };
    for (let key in myInfo) {
        console.log(myInfo[key]); //kết quả: Nhan Cao 24 Ho Chi Minh,
        console.log(key); //kết quả: name age address
    }
//Đối với Array
    let languages = [
        'Javascript',
        'PHP',
        'Ruby',
    ];
    for (let key in languages){
        console.log(key); //kết quả: 0 1 2 
        console.log(languages[key]); //kết quả: Javascript PHP Ruby
    }
//Đối với chuỗi
    let language = "Python";
    for (let key in language){
        console.log(key); //kết quả: 0 1 2 3 4 5
        console.log(language[key]); //két quả: P y t h o n
    }

// II.Callback
// - Là hàm (function) được truyền qua đối số khi gọi hàm khác
//1. Là hàm
//2. Được truyền qua đối số
//3. Được gọi lại (trong hàm nhận đối số)
const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  };
  
  const showOk = () => alert("You agreed.");
  const showCancel = () => alert("You canceled the execution.");
  
  ask("Do you agree?", showOk, showCancel);
//Các đối số showOkvà showCancel của ask được gọi là hàm gọi lại hoặc chỉ là lệnh gọi lại   
//VD2:
    let course = [
        'Javascript',
        'PHP',
        'Ruby',
    ];
    const mFunction = course => {
        console.log(course);
    }
    course.map(mFunction); //map() sẽ lặp từng phần tử của course và gọi mFunction với phần tử đó.

// III.forEach
//1. Hiển thị từng phần tử của mảng
    let arr = ["Bilbo", "Gandalf", "Nazgul"];
    arr.forEach(function(item) {
    alert(item);
    });
//kết quả: Bilbo Gandalf Nazgul
//2. Chi tiết hơn về vị trí của chúng trong mảng 
    let characters = ["Bilbo", "Gandalf", "Nazgul"];
    function showCharacterInfo(item, index, array) { //showCharacterInfo là callback truyền vào forEach
    let message = item + " is at index " + index + " in " + array;
    alert(message);
    }
    characters.forEach(showCharacterInfo);
//kết quả: Bilbo is at index 0 in Bilbo,Gandalf,Nazgul;
// Gandalf is at index 1 in Bilbo,Gandalf,Nazgul;
// Nazgul is at index 2 in Bilbo,Gandalf,Nazgul

// IV.Promise
// Sync (Đòng bộ) / Async (Bất đồng bộ)
// Có 3 trạng thái:
//1. Penđing
//2. Fulfilled
//3. Reject
//Lý thuyết:
// Tạo Promise (xử lý bất đồng bộ, trước khi có Promise thì có Callbackhell)
//1. new Promise
//2. Executor
    let promise = new Promise(
    function(resolve, reject){ //Executor
        //Logic
        //Thành công: resolve()
        //Thất bại: reject()

        //Fake call API
        resolve([{
            id: 1,
            name: 'Javascript'
        }]);
    });
    // Trường hợp Reject
        reject('Co Loi!')

    promise
        .then(function(course){ 
            console.log(course);
        })
//kết quả: id: 1, name: 'Javascript'
        .catch(function(error){
            console.log(error)
        })
//kết quả: Co Loi!
        .finally(function(){

        })

//Async/await
    async function f() { //async biến f thành hàm bất đồng bộ
    let promise = new Promise(function(resolve, reject) { // Sau 1 giây, gọi resolve("done!")
      setTimeout(function() {
        resolve("done!");
      }, 1000);
    });
    let result = await promise; // await sẽ dừng việc thực thi f() cho đến khi promise hoàn thành (hoặc thất bại).
    alert(result);
     }
    f();
  