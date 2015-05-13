/**
 * Project Euler: Problem 7
 * 10001st prime
 * https://projecteuler.net/problem=7
 *
 * By listing the first six prime numbers: 2, 3, 5,
 * 7, 11, and 13, we can see that the 6th prime is
 * 13.
 *
 * What is the 10 001st prime number?
 *
 *
 * Published on Friday, 28th December 2001, 06:00 pm;
 * Solved by 225276; Difficulty rating: 5%
 */

var isp = function (n) {
	var i = 3;
	if (n == 2) return 1;
	if ((n % 2) == 0) return 0;
	while (i < Math.sqrt(n)+1) {
		if((n % i)==0) return 0;
		i+= 2;
	}
	return 1;
}

var p = 1;
for (var i = 2; p <= 10001; i++)
	p += isp(i) ? 1 : 0;

console.log(i-1);
