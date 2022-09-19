// 이미지 확장자명 통일
// 예를 들어 확장자명 jpg이면 아래와 같이 이미지 파일명 지정
// 이미지 경로 반드시 "img/(영문국가명)(한글장소명).jpg"으로 할 것
// ex) img/france에펠탑.jpg

//프랑스 이미지 이름 --> 경로에 추가할 예정----------------------------
const parisPlace = [
  "에펠탑(맑은하늘)",
  "에펠탑(노을)",
  "에펠탑(저녁)",
  "에펠탑(밤)",
];
const bordeauxPlace = [
  "파리전경",
  "프로방스길거리",
  "프로방스분수",
  "알렉상드르3세다리",
];
const lyonPlace = ["뤽상부르공원", "몽마르뜨언덕", "샹젤리제", "에펠탑(노을)"];
// 프랑스 도시별 이미지 담을 배열
const parisImg = [];
const bordeauxImg = [];
const lyonImg = [];

// 프랑스 도시별 제목 담을 배열
const parisTitle = [];
const bordeauxTitle = [];
const lyonTitle = [];
// 프랑스 도시별 설명 담을 배열
const parisContent = [];
const bordeauxContent = [];
const lyonContent = [];
// 제목 담기
parisTitle.push("1,999,000원 ~");
parisTitle.push("2,139,000원 ~");
parisTitle.push("1,499,000원 ~");
parisTitle.push("3,199,000원 ~");
bordeauxTitle.push("1,599,000원 ~");
bordeauxTitle.push("2,119,000원 ~");
bordeauxTitle.push("1,339,000원 ~");
bordeauxTitle.push("1,679,000원 ~");
lyonTitle.push("2,159,000원 ~");
lyonTitle.push("1,499,000원 ~");
lyonTitle.push("2,459,000원 ~");
lyonTitle.push("3,129,000원 ~");
// 내용 담기
parisContent.push(
  "[서유럽 3국8일]\n유로 익스프레스타고 알프스 산맥 넘어\n프랑스/스위스/이탈리아 3국을 동시에!"
);
parisContent.push(
  "[파리 6박7일]\n현지인과 함께 하는 파리 생활!\n가족,연인과 에펠탑 뷰를 즐기자!"
);
parisContent.push(
  "[파리 건축여행]\n프랑스 파리 현지에서만 느낄 수 있는\n바로크 양식을 눈 앞에!"
);
parisContent.push(
  "[프렌치 요리 투어]\n현지 셰프들이 직접 눈앞에서 만드는\n고급 요리를 맛볼 수 있는 요리여행!"
);
bordeauxContent.push(
  "[보르도 와인 여행]\n보르도 와인/와이너리 공장 투어/\n와인 무료 시음 저렴한 가격부터\n초호화 와인까지!"
);
bordeauxContent.push(
  "[보르도 시내 투어]\n생아르뎅 대성당/보르도 대극장/\n와인박물관! 보르도의 건축을 느껴보자!"
);
bordeauxContent.push(
  "[보르도하면 광장이지!]\n부르스 광장/물거울/캥콩스 광장!\n광장을 거닐며 보르도의 역사 속으로!"
);
bordeauxContent.push(
  "[중세마을 투어와 와인을 동시에]\n생떼밀리옹에서 경관도 즐기고\n와인도 사보고 축제도 즐기고!"
);
lyonContent.push(
  "[축제의 도시 리옹]\n4월, 5월, 12월 한정!!\n유럽가서 비에르 축제,전자음악 축제,\n빛 축제까지 즐기자!"
);
lyonContent.push(
  "[리옹에서 즐기는 미식]\n퐁드콜롱주, 테테두이에서 전통 리옹음식을 맛보자! 전통음식은 라메르장으로!"
);
lyonContent.push(
  "[리옹 현지에서 무작정 도보여행]\n리옹의 시내를 걸으며 노트르담 대성당부터 콩플뤼앙스 박물관까지!"
);
lyonContent.push(
  "[현지인과 함께하는 남부여행]\n중세시대의 흔적이 남아있는 리옹을 현지인 가이드와 함께!"
);
//일본 이미지 이름 --> 경로에 추가할 예정--------------------------------
const tokyoPlace = [
  "도쿄(도쿄타워)",
  "도쿄(스카이트리)",
  "도쿄(신주쿠)",
  "도쿄(요자쿠라)",
];
const osakaPlace = [
  "오사카(덴포잔)",
  "오사카(도톤보리)",
  "오사카(시텐노지)",
  "오사카(오사카성)",
];
const sapporoPlace = [
  "삿포로(국제스키장)",
  "삿포로(눈축제)",
  "삿포로(스스키노)",
  "삿포로(오도리공원)",
];
// 일본 도시별 이미지 담을 배열
const tokyoImg = [];
const osakaImg = [];
const sapporoImg = [];

