alert('Hello World ')

var fullName="Cao Le Tuong Nhan";
var age="24";
alert(fullName);
alert(age);

// Mot so ham built in
// 1.Console
console.log(fullName);
// 2.Confirm
confirm('Xac nhan ban chua du tuoi!');
// 3.Prompt
prompt('Ban bao nhiu tuoi:')
// 4.Set timeout
setTimeout(function(){
    alert('Thong Bao')
}, 2000);
// 5.Set interval
setInterval(function(){
    console.log('Day la thong bao'+ Math.random())
},1000)