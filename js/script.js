// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// stampare i numeri da 1 a 100

var multi3 = "Fizz";

var multi5 = "Buzz";

var multiBoth = "FizzBuzz";


for ( var i = 1; i <= 100; i++ ) {

     if ( (i % 3 == 0) && (i % 5 == 0) ) {
          document.getElementById("number-list").innerHTML += "<li>" + multiBoth + "</li>"
     } else if (i % 3 == 0) {
          document.getElementById("number-list").innerHTML += "<li>" + multi3 + "</li>";
     } else if (i % 5 == 0) {
          document.getElementById("number-list").innerHTML += "<li>" + multi5 + "</li>";
     } else {
          document.getElementById("number-list").innerHTML += "<li>" + i + "</li>";
     }

}
