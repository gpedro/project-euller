/**
 * Project Euler: Problem 4
 * Largest palindrome product
 * https://projecteuler.net/problem=4
 *
 * A palindromic number reads the same both ways. The
 * largest palindrome made from the product of two
 * 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product
 * of two 3-digit numbers.
 *
 *
 * Published on Friday, 16th November 2001, 06:00 pm;
 * Solved by 248449; Difficulty rating: 5%
 */

var isp = function (n) {
	var r = 0;
	var t = n;
	while( t != 0 ) {
		r = (r * 10) + (t % 10);
		t /= 10;
	}
	return ( n == r );
};

var k = 0;
var l = 0;
for (var i =  100; i <= 999; i++) {
	for (j = 100; j <= i; j++) {
		l = (i * j);
		k = (isp(l)) && (l > k) ? l : k;
	}
}

console.log(k);
