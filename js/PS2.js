function merge2String(s1, s2) {
  let newStr = [];
  s1 = s1.split("");
  s2 = s2.split("");

  let max = Math.max(s1.length, s2.length);

  for (let i = 0; i < max; i++) {
    if (s1[i] != null) {
      newStr.push(s1[i]);
    }
    if (s2[i] != null) {
      newStr.push(s2[i]);
    }
  }

  // console.log(newStr);
  console.log(newStr.join(""));
}

merge2String("abc", "123");
merge2String("abc", "0123");
merge2String("abcd", "123");
