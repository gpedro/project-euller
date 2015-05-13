/**
 * Project Euler: Problem 6
 * Sum square difference
 * https://projecteuler.net/problem=6
 *
 * The sum of the squares of the first ten natural
 * numbers is,
 *
 * 12 + 22 + ... + 102 = 385
 *
 * The square of the sum of the first ten natural
 * numbers is,
 *
 * (1 + 2 + ... + 10)2 = 552 = 3025
 *
 * Hence the difference between the sum of the
 * squares of the first ten natural numbers and the
 * square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares
 * of the first one hundred natural numbers and the
 * square of the sum.
 *
 *
 * Published on Friday, 14th December 2001, 06:00 pm;
 * Solved by 262826; Difficulty rating: 5%
 */

var j = 0;
var k = 0
var l = 0;
for (var i = 1; i<= 100; i++) {
	j += (i*i);
	k += i;
}

l = (k*k) - j;

console.log('Answer:', l);
