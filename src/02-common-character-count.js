/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  let arr1 = s1.split('');
  const set1 = new Set(arr1);
  arr1 = Array.from(set1);
  let arr2 = s2.split('');
  const set2 = new Set(arr2);
  arr2 = Array.from(set2);
  const intersection = arr1.filter((x) => arr2.includes(x));
  const dict = new Map();

  intersection.forEach((o) => {
    dict.set(o, 0);
  });
  dict.forEach((value, key) => {
    const count1 = s1.split(key).length - 1;
    const count2 = s2.split(key).length - 1;
    res = count1 >= count2 ? res += count2 : res += count1;
  });
  return res;
}

module.exports = getCommonCharacterCount;
