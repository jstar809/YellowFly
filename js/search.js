// 변수 선언 ----------------------------------------------------

// 상단 아이디 / 비밀번호 찾기 메뉴 바
const searchId = document.getElementById("searchId");
const searchPassword = document.getElementById("searchPassword");

// 아이디 / 비밀번호 찾기에 맞는 화면 보여주기
const idBox = document.getElementById("idBox");
const passwordBox = document.getElementById("passwordBox");

// 아이디 찾기
const nameBtn = document.getElementById("nameInput");
const phoneBtn = document.getElementById("phoneInput");
const idSearchBtn = document.getElementById("idSearchBtn");

const nameTitle = document.getElementById("nameTitle"); // 이름 글자, 유효하지 않으면 red
const phoneTitle = document.getElementById("phoneTitle"); // 휴대폰 번호 글자, 유효하지 않으면 red
const emailTitle = document.getElementById("emailTitle"); // 아이디(이메일) 글자 유효하지 않으면 red

// 비밀번호 찾기
const emailBtn = document.getElementById("emailInput");
const pwSearchBtn = document.getElementById("passwordSearchBtn");

const blankMsg = document.getElementById("blank"); // 이메일 or 휴대폰 번호 or 이름이 공란일 때 msg
const missingMsg1 = document.getElementById("missing1"); // 이메일에 @가 누락된 경우 msg
const missingMsg2 = document.getElementById("missing2"); // 이메일에 .이 누락된 경우 msg
const onlyNumber = document.getElementById("onlyNumber"); // 휴대폰 번호에 숫자 외 입력한 경우 msg
const onlyName = document.getElementById("onlyName"); // 이름에 글자 외 문자가 포함된 경우 msg

// 아이디 / 비밀번호 찾기 메뉴 바 클릭--------------------

// 인자 (클릭한 메뉴, 클릭 안한 메뉴, 보여줄 화면, 숨길 화면)
function showBox(activeBtn, disableBtn, activeBox, disableBox) {
  activeBtn.addEventListener("click", () => {
    //선택한 버튼 --> black, border : yellow
    activeBtn.style.border = "2px solid #ffc72c";
    activeBtn.style.borderBottom = "#ffffff";
    activeBtn.style.color = "#000000";
    activeBox.style.display = "block";
    // 선택하지 않은 버튼 --> gray, border : white
    disableBtn.style.border = "2px solid #ffffff";
    disableBtn.style.color = "#bec8d2";
    disableBox.style.display = "none";
    // 유효성 검사 msg 초기화(hide)
    blankMsg.style.display = "none";
    missingMsg1.style.display = "none";
    missingMsg2.style.display = "none";
    onlyNumber.style.display = "none";
    onlyName.style.display = "none";
  });
}

showBox(searchId, searchPassword, idBox, passwordBox);
showBox(searchPassword, searchId, passwordBox, idBox);

// 이메일 메뉴 누르면 wrap 높이 1000px
// 비밀번호 메뉴 누르면 wrap 높이 900px
const wrap = document.getElementById("wrap");
searchId.addEventListener("click", () => {
  wrap.style.height = "1000px";
});
searchPassword.addEventListener("click", () => {
  wrap.style.height = "900px";
});

// 유효성 검사 ----------------------------------------------

// 이메일 찾기 유효성 검사--------------------------------------
function btnActive1() {
  // 유효성 검사 --> 확인 버튼 비/활성화
  // 이름, 휴대폰 번호가 공란
  if (
    !(
      nameBtn.value &&
      phoneBtn.value &&
      nameBtn.value.search(/[^a-zA-Z가-힣]/g) === -1 &&
      phoneBtn.value.search(/[^0-9]/g) === -1
    )
  ) {
    // 유효하지 않으면
    idSearchBtn.disabled = true; // 확인 버튼 비활성화
    idSearchBtn.style.backgroundColor = "#dee5ec"; // 확인 버튼 비활성화 --> gray
    idSearchBtn.style.cursor = "no-drop"; // 커서 모양 변경
    idSearchBtn.style.color = "#ffffff";

    nameTitle.style.color = "#eb5a46"; // 유효하지 않을 때 --> 글자, 밑줄 red
    phoneTitle.style.color = "#eb5a46";
    nameBtn.style.borderBottom = "2px solid #eb5a46";
    phoneBtn.style.borderBottom = "2px solid #eb5a46";

    // 유효성 검사 msg는 1개만 보여주기

    if (!(nameBtn.value && phoneBtn.value)) {
      // 이메일 or 비밀번호 공란
      blankMsg.style.display = "block"; // 항목이 비어있다는 msg
      onlyName.style.display = "none";
      onlyNumber.style.display = "none";
    } else if (nameBtn.value.search(/[^a-zA-Z가-힣]/g) !== -1) {
      blankMsg.style.display = "none";
      onlyName.style.display = "block"; // 이름에 글자 외 문자 포함 msg
      onlyNumber.style.display = "none";
    } else if (phoneBtn.value.search(/[^0-9]/g) !== -1) {
      // 휴대폰 번호에 숫자 외 입력
      blankMsg.style.display = "none";
      onlyName.style.display = "none";
      onlyNumber.style.display = "block"; // 휴대폰 번호에 숫자 외 입력 msg
    }
  } else {
    // 이름, 휴대폰 번호 공란XX
    idSearchBtn.disabled = false; // 확인 버튼 활성화
    idSearchBtn.style.backgroundColor = "#ffc72c"; // 확인 버튼 활성화 --> yellow
    idSearchBtn.style.cursor = "pointer"; // 커서 모양 포인터로 변경
    idSearchBtn.style.color = "#222";
    nameTitle.style.color = "#ffc72c"; // 유효할 때 --> 글자, 밑줄 yellow
    phoneTitle.style.color = "#ffc72c";
    nameBtn.style.borderBottom = "2px solid #ffc72c";
    phoneBtn.style.borderBottom = "2px solid #ffc72c";
    // 항목이 비어있는 msg --> hide
    blankMsg.style.display = "none";
    onlyName.style.display = "none";
    onlyNumber.style.display = "none";
  }
}

