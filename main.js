// 1. 랜덤숫자 생성 (1~100)
// 2. 사용자 입력값 받기
// 3. 입력값이랑 랜덤숫자 비교하여 결과값 제공
// 4. 기회 3번으로 제한, 정답 시 버튼 제어
// 5. 리셋버튼 게임초기화

// input 값 초기화, 같은숫자입력 확인, 입력 숫자값 범위제한,

let randomNum = 0;
let inputNum = document.getElementById("inputNum");
let playButton = document.getElementById("playButton");
let result = document.getElementById("result");
let answerArea = document.getElementById("answerArea");
let chancesArea = document.getElementById("chancesArea");
let resetButton = document.getElementById("resetButton");
let chances = 3;
let gameOver = false;
let history = [];

// 이벤트생성
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
inputNum.addEventListener("focus", () => {
  inputNum.value = "";
});
// inputNum.addEventListener("keydown", (e) => {
//   if (e.key == "Enter") {
//     play();
//   }
// });

randomNumCreate();

// 랜덤숫자생성
function randomNumCreate() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  console.log(randomNum);
  answerArea.textContent = `정답은 :  ${randomNum}`;
  chancesArea.textContent = `기회는 :  ${chances} 번 !!`;
  history = [];
}

// 값 비교
function play() {
  const userValue = inputNum.value;
  // 숫자범위 체크
  if (userValue > 100 || userValue < 1) {
    result.textContent = "1에서 100사이의 숫자를 입력해주세요!";
    return false;
  }
  // 기입력값인지 체크
  if (history.includes(userValue)) {
    result.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요!";
    return false;
  }

  if (userValue > randomNum) {
    // return DOWN
    result.textContent = " down!";
    history.push(userValue);
    chances--;
  } else if (userValue < randomNum) {
    // return UP
    result.textContent = " up!";
    history.push(userValue);
    chances--;
  } else {
    // return CORRECT
    result.textContent = " 정답!";

    let count = 4 - chances;
    chancesArea.textContent = `${count}번 시도만에 성공 !!`;
    return false;
  }

  chancesArea.textContent = `남은 기회는 ${chances} 번!`;

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver) {
    result.textContent = "GAME OVER";
    chancesArea.textContent = "";
    playButton.disabled = true;
  }
}

// 게임 리셋
function reset() {
  // input 초기화
  inputNum.value = "";

  // 랜덤숫자 재생성
  randomNumCreate();

  // go 버튼 초기화
  playButton.disabled = false;

  // 횟수는 초기화
  chances = 3;

  // chanceArea 초기화
  chancesArea.textContent = `남은 기회는 ${chances} 번!`;

  // result 초기화
  result.textContent = "랜덤숫자~~~맞춰보시라아ㅏㅏ";
}
