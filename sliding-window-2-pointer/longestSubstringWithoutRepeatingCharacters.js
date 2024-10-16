function longestSubstringWithoutRepeatingCharacters(str) {
  let ans = 0;
  let fp = 0;
  let sp = 0;
  let n = str.length;
  let map = {};

  while (sp < n) {
    addToMap(map, str.charAt(sp));
    while (fp < sp && !isValidSubstring(map)) {
      console.log("invalid", map);
      deletefromMap(map, str.charAt(fp));
      fp++;
    }
    console.log(map);
    let length = sp - fp + 1;
    ans = Math.max(length, ans);
    sp++;
  }

  return ans;
}

function addToMap(map, ch) {
  if (map[ch]) {
    map[ch]++;
  } else {
    map[ch] = 1;
  }
}

function deletefromMap(map, ch) {
  map[ch]--;
}

function isValidSubstring(map) {
  return Object.values(map).every((v) => v <= 1);
}

console.log(longestSubstringWithoutRepeatingCharacters("abacdfce"));
console.log(longestSubstringWithoutRepeatingCharacters("pranay"));
