const inputNum = document.getElementById("inputNumber");
const rollBtn = document.getElementById("rollButton");

const res = Math.floor(Math.random() * 10) + 1; //random result 1 - 10
// const res = 5; //Test

let predChance = 3;

function check() {
  let pred = Number(inputNum.value);
  // console.log(res);

  if (pred == "") {
    alert("Mời bạn nhập con số dự đoán");
  } else if (pred < 1 || pred > 10) {
    alert("Bạn chỉ có thể dự đoán con số từ 1 - 10");
    inputNum.value = "";
  } else {
    if (pred === res) {
      alert(`Chúc mừng bạn đã dự đoán chính xác! Kết quả: ${res}`);
      location.reload();
    } else {
      predChance--;
      if (predChance) {
        alert(`Bạn còn ${predChance} lần dự đoán`);
        inputNum.value = "";
      } else {
        alert(`Chúc bạn may mắn lần sau! Kết quả: ${res}`);
        location.reload();
      }
    }
  }
}

rollBtn.addEventListener("click", check);
