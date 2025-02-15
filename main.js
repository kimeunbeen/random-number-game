// 랜덤번호 지정
// 유저한테 번호 입력받음

// 랜덤번호(1~100) 지정
let randomNum = 0;
let playButton = document.getElementById("playButton");
let inputNum = document.getElementById("inputNum");
let result = document.getElementById("result");

playButton.addEventListener("click", play);

function pickRandomNum() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답 :" + randomNum);
}

function play() {
  let userValue = inputNum.value;

  if (userValue > randomNum) {
    result.textContent = "DOWN";
  } else if (userValue < randomNum) {
    result.textContent = "UP";
  } else {
    result.textContent = "CORRECT";
  }
}
pickRandomNum();
