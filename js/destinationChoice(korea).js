// 이미지 확장자명 통일
// 예를 들어 확장자명 jpg이면 아래와 같이 이미지 파일명 지정
// 이미지 경로 반드시 "img/(영문국가명)(한글장소명).jpg"으로 할 것
// ex) img/france에펠탑.jpg

//수도권 이미지 이름 --> 경로에 추가할 예정----------------------------
const seoul_1Place = ["경복궁", "남산", "남산타워", "서울야경"];
const seoul_2Place = ["광화문", "디디피", "서울대교", "하남스타필드"];
const incheonPlace = ["송도", "영종도", "월미도", "정서진1"];
// 수도권 도시별 이미지 담을 배열
const seoul_1Img = [];
const seoul_2Img = [];
const incheonImg = [];

// 서울/인천 도시별 제목 담을 배열
const seoulTitle1 = [];
const seoulTitle2 = [];
const incheonTitle = [];
// 서울/인천 도시별 설명 담을 배열
const seoulContent1 = [];
const seoulContent2 = [];
const incheonContent = [];
// 제목 담기
seoulTitle1.push("109,000원~");
seoulTitle1.push("90,000원~");
seoulTitle1.push("89,000원~");
seoulTitle1.push("69,000원~");
seoulTitle2.push("49,000원~");
seoulTitle2.push("49,000원~");
seoulTitle2.push("59,000원~");
seoulTitle2.push("59,000원~");
incheonTitle.push("69,000원~");
incheonTitle.push("79,000원~");
incheonTitle.push("89,000원~");
incheonTitle.push("69,000원~");
// 내용 담기

seoulContent1.push("[경복궁] \n 신라호텔1박\n노랑풍선시티버스2매 \n (2인기준/1인요금)");
seoulContent1.push("[남산타워] \n 포포인츠 호텔 1박\n시티투어버스\n남산케이블카(2인기준/1인요금)");
seoulContent1.push("[롯데타워+롯데월드]\n호텔1박 \n시티투어버스\n롯데월드 (2인기준/1인요금)");
seoulContent1.push("[시티버스]\n호텔1박 \n 노랑풍선시티버스 2매 \n(2인기준/1인요금)");
seoulContent2.push("[광화문]\n코리아나 호텔1박 \n 연인과의 데이트 \n(2인기준/1인요금)");
seoulContent2.push("[동대문 DDP]\n 호텔1박 \n 예쁜건물 \n(2인기준/1인요금)");
seoulContent2.push("[시티버스]\n호텔1박 \n 노랑풍선시티버스 2매 \n(2인기준/1인요금)");
seoulContent2.push("[하남 스타필드]\n보보스 호텔1박 \n 쇼캉스 \n(2인기준/1인요금)");
incheonContent.push("[송도]\n호텔1박 \n 송도 캠핑장 \n(2인기준/1인요금)");
incheonContent.push("[영정도]\n 영정도에서의 놀이!\n(2인기준/1인요금)");
incheonContent.push("[월미도]\n 월미도 바이킹\n(2인기준/1인요금)");
incheonContent.push("[정서진]\n 서해에서의 일출!\n(2인기준/1인요금)");

//경상도 이미지 이름 --> 경로에 추가할 예정--------------------------------
const busanPlace = ["다리", "더베이101", "2", "절"];
const gyeongjuPlace = ["동궁과월지", "석굴암", "석탑", "첨성대"];
const geojePlace = ["등대", "마을전경", "숲", "철도"];
// 경상도 도시별 이미지 담을 배열
const busanImg = [];
const gyeongjuImg = [];
const geojeImg = [];

// 경상도 지역별 제목 담을 배열
const busanTitle = [];
const gyeongjuTitle = [];
const geojeTitle = [];
// 경상도 지역별 설명 담을 배열
const busanContent = [];
const gyeongjuContent = [];
const geojeContent = [];
// 제목 담기
busanTitle.push("199,900원~");
busanTitle.push("89,000원~");
busanTitle.push("69,000원~");
busanTitle.push("129,000원~");
gyeongjuTitle.push("21,900원~");
gyeongjuTitle.push("39.900원~");
gyeongjuTitle.push("79.900원~");
gyeongjuTitle.push("99,000원~");
geojeTitle.push("서이말등대");
geojeTitle.push("학동마을");
geojeTitle.push("계룡산");
geojeTitle.push("상문로");
// 내용 담기
busanContent.push("[라비나호텔&부산투어 1박2일] \n광안리가 보이는 오션뷰");
busanContent.push("[부산시티 투어 1박2일] \n아름다운 부산이 보이는 \n시티투어");
busanContent.push("[부산 감천마을] \n비밀의 마을 부산\n 감천마을 에서 1박2일");
busanContent.push("[송국사1박2일] \n부산에서 제일 유명한 \n 송국사에서 하는 템플스테이");
gyeongjuContent.push("[동궁과월지] \n화련한 동궁\n 동궁에서 1박2일 ");
gyeongjuContent.push("[석굴암] \n어마어마한 크기의 불상\n 경주투어 1박2일 ");
gyeongjuContent.push("[다보탑] \n신라역사 중에 제일큰 탑\n  경주투어 1박2일 ");
gyeongjuContent.push("[첨성대] \n천문학의 꽃\n 경주투어 1박2일 ");
geojeContent.push("[서이말 등대] \등대 투어\n 거제투어 1박2일");
geojeContent.push("[학동마을] \마을 투어\n 거제투어 1박2일");
geojeContent.push("[계룡산] \계룡산의 화련한 마을\n 거제투어 1박2일");
geojeContent.push("[상문로] \벛꽃 철도를 걸으며..\n 거제투어 1박2일");

