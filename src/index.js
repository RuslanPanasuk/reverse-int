module.exports = function reverse (n) {
  let arr = [...n];
  return arr.reverse().join('');
}
