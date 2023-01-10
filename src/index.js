module.exports = function reverse (n) {
  const str = String (n);
  const positive = str.replace (/-/,'');
  let result = '';
  for (let i=0; i<positive.length; i++) {
    result = `${positive[i]}${result}`;
  }
  return Number(result);
}
