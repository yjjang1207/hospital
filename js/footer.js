window.onload = function(){
    // 패밀리사이트설정
    let familysite = document.querySelector('.family_txt');
    let familysiteCont = document.querySelector('.family_cont');


    document.addEventListener('click', function(){
        // langbg.style.display = 'none';
        // 빈 곳 클릭을 확인
        if (!event.target.closest('.family_txt')) {
            // 언어 목록을 숨김
            familysiteCont.style.display = 'none';
        } else {
            // 언어 선택 메뉴를 클릭한 경우
            if (familysiteCont.style.display === 'block') {
                // 언어 목록이 이미 열려있는 경우 닫음
                familysiteCont.style.display = 'none';
            } else {
                // 언어 목록이 닫혀있는 경우 열림
                familysiteCont.style.display = 'block';
            }
        }
    });
    }