// 일본 도시별 제목 담을 배열
const tokyoTitle = [];
const osakaTitle = [];
const sapporoTitle = [];
// 일본 도시별 설명 담을 배열
const tokyoContent = [];
const osakaContent = [];
const sapporoContent = [];
// 제목 담기
tokyoTitle.push("599,000 원 ~ ");
tokyoTitle.push("649,000 원 ~ ");
tokyoTitle.push("699,000 원 ~ ");
tokyoTitle.push("849,000 원 ~ ");
osakaTitle.push("399,000 원 ~ ");
osakaTitle.push("679,000 원 ~ ");
osakaTitle.push("1,099,000 원 ~ ");
osakaTitle.push("549,000 원 ~ ");
sapporoTitle.push("899,000 원 ~ ");
sapporoTitle.push("1,099,000 원 ~ ");
sapporoTitle.push("1,649,000원 ~ ");
sapporoTitle.push("999,000원~");
// 내용 담기
tokyoContent.push("[이국적인풍경속의오감만족]\n◆라멘박물관+아카렌카◆\n동경,요코하마,가마쿠라3일");
tokyoContent.push("[다시떠나는그리운동경]\n◇준특급2박+NO팁+1일자유◇\n동경,오다이바,나리타3일");
tokyoContent.push("[거리곳곳감성가득한동경]\n◈온천호텔2박+동경시내정복◈\n동경,오다이바,나리타3일");
tokyoContent.push("[자연의온기가가득한]\n◆전일온천+로즈&허브가든◆\n동경,아타미,하코네4일");
osakaContent.push("[다시만나는너의이름은오사카]\n◇온천호텔+1일자유◇\n오사카,교토,아라시야마3/4일");
osakaContent.push("[테마가있는색다른오사카]\n◇테마파크+1일자유◇\n유니버셜스튜디오재팬+고베3일");
osakaContent.push("[연휴에떠나는오사카]\n◇교토숙박+고베하버랜드◇\n오사카,교토,고베,아라시야마4일");
osakaContent.push("[화려함속즐길거리가득한오사카]\n◇온천호텔+크루즈+란덴열차◇\n오사카,교토,고베3일");
sapporoContent.push("[北國의로망스]\n◇특급호텔+도야호불꽃놀이◇\n삿포로,오타루,후라노,비에이4일");
sapporoContent.push("[코발트빛지평선너머에는]\n◇특급호텔+아오이케◇\n삿포로,후라노,비에이,샤코탄4일");
sapporoContent.push("[온천과 함께하는 휴양여행]\n북해도/노보리베츠/죠잔케이 4일\n[2대게요리특식]");
sapporoContent.push("[히트상품]\n북해도 3박4일 패키지\n삿포로/후라노+비에이도야/오타루\n핵심관광");

// 대만 이미지 이름 --------------------------------------------
const taipeiPlace = [
  "타이베이(예류)",
  "타이베이(지우펀)",
  "타이베이(핑시)",
  "타이베이(홍마오청)",
];
const tainanPlace = ["타이난", "타이난(츠칸러우)", "타이난2", "타이난3"];
const kaohsiungPlace = [
  "가오슝(보얼예술특구)",
  "가오슝(아이허완)",
  "가오슝(연지담)",
  "가오슝(치진섬)",
];
// 대만 도시별 이미지 담을 배열
const taipeiImg = [];
const tainanImg = [];
const kaohsiungImg = [];

