# carrot game🥕
**벌레를 피해 당근을 클릭하는 게임입니다.**
1. 재생버튼 누를시 타이머 스타트/ 당근과 벌레는 랜덤 위치에 포지션
2. 당근 클릭시 스코어의 숫자 줄어듬
3. 벌레 클릭시 게임오버
4. 당근을 전부 클릭시 you win모달 뜸
5. replay 누를시 처음으로 리셋



#### 21.12.04 ver.1 🗄
1. HTML마크업과 css스타일링 
2. 스타트버트 클릭시 타이머 실행
3. 타이머(10초)끝날시 result section 띄움<br>
 (기존에 있던 you win을 you lose👻로 바꿈
4. replay 누를시 timmer 00:00으로 셋팅, result section은 다시 안보이게 숨김

#### 21.12.04 ver.2
1. 랜덤으로 포지션설정
2. 스타트버튼 클릭시 벌레와 당근 랜덤 포지션에 나옴<br>
// 근데,, 당근이랑 벌레 어떻게 떨어뜨리지.. 계속 붙어서나옴<br>
// 여러개는 어떻게 생성하지..

#### 21.12.05 ver.3
1. 사운드 추가
2. z-index수정<br>
 // for으로 element 생성하는거 도전해봄 근데 div안에 안들어감,,, ㅜㅜ 뭐가문제지,,

#### 21.12.06 ver.4
1. 랜덤 포지션 만듬, 여러개도나옴, 당근이랑 벌레도 떨어뜨림 (랜덤함수 사용해서 위치조정)
2. 스코어 = 당근갯수 설정 (당근이 제거될때마다 스코어도 줄어듬)
3. 당근이 0 일 경우 you win 모달나옴(사운드도변경)
4. 벌레 클릭시 you lose 모달나옴(사운드도 변경) <br>
5. 리플레이 누를시 벌레 당근 모두 제거
//당근이나 벌레 클릭시 타이머 멈추는거 구현할것

#### 21.12.06 ver.5
1.당근이나 벌레 클릭시 타이머 멈춤
2.타이머 innerHTML을 replay?로 바꿈
3.replay 버튼 누를시 새로고침
4.당근이나 벌레에 마우스 오버시 scale구현
5.폰트적용


------------------------------------------------------------------------------
<img src="https://user-images.githubusercontent.com/94913420/144780753-e309d38b-4879-4ebd-bd30-f70140724439.mov">
