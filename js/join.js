//이용약관 버튼 이벤트
const btninfo = document.querySelector(".btn_infomore");
const hiddenbox = document.querySelector(".hiddenbox");
const infobtn = document.querySelector(".btn_infomore");

//이용약관 버튼 클릭 시 이벤트 실행
btninfo.addEventListener("click", function () {
  //토글 사용
  hiddenbox.classList.toggle("on");
  infobtn.classList.toggle("btn_infomoretoggle");

  //히든박스가 숨겨진 경우
  //   if (hiddenbox.style.display == "none") {
  //     hiddenbox.style.display = "block";
  //     //히든박스가 보여지는 경우
  //   } else {
  //     hiddenbox.style.display = "none";
  //   }
});

const submitbox = document.querySelector("#submitbox"); //로그인 박스

const emailinput = document.querySelector("#email"); //이메일 입력
const password = document.querySelector("#password"); //패스워드 입력
const passwordck = document.querySelector("#passwordck"); //패스워드 확인
const nameinput = document.querySelector("#nameinput"); //이름 입력
const phoneinput = document.querySelector("#phoneinput"); //번호 입력
const birthinput = document.querySelector("#birthinput"); //생년월일 입력
const warnbox = document.querySelectorAll(".warnbox"); //경고문구

//정규표현식
//이메일 @포함 여부 및 대소문자 미구분
const email =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
//패스워드가 영문숫자 조합 8자리~12자리
const pw = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,12}$/;
//이름 한글(2~4글자) or 영어(2~10, 2~10글자)
const namec = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
//번호 앞2~3자리 중간3~4자리 뒷번호4자리
const phone = /^\d{2,3}?\d{3,4}?\d{4}$/;
//생년월일 8자리
const birth = /^[0-9]{8}$/;

//각 항목 입력 시 이벤트 발생
emailinput.addEventListener("keyup", emailstart);
password.addEventListener("keyup", passwordstart);
passwordck.addEventListener("keyup", passwordstartck);
nameinput.addEventListener("keyup", namestart);
phoneinput.addEventListener("keyup", phonestart);
birthinput.addEventListener("keyup", birthstart);

//각 항목 입력 시 회원가입 활성화에 대한 함수이벤트 발생
emailinput.addEventListener("keyup", joinbox);
password.addEventListener("keyup", joinbox);
passwordck.addEventListener("keyup", joinbox);
nameinput.addEventListener("keyup", joinbox);
phoneinput.addEventListener("keyup", joinbox);
birthinput.addEventListener("keyup", joinbox);

//각 항목 클릭 시 이벤트 발생
emailinput.addEventListener("click", prepareInput);
password.addEventListener("click", prepareInput);
passwordck.addEventListener("click", prepareInput);
nameinput.addEventListener("click", prepareInput);
phoneinput.addEventListener("click", prepareInput);
birthinput.addEventListener("click", prepareInput);

//회원가입 시작
//이메일 입력 정규표현식 비교
function emailstart() {
  if (!email.test(emailinput.value)) {
    console.log("ffffff");
    warnbox[0].classList.add("on");
    this.style.border = "2px solid #ff5c46";
    return false;
  } else {
    console.log("tttttt");
    warnbox[0].classList.remove("on");
    this.style.border = "2px solid #ffc72c";
    return true;
  }
}
//비밀번호 입력 정규표현식 비교
function passwordstart() {
  if (!pw.test(password.value)) {
    console.log("ffffff");
    warnbox[1].classList.add("on");
    this.style.border = "2px solid #ff5c46";
    return false;
  } else {
    console.log("tttttt");
    warnbox[1].classList.remove("on");
    this.style.border = "2px solid #ffc72c";
    return true;
  }
}
//비밀번호 2번 확인
function passwordstartck() {
  if (password.value !== passwordck.value) {
    console.log("ffffff");
    warnbox[2].classList.add("on");
    this.style.border = "2px solid #ff5c46";
    return false;
  } else {
    console.log("tttttt");
    warnbox[2].classList.remove("on");
    this.style.border = "2px solid #ffc72c";
    return true;
  }
}
//이름 입력 정규표현식 비교
function namestart() {
  if (!namec.test(nameinput.value)) {
    console.log("ffffff");
    warnbox[3].classList.add("on");
    this.style.border = "2px solid #ff5c46";
    return false;
  } else {
    console.log("tttttt");
    warnbox[3].classList.remove("on");
    this.style.border = "2px solid #ffc72c";
    return true;
  }
}
//폰번호 입력 정규표현식 비교
function phonestart() {
  if (!phone.test(phoneinput.value)) {
    console.log("ffffff");
    warnbox[4].classList.add("on");
    this.style.border = "2px solid #ff5c46";
    return false;
  } else {
    console.log("tttttt");
    warnbox[4].classList.remove("on");
    this.style.border = "2px solid #ffc72c";
    return true;
  }
}
//생년월일 입력 정규표현식 비교
function birthstart() {
  if (!birth.test(birthinput.value)) {
    console.log("fffff");
    warnbox[5].classList.add("on");
    this.style.border = "2px solid #ff5c46";
    return false;
  } else {
    console.log("ttttt");
    warnbox[5].classList.remove("on");
    this.style.border = "2px solid #ffc72c";
    return true;
  }
}

