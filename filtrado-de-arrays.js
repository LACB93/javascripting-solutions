//var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//var filtered = numbers.filter(function evenNumbers (number){
  //  return number % 2 === 0;

//});

//console.log(filtered);

//var a = 9;
//var b = [20,18,22,27];

//var filtro = b.filter(function (number){
  //  return number % a === 0;
//});

//console.log(filtro);

var a = [10,18,27,42,90,65,99,50];
var b = 9;


if (b == 9) {

  var filtro = a.filter(function (number) {
    return number % b == 0;
  });
}

      console.log(filtro);



