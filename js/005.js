/**
 * Project Euler: Problem 5
 * Smallest multiple
 * https://projecteuler.net/problem=5
 *
 * 2520 is the smallest number that can be divided by
 * each of the numbers from 1 to 10 without any
 * remainder.
 *
 * What is the smallest positive number that is
 * evenly divisible by all of the numbers from 1 to
 * 20?
 *
 *
 * Published on Friday, 30th November 2001, 06:00 pm;
 * Solved by 260982; Difficulty rating: 5%
 */

var l = false;
var j = 0;
var i = 0;

while (!l) {
	i += 20;
	l = 1;
	j = 2;
	while ((j <= 20) && (l)) {
		l = ((i % j) == 0) && l;
		j++;
	}
}

console.log(i);