// 비밀번호 찾기 유효성 검사----------------------------------
function btnActive2() {
  // 유효성 검사 --> 확인 버튼 비/활성화
  // ID(이메일) 번호가 공란
  if (
    !(
      emailBtn.value &&
      emailBtn.value.search("@") !== -1 &&
      emailBtn.value.search(/[.]/g) !== -1
    )
  ) {
    // 유효하지 않으면
    pwSearchBtn.disabled = true; // 확인 버튼 비활성화
    pwSearchBtn.style.backgroundColor = "#dee5ec"; // 확인 버튼 비활성화 --> gray
    pwSearchBtn.style.cursor = "no-drop"; // 커서 모양 변경
    pwSearchBtn.style.color = "#ffffff";

    emailTitle.style.color = "#eb5a46"; // 유효하지 않을 때 --> 글자, 밑줄 red
    emailBtn.style.borderBottom = "2px solid #eb5a46";

    // 유효성 검사 msg는 1개만 보여주기

    if (!emailBtn.value) {
      // 이메일 or 비밀번호 공란
      blankMsg.style.display = "block"; // 항목이 비어있다는 msg
      missingMsg1.style.display = "none";
      missingMsg2.style.display = "none";
    } else if (emailBtn.value.search("@") === -1) {
      // 이메일에 @누락
      blankMsg.style.display = "none";
      missingMsg1.style.display = "block"; // 이메일 @ 누락 msg
      missingMsg2.style.display = "none";
    } else if (emailBtn.value.search(/[.]/g) === -1) {
      // 이메일에 .누락
      blankMsg.style.display = "none";
      missingMsg1.style.display = "none";
      missingMsg2.style.display = "block"; // 이메일 . 누락 msg
    }
  } else {
    // 이메일 공란XX and @, . 포함
    pwSearchBtn.disabled = false; // 확인 버튼 활성화
    pwSearchBtn.style.backgroundColor = "#ffc72c"; // 확인 버튼 활성화 --> yellow
    pwSearchBtn.style.cursor = "pointer"; // 커서 모양 포인터로 변경
    pwSearchBtn.style.color = "#222";
    emailTitle.style.color = "#ffc72c"; // 유효할 때 --> 글자, 밑줄 yellow
    emailBtn.style.borderBottom = "2px solid #ffc72c";

    blankMsg.style.display = "none"; // 항목이 비어있는 msg --> hide
    missingMsg1.style.display = "none"; // 이메일 @ 누락 msg --> hide
    missingMsg2.style.display = "none"; // 이메일 . 누락 msg --> hide
  }
}

function prepareInput1() {
  nameTitle.style.color = "#ffc72c";
  phoneTitle.style.color = "#ffc72c";

  nameBtn.style.borderBottom = "2px solid #ffc72c";
  phoneBtn.style.borderBottom = "2px solid #ffc72c";
}
function prepareInput2() {
  emailTitle.style.color = "#ffc72c";

  emailBtn.style.borderBottom = "2px solid #ffc72c";
}

nameBtn.addEventListener("keyup", btnActive1);
nameBtn.addEventListener("click", prepareInput1);

phoneBtn.addEventListener("keyup", btnActive1);
phoneBtn.addEventListener("click", prepareInput1);

emailBtn.addEventListener("keyup", btnActive2);
emailBtn.addEventListener("click", prepareInput2);