// 전라도 이미지 이름 --------------------------------------------
const jeonjuPlace = [
  "자만벽화마을",
  "전주덕진공원1",
  "전주난장2",
  "전주한옥마을3",
];
const yeosuPlace = ["1", "아쿠아플라넷2", "엑스포", "오동도"];
const suncheonPlace = ["낙안읍성3", "드라마촬영장", "송광사", "순천만국가정원"];
// 전라도 도시별 이미지 담을 배열
const jeonjuImg = [];
const yeosuImg = [];
const suncheonImg = [];

// 배열에 도시별 이미지 담기
// 인자 : (국가이름 문자열, 장소 배열, 이미지 배열)
function pushImg(country, place, imgPath) {
  for (let i = 0; i < place.length; i++) {
    imgPath.push("img/" + country + place[i] + ".jpg");
  }
}
// 수도권 도시별 이미지 배열
pushImg("seoul_1", seoul_1Place, seoul_1Img);
pushImg("seoul_2", seoul_2Place, seoul_2Img);
pushImg("incheon", incheonPlace, incheonImg);
// 경상도 도시별 이미지 배열
pushImg("busan", busanPlace, busanImg);
pushImg("gyeongju", gyeongjuPlace, gyeongjuImg);
pushImg("geoje", geojePlace, geojeImg);
// 전라도 도시별 이미지 배열
pushImg("jeonju", jeonjuPlace, jeonjuImg);
pushImg("yeosu", yeosuPlace, yeosuImg);
pushImg("suncheon", suncheonPlace, suncheonImg);

// 전라도 지역별 제목 담을 배열
const jeonjuTitle = [];
const yeosuTitle = [];
const suncheonTitle = [];
// 전라도 지역별 설명 담을 배열
const jeonjuContent = [];
const yeosuContent = [];
const suncheonContent = [];
// 제목 담기
jeonjuTitle.push("69,000원~");
jeonjuTitle.push("79,000원~");
jeonjuTitle.push("59,000원~");
jeonjuTitle.push("89,000원~");
yeosuTitle.push("69,000원~");
yeosuTitle.push("99,000원~");
yeosuTitle.push("119,000원~");
yeosuTitle.push("49,000원~");
suncheonTitle.push("69,000원~");
suncheonTitle.push("79,000원~");
suncheonTitle.push("89,000원~");
suncheonTitle.push("99,000원~");
// 내용 담기
jeonjuContent.push("[자만벽화 마을] \n아름다운 벽화\n 전주투어 1박2일");
jeonjuContent.push("[전주 덕진 공원] \n아름다운 공원\n 전주투어 1박2일");
jeonjuContent.push("[전주 난장] \n전통적인 식당\n 전주투어 1박2일");
jeonjuContent.push("[전주 한옥마을] \n세계적인 한옥마을\n 전주투어 1박2일");
yeosuContent.push("[해상 케이블카] \n해상에서 즐기는 케이블카\n 여수투어 1박2일");
yeosuContent.push("[아쿠아플라넷] \n해저 아쿠아리움\n 여수투어 1박2일");
yeosuContent.push("[엑스포] \n세계적인 여수EXPO\n 여수투어 1박2일");
yeosuContent.push("[오동도] \n아름다운 풍경\n 여수투어 1박2일");
suncheonContent.push("[낙안읍성] \n고향생각이 나는\n 순천투어 1박2일");
suncheonContent.push("[전주 드라마 촬영장] \추억의 드라마의 현장 \n 순천투어 1박2일");
suncheonContent.push("[송광사] \n아름다운 풍경\n 순천투어 1박2일");
suncheonContent.push("[순천 만국가정원] \n아름다운 풍경\n 순천투어 1박2일");

//----------------------------------------------------------------------
// 도시 버튼 : 클릭 --> 이미지 보여주기
// 1 번째 블록 서울/인천 2개 도시 : 서울1/서울2/인천
const topFirstBtn = document.querySelector("#firstJourney > .firstPlace");
const topSecondBtn = document.querySelector("#firstJourney > .secondPlace");
const topThirdBtn = document.querySelector("#firstJourney > .thirdPlace");
// 2 번째 블록 경상도 3개 지역 : 부산, 경주, 거제
const centerFirstBtn = document.querySelector("#secondJourney > .firstPlace");
const centerSecondBtn = document.querySelector("#secondJourney > .secondPlace");
const centerThirdBtn = document.querySelector("#secondJourney > .thirdPlace");
// 3 번째 블록 전라도 3개 지역 : 전주, 순천, 여수
const bottomFirstBtn = document.querySelector("#thirdJourney > .firstPlace");
const bottomSecondBtn = document.querySelector("#thirdJourney > .secondPlace");
const bottomThirdBtn = document.querySelector("#thirdJourney > .thirdPlace");

