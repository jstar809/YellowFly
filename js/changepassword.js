// const emailBtn = document.getElementById("emailInput"); // 이메일 입력
// const pwBtn = document.getElementById("pwInput"); // 비밀번호 입력
// const login = document.getElementById("loginBtn"); // 로그인 버튼

// const blankMsg = document.getElementById("blank"); // 이메일 or 비밀번호가 공란일 때 msg
// const shortMsg = document.getElementById("short"); // 비밀번호가 7자리 이하일 때 msg
// const missingMsg1 = document.getElementById("missing1"); // 이메일에 @가 누락된 경우
// const missingMsg2 = document.getElementById("missing2"); // 이메일에 .이 누락된 경우
// // 유효한 비밀번호는 8자리 이상

// const emailTitle = document.getElementById("emailTitle"); // 이메일 글자, 유효하지 않으면 red
// const pwTitle = document.getElementById("pwTitle"); // 비밀번호 글자, 유효하지 않으면 red

// function btnActive() {
//   // 유효성 검사 --> 로그인 버튼 비/활성화
//   // 이메일, 비밀번호가 공란 or 비밀번호가 8자리 이상인지
//   if (
//     !(
//       emailBtn.value &&
//       pwBtn.value &&
//       pwBtn.value.length > 7 &&
//       emailBtn.value.search("@") !== -1 &&
//       emailBtn.value.search(/[.]/g) !== -1
//     )
//   ) {
//     // 유효하지 않으면
//     login.disabled = true; // 로그인 버튼 비활성화
//     login.style.backgroundColor = "#dee5ec"; // 로그인 버튼 비활성화 --> gray
//     login.style.cursor = "no-drop"; // 커서 모양 변경
//     login.style.color = "#ffffff";

//     emailTitle.style.color = "#eb5a46"; // 유효하지 않을 때 --> 글자, 밑줄 red
//     pwTitle.style.color = "#eb5a46";
//     emailBtn.style.borderBottom = "2px solid #eb5a46";
//     pwBtn.style.borderBottom = "2px solid #eb5a46";

//     // 유효성 검사 msg는 1개만 보여주기

//     if (!(emailBtn.value && pwBtn.value)) {
//       // 이메일 or 비밀번호 공란
//       blankMsg.style.display = "block"; // 항목이 비어있다는 msg
//       shortMsg.style.display = "none";
//       missingMsg1.style.display = "none";
//       missingMsg2.style.display = "none";
//     } else if (pwBtn.value.length <= 7) {
//       // 이메일과 비밀번호 모두 입력했지만, 비밀번호가 7자리 이하
//       blankMsg.style.display = "none";
//       shortMsg.style.display = "block"; // 비밀번호 길이 부족 msg
//       missingMsg1.style.display = "none";
//       missingMsg2.style.display = "none";
//     } else if (emailBtn.value.search("@") === -1) {
//       // 이메일에 @누락
//       blankMsg.style.display = "none";
//       shortMsg.style.display = "none";
//       missingMsg1.style.display = "block"; // 이메일 @ 누락 msg
//       missingMsg2.style.display = "none";
//     } else if (emailBtn.value.search(/[.]/g) === -1) {
//       // 이메일에 .누락
//       blankMsg.style.display = "none";
//       shortMsg.style.display = "none";
//       missingMsg1.style.display = "none";
//       missingMsg2.style.display = "block"; // 이메일 . 누락 msg
//     }
//   } else {
//     // 이메일, 비밀번호 공란XX and 비밀번호 8자리 이상 and 이메일에 '@','.'  포함
//     login.disabled = false; // 로그인 버튼 활성화
//     login.style.backgroundColor = "#ffc72c"; // 로그인버튼 활성화 --> yellow
//     login.style.cursor = "pointer"; // 커서 모양 포인터로 변경
//     login.style.color = "#222";
//     emailTitle.style.color = "#ffc72c"; // 유효할 때 --> 글자, 밑줄 yellow
//     pwTitle.style.color = "#ffc72c";
//     emailBtn.style.borderBottom = "2px solid #ffc72c";
//     pwBtn.style.borderBottom = "2px solid #ffc72c";

//     // 유효성 검사 msg는 1개만 보여주기
//     blankMsg.style.display = "none"; // 항목이 비어있는 msg --> hide
//     shortMsg.style.display = "none"; // 비밀번호 길이 부족 msg --> hide
//     missingMsg1.style.display = "none"; // 이메일 @ 누락 msg --> hide
//     missingMsg2.style.display = "none"; // 이메일 . 누락 msg --> hide
//   }
// }

// function prepareInput() {
//   emailTitle.style.color = "#ffc72c";
//   pwTitle.style.color = "#ffc72c";

//   emailBtn.style.borderBottom = "2px solid #ffc72c";
//   pwBtn.style.borderBottom = "2px solid #ffc72c";
// }

// emailBtn.addEventListener("keyup", btnActive);
// emailBtn.addEventListener("click", prepareInput);

// pwBtn.addEventListener("keyup", btnActive);
// pwBtn.addEventListener("click", prepareInput);


//새 비밀번호
const newpasswordnew = document.querySelector("#newpasswordnew");
//새 비밀번호 확인
const newpasswordck = document.querySelector("#newpasswordck");
//유효성 박스
const passwordchk = document.querySelector(".passwordchk");


newpasswordck.addEventListener("keyup", pwchk);

function pwchk() {
  if (newpasswordnew.value !== newpasswordck.value) {
    console.log("Ffff");
    passwordchk.classList.add("on");
    return false;
  } else {
    console.log("tttt");
    passwordchk.classList.remove("on");
    return true;
  }
}