// 배열에 도시별 이미지 담기
// 인자 : (국가이름 문자열, 장소 배열, 이미지 배열)
function pushImg(country, place, imgPath) {
  for (let i = 0; i < place.length; i++) {
    imgPath.push("img/" + country + place[i] + ".jpg");
  }
}
// 프랑스 도시별 이미지 배열
pushImg("france", parisPlace, parisImg);
pushImg("france", bordeauxPlace, bordeauxImg);
pushImg("france", lyonPlace, lyonImg);
// 일본 도시별 이미지 배열
pushImg("japan", tokyoPlace, tokyoImg);
pushImg("japan", osakaPlace, osakaImg);
pushImg("japan", sapporoPlace, sapporoImg);
// 대만 도시별 이미지 배열
pushImg("taiwan", taipeiPlace, taipeiImg);
pushImg("taiwan", tainanPlace, tainanImg);
pushImg("taiwan", kaohsiungPlace, kaohsiungImg);

// 대만 도시별 제목 담을 배열
const taipeiTitle = [];
const tainanTitle = [];
const kaohsiungTitle = [];
// 일본 도시별 설명 담을 배열
const taipeiContent = [];
const tainanContent = [];
const kaohsiungContent = [];
// 제목 담기
taipeiTitle.push("1,099,000 원 ~ ");
taipeiTitle.push("999,000 원 ~ ");
taipeiTitle.push("1,399,000 원 ~ ");
taipeiTitle.push("2,199,000 원 ~");
tainanTitle.push("429,425 원 ~ ");
tainanTitle.push("899,000 원 ~ ");
tainanTitle.push("410,000 원 ~ ");
tainanTitle.push("899,000 원 ~ ");
kaohsiungTitle.push("1,699,000 원 ~ ");
kaohsiungTitle.push("1,517,000 원 ~ ");
kaohsiungTitle.push("999,000 원 ~ ");
kaohsiungTitle.push("1,099,000 원 ~ ");
// 내용 담기
taipeiContent.push("[추천 NO.1/대만]\n화련/야류/스펀/지우펀/\n야시장/칠성담 4일");
taipeiContent.push("[FUN한 대만]\n단수이/홍마오청/화산1914/\n야류/지우펀 4일");
taipeiContent.push("[냥덕후/고양이마을]\n대만/단수이/미라마관람차/\n허우통/스펀/지우펀 4일");
taipeiContent.push("[달콤한시간/먹킷리스트]\n노팁/노쇼핑/노옵션/\n대만 먹거리 즐기기 4일");
tainanContent.push("[대만 타이난 프라이빗 투어]\n전통이 있는 관광지부터\n먹거리 다양한 야시장까지");
tainanContent.push("[대만 가장 긴 역사를가진 도시 타이난]\n5성급 호텔, 차량, 기사 포함 옵션 4일");
tainanContent.push("[타이난 추천투어]\n연지담풍경구/용호탑 3일 ");
tainanContent.push("[타이난 앵콜투어]\n현지인 추천 관광지 투어 3일 ");
kaohsiungContent.push("[대만에는 가오슝도 있슝]\n아이허/치진/시즈완해변/\n연지담풍경구 4일 ");
kaohsiungContent.push("[대만 제2의도시]\n아이허 유람선/시즈완해변/\n5성급호텔 3일 ");
kaohsiungContent.push("[대만 거대항구 도시 가오슝]\n류허야시장/발맛사지/\n다거우영국영사관 3일 ");
kaohsiungContent.push("[석양이 아름다운 가오슝으로 떠나요]\n보얼예술특구/치진/롄츠탄 \n인생삿 가능 3일 ");

