window.onload = () => {
    // 큐브가 상하로 4개의 아이콘으로 회전
    let deg = 0;
    const cube = document.querySelector(".cube");

    if (cube) {
        setInterval(() => {
            deg -= 90;
            cube.style.transform = `rotateX(${deg}deg)`;
        }, 1000);
    }

  
    // 시간 표시 Clock function
    function Clock() {
        var date = new Date(); // 새로운 Date 객체 생성 (매번 갱신)
        var YYYY = String(date.getFullYear());
        var MM = String(date.getMonth() + 1);
        var DD = Zero(date.getDate());
        var hh = Zero(date.getHours());
        var mm = Zero(date.getMinutes());
        var ss = Zero(date.getSeconds());
        var Week = Weekday(date); // Weekday 함수에 date 객체를 전달
        Write(YYYY, MM, DD, hh, mm, ss, Week);
    }
  

    // Zero function
    function Zero(num) {
        return (num < 10 ? '0' + num : '' + num); // 1자리 수는 0을 붙여 2자리로 만듦
    }

  
    // Weekday function
    function Weekday(date) {
        var Week = ['일', '월', '화', '수', '목', '금', '토'];
        var Weekday = date.getDay();
        return Week[Weekday];
    }

  
    // Write function
    function Write(YYYY, MM, DD, hh, mm, ss, Week) {
        var Clockday = document.getElementById("Clockday");
        var Clock = document.getElementById("Clock");
        if (Clockday) Clockday.innerText = `${YYYY}/${MM}/${DD}(${Week})`;
        if (Clock) Clock.innerText = `${hh}:${mm}:${ss}`;
    }

    setInterval(Clock, 1000); // 1초마다 Clock 함수 실행


  
  
  
  
   // 초기화면 광고 로고 띄우고 1초후에 메인 페이지를 열리게 하려고 사용(시작지점) */
   // 이 코드를 사용하기위해 index.html,style.css와 jikji.js파일과 연결되어있다. */
   // 전체 화면을 덮는 로딩 화면 스타일 */
   // 초기화면 로딩 화면을 숨기고 메인 콘텐츠를 보이게 하는 코드
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';

        // CSS transition 효과를 위한 딜레이 (0.5초 후 display: none 적용)
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 500);
    }, 1000); // 1초 동안 로딩 화면
};



