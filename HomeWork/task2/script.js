/*Ввести две строки и проверить, являются ли они анаграммами друг 
друга (составлены из того же набора
символов).
*/

/*

  var firstWord = prompt("Введите первое слово",'');
  var secondWord = prompt("Введите второе слово",'');

  Anagram(firstWord, secondWord);

  function Anagram(first, second) {

    var a = first.toLowerCase();
    var b = second.toLowerCase();

    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    return a === b;
  }
  alert(Anagram(firstWord, secondWord))

*/




//Найти в массиве количество и сумму элементов, которые делятся на 3.

/*
var count = 0,
	sum = 0,
	arr = [1, 2, 3, 4, 5, 6, 7,
			8, 9, 10, 11];
			
for (var i = 0; i < arr.length; i++) {
	if (!(arr[i] % 3)) {
		sum += arr[i];
		count += 1;
	}
}

alert('Количество элементов: ' + count + '\n' +
		'на общую сумму: ' + sum);*/