//----------------------------------------------------------------------
// 도시 버튼 : 클릭 --> 이미지 보여주기
// 1 번째 블록 프랑스 3개 도시 : 파리, 보르도, 리옹
const topFirstBtn = document.querySelector("#firstJourney > .firstPlace");
const topSecondBtn = document.querySelector("#firstJourney > .secondPlace");
const topThirdBtn = document.querySelector("#firstJourney > .thirdPlace");
// 2 번째 블록 일본 3개 도시 : 도쿄, 오사카, 삿포로
const centerFirstBtn = document.querySelector("#secondJourney > .firstPlace");
const centerSecondBtn = document.querySelector("#secondJourney > .secondPlace");
const centerThirdBtn = document.querySelector("#secondJourney > .thirdPlace");
// 3 번째 블록 타이완 3개 도시 : 타이페이, 타이난, 가오슝
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
// 이미지 아래 제목, 설명
const topTitle = document.querySelectorAll(".firstJourney .d-flex h3 > a");
const centerTitle = document.querySelectorAll(".secondJourney .d-flex h3 > a");
const bottomTitle = document.querySelectorAll(".thirdJourney .d-flex h3 > a");
const topContent = document.querySelectorAll(".firstJourney  .d-flex p");
const centerContent = document.querySelectorAll(".secondJourney  .d-flex p");
const bottomContent = document.querySelectorAll(".thirdJourney  .d-flex p");

// 클릭 이벤트
/* 
인자 : 
  (클릭한 도시 li태그, 나머지 도시1 li태그, 나머지 도시2 li 태그, 이미지 담을 구역 배열, 담을 이미지 배열, 이전제목, 이전내용, 변경제목, 변경내용)
*/
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
      // 선택된 도시에 맞는 제목 / 설명으로 변경
      pics[i].setAttribute("src", imgPath[i]);
      beforeTitle[i].innerText = newTitle[i];
      beforeContent[i].innerText = newContent[i];
    }
    //선택한 버튼 --> black, border : yellow
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
// 1 번째 4개 사진 블록(프랑스 : 파리, 보르도, 리옹)
showPics(
  topFirstBtn,
  topSecondBtn,
  topThirdBtn,
  topPics,
  parisImg,
  topTitle,
  topContent,
  parisTitle,
  parisContent
);
showPics(
  topSecondBtn,
  topFirstBtn,
  topThirdBtn,
  topPics,
  bordeauxImg,
  topTitle,
  topContent,
  bordeauxTitle,
  bordeauxContent
);
showPics(
  topThirdBtn,
  topFirstBtn,
  topSecondBtn,
  topPics,
  lyonImg,
  topTitle,
  topContent,
  lyonTitle,
  lyonContent
);
// 2 번째 4개 사진 블록(일본 : 도쿄, 오사카, 쿄토)
showPics(
  centerFirstBtn,
  centerSecondBtn,
  centerThirdBtn,
  centerPics,
  tokyoImg,
  centerTitle,
  centerContent,
  tokyoTitle,
  tokyoContent
);
showPics(
  centerSecondBtn,
  centerFirstBtn,
  centerThirdBtn,
  centerPics,
  osakaImg,
  centerTitle,
  centerContent,
  osakaTitle,
  osakaContent
);
showPics(
  centerThirdBtn,
  centerFirstBtn,
  centerSecondBtn,
  centerPics,
  sapporoImg,
  centerTitle,
  centerContent,
  sapporoTitle,
  sapporoContent
);
// 3 번째 4개 사진 블록(대만 : 타이페이, 지우펀, 타이중)
showPics(
  bottomFirstBtn,
  bottomSecondBtn,
  bottomThirdBtn,
  bottomPics,
  taipeiImg,
  bottomTitle,
  bottomContent,
  taipeiTitle,
  taipeiContent
);
showPics(
  bottomSecondBtn,
  bottomFirstBtn,
  bottomThirdBtn,
  bottomPics,
  tainanImg,
  bottomTitle,
  bottomContent,
  tainanTitle,
  tainanContent
);
showPics(
  bottomThirdBtn,
  bottomFirstBtn,
  bottomSecondBtn,
  bottomPics,
  kaohsiungImg,
  bottomTitle,
  bottomContent,
  kaohsiungTitle,
  kaohsiungContent
);