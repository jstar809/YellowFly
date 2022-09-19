    // 1. 카카오 초기화
    Kakao.init('c62b81cb907b96008a7ff14ca772a512');
    console.log( Kakao.isInitialized() ); // 초기화 판단여부

    // 2. 카카오 로그인 후 토근 값 저장.
    function loginWithKakao() {
        Kakao.Auth.login({
            success: function (authObj) {
                console.log(authObj); // access토큰 값
                Kakao.Auth.setAccessToken(authObj.access_token); // access토큰값 저장
                getInfo(window.location.href = "mainpage.html"); // 로그인 성공 시 메인 페이지로 이동
        
            },
            fail: function (err) {
                console.log(err);
            }
        });
    }

    // 3. 엑세스 토큰을 발급받고, 아래 함수를 호출시켜서 사용자 정보를 받아옴.
    function getInfo() {
        Kakao.API.request({
            url: '/v2/user/me',
            success: function (res) {
                console.log(res);
                // 이메일, 성별, 닉네임, 프로필이미지
                var email = res.kakao_account.email;
                var gender = res.kakao_account.gender;
                var profile_nickname = res.kakao_account.profile.nickname;
                var profile_image = res.kakao_account.profile.thumbnail_image_url;
                var birthday = res.kakao_account.birthday;

                console.log(email, gender, profile_nickname, profile_image, birthday);
            },
            fail: function (error) {
                alert('카카오 로그인에 실패했습니다. 관리자에게 문의하세요.' + JSON.stringify(error));
            }
        });
    }

    // 4. 로그아웃 기능 - 카카오 서버에 접속하는 엑세스 토큰을 만료, 사용자 어플리케이션의 로그아웃은 따로 진행.
    function kakaoLogout() {
        if (!Kakao.Auth.getAccessToken()) {
            alert('Not logged in.');
            return;
        }
        Kakao.Auth.logout(function() {
            alert('logout ok\naccess token -> ' + Kakao.Auth.getAccessToken());
        });
    }