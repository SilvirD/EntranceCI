function findOppositeNumber(n, inputNumber) {
  if (n % 2 === 0 && n >= 4 && n <= 20) {
    if (inputNumber >= 0 && inputNumber < n) {
      let res = inputNumber + n / 2;
      if (res >= n) {
        res = res - n;
      }
      console.log(`So doi dien cua ${inputNumber} la: ${res}`);
    } else {
      alert(`Input number >= 0 va <= ${n - 1}`);
    }
  } else {
    alert("n phai la nguyen duong chan tu 4 - 20");
  }
}

findOppositeNumber(10, 2);
findOppositeNumber(10, 6);
findOppositeNumber(10, 5);
findOppositeNumber(10, 7);