// 이미지 담을 4개 구역(블록 3개)
const topPics = document.querySelectorAll(
  "div.firstJourney > div.media-1  > a > img"
);
const centerPics = document.querySelectorAll(
  "div.secondJourney > div.media-1  > a > img"
);
const bottomPics = document.querySelectorAll(
  "div.thirdJourney > div.media-1  > a > img"
);
// console.log(showPics);
// 이미지 아래 제목, 설명
const topTitle = document.querySelectorAll(".firstJourney .d-flex h3 > a");
const centerTitle = document.querySelectorAll(".secondJourney .d-flex h3 > a");
const bottomTitle = document.querySelectorAll(".thirdJourney .d-flex h3 > a");
const topContent = document.querySelectorAll(".firstJourney  .d-flex p");
const centerContent = document.querySelectorAll(".secondJourney  .d-flex p");
const bottomContent = document.querySelectorAll(".thirdJourney  .d-flex p");

// 클릭 이벤트
/* 인자 : 
  (클릭한 도시 li태그, 나머지 도시1 li태그, 나머지 도시2 li 태그, 이미지 담을 구역 배열, 담을 이미지 배열)*/
function showPics(
  activeBtn,
  disableBtn1,
  disableBtn2,
  pics,
  imgPath,
  beforeTitle,
  beforeContent,
  newTitle,
  newContent
) {
  activeBtn.addEventListener("click", () => {
    for (let i = 0; i < pics.length; i++) {
      // 선택된 버튼의 도시에 맞는 사진으로 변경
      pics[i].setAttribute("src", imgPath[i]);
      beforeTitle[i].innerText = newTitle[i];
      beforeContent[i].innerText = newContent[i];
    }
    activeBtn.style.border = "2px solid #ffc72c";
    activeBtn.style.borderBottom = "#ffffff";
    activeBtn.style.color = "#000000";
    // 선택하지 않은 버튼 --> gray, border : white
    disableBtn1.style.border = "2px solid #ffffff";
    disableBtn1.style.color = "#bec8d2";
    disableBtn2.style.border = "2px solid #ffffff";
    disableBtn2.style.color = "#bec8d2";
  });
}
// 클릭이벤트 설정
// 1 번째 4개 사진 블록(수도권 : 서울 - 1, 서울 - 2, 인천)
showPics(
  topFirstBtn,
  topSecondBtn,
  topThirdBtn,
  topPics,
  seoul_1Img,
  topTitle,
  topContent,
  seoulTitle1,
  seoulContent1
);
showPics(
  topSecondBtn,
  topFirstBtn,
  topThirdBtn,
  topPics,
  seoul_2Img,
  topTitle,
  topContent,
  seoulTitle2,
  seoulContent2
);
showPics(
  topThirdBtn,
  topFirstBtn,
  topSecondBtn,
  topPics,
  incheonImg,
  topTitle,
  topContent,
  incheonTitle,
  incheonContent
);
// 2 번째 4개 사진 블록(경상도 : 부산, 경주, 거제)
showPics(
  centerFirstBtn,
  centerSecondBtn,
  centerThirdBtn,
  centerPics,
  busanImg,
  centerTitle,
  centerContent,
  busanTitle,
  busanContent
);
showPics(
  centerSecondBtn,
  centerFirstBtn,
  centerThirdBtn,
  centerPics,
  gyeongjuImg,
  centerTitle,
  centerContent,
  gyeongjuTitle,
  gyeongjuContent
);
showPics(
  centerThirdBtn,
  centerFirstBtn,
  centerSecondBtn,
  centerPics,
  geojeImg,
  centerTitle,
  centerContent,
  geojeTitle,
  geojeContent
);
// 3 번째 4개 사진 블록(전라도 : 전주, 여수, 순천
showPics(
  bottomFirstBtn,
  bottomSecondBtn,
  bottomThirdBtn,
  bottomPics,
  jeonjuImg,
  bottomTitle,
  bottomContent,
  jeonjuTitle,
  jeonjuContent
);
showPics(
  bottomSecondBtn,
  bottomFirstBtn,
  bottomThirdBtn,
  bottomPics,
  yeosuImg,
  bottomTitle,
  bottomContent,
  yeosuTitle,
  yeosuContent
);
showPics(
  bottomThirdBtn,
  bottomFirstBtn,
  bottomSecondBtn,
  bottomPics,
  suncheonImg,
  bottomTitle,
  bottomContent,
  suncheonTitle,
  suncheonContent
);