//입력부분 클릭 시 함수 발생
function prepareInput() {
  this.style.border = "2px solid #ffc72c";
}

//필수약관 전체동의
const agreeAbs = document.querySelector("#agreeAbs");
//선택약관 전체동의
const agreeSlt = document.querySelector("#agreeSlt");
//필수약관 3개
const agree3 = document.querySelector("#agree3");
const agree4 = document.querySelector("#agree4");
const agree5 = document.querySelector("#agree5");
//선택약관 2개(sns제외)
const agree6 = document.querySelector("#agree6");
const agreeMkt = document.querySelector("#agreeMkt");
//필수 약관 동의 클릭 시
agreeAbs.addEventListener("click", function (e) {
  let agreeCk = document.querySelectorAll("input[name=agree]");
  for (let i = 0; i < agreeCk.length; i++) {
    agreeCk[i].checked = e.target.checked;
  }
});
//선택 약관 동의 클릭 시
agreeSlt.addEventListener("change", function (e) {
  let agreeCk = document.querySelectorAll("input[name=agreeSt]");
  for (let i = 0; i < agreeCk.length; i++) {
    agreeCk[i].checked = e.target.checked;
  }
});
//마케팅 정보 수신동의 클릭 시
agreeMkt.addEventListener("change", function (e) {
  let agreeCk = document.querySelectorAll(".agreesns");
  for (let i = 0; i < agreeCk.length; i++) {
    agreeCk[i].checked = e.target.checked;
  }
});
submitbox.addEventListener("click ", joinbox);
submitbox.addEventListener("keyup ", joinbox);
const arr = document.getElementsByClassName("agreeck");
for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", joinbox);
}

// 모든 정보 입력이 없다면
function joinbox() {
  //정규 표현식이 맞지 않거나, 필수 체크박스가 체크되어있지 않을 시
  if (
    !(
      // emailinput &&
      // password &&
      // passwordck &&
      // nameinput &&
      // phoneinput &&
      // birthinput &&
      (
        email.test(emailinput.value) &&
        pw.test(password.value) &&
        password.value === passwordck.value &&
        namec.test(nameinput.value) &&
        phone.test(phoneinput.value) &&
        birth.test(birthinput.value) &&
        agree3.checked &&
        agree4.checked &&
        agree5.checked
      )
    )
  ) {
    console.log("ffffff");
    // 유효하지 않으면
    submitbox.disabled = true; // 로그인 버튼 비활성화
    submitbox.style.backgroundColor = "#dee5ec"; // 로그인 버튼 비활성화 --> gray
    submitbox.style.cursor = "no-drop"; // 커서 모양 변경
    submitbox.style.color = "#ffffff";
  } else {
    console.log("tttttttt");
    submitbox.disabled = false; // 로그인 버튼 활성화
    submitbox.style.backgroundColor = "#ffc72c"; // 로그인버튼 활성화 --> yellow
    submitbox.style.cursor = "pointer"; // 커서 모양 포인터로 변경
    submitbox.style.color = "#222";
  }
}