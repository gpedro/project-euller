/**
 * Project Euler: Problem 3
 * Largest prime factor
 * https://projecteuler.net/problem=3
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number
 * 600851475143 ?
 *
 *
 * Published on Friday, 2nd November 2001, 06:00 pm;
 * Solved by 274764; Difficulty rating: 5%
 */

var pfact = function (n) {
	var temp = 0;
	for (var i = 2; i <= n; i++) {
		if ((n % i) == 0) {
			temp = i;
			n /= i;
			i = 1;
		}
	}
	return temp;
}

console.log(pfact(600851475143));
