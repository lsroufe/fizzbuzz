function fizzBuzz() {
for ( var count = 1; count <= 100; count++) {
		if (count % 3 === 0 && count % 5 === 0) {
			$('body').append("<li>FizzBuzz!</li>");
		}
		else if (count % 3 === 0) {
			$('body').append("<li>Fizz</li>");
		}
		else if (count % 5 === 0) {
			$('body').append("<li>Buzz</li>");
		}
		else {
			$('body').append("<li>" + count + "</li>");
		}
	}
  }
fizzBuzz();

