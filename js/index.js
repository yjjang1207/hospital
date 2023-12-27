window.onload = function(){
    let pname = document.getElementById('p_name');
    let ptel = document.getElementById('p_tel');
    let psymptom = document.getElementById('p_symptom');
    let checkbox = document.getElementById('agree');
    let reservationBtn = document.querySelector(".new_reservation_btn");


    reservationBtn.addEventListener('click', function(){
        if(pname.value == ""){
            alert("성명을 입력하세요.");
            pname.focus();
            return false;
        }
        if(!ptel.value){
            alert("연락처를 입력하세요.");
            ptel.focus();
            return false;
        }
        if(!psymptom.value){
            alert("증상을 입력하세요.");
            psymptom.focus();
            return false;
        }
        if(checkbox.checked){
            alert("예약이 완료되었습니다.");
        } else {
            alert("개인정보 이용에 동의해주세요.")
        }
    });

    // if(pname.value.length>0 && ptel.value.length>0  && psymptom.value.length>0){
    //     reservationBtn.classList.add('new_reservation_btn_active');
    //     reservationBtn.classList.remove('new_reservation_btn');
    // }





    

let language = document.querySelector('.language');
let langbg = document.querySelector('.lang_bg');


document.addEventListener('click', function(){
    // langbg.style.display = 'none';
    // 빈 곳 클릭을 확인
    if (!event.target.closest('.language')) {
        // 언어 목록을 숨김
        langbg.style.display = 'none';
    } else {
        // 언어 선택 메뉴를 클릭한 경우
        if (langbg.style.display === 'block') {
            // 언어 목록이 이미 열려있는 경우 닫음
            langbg.style.display = 'none';
        } else {
            // 언어 목록이 닫혀있는 경우 열림
            langbg.style.display = 'block';
        }
    }
});




let gnb = document.querySelector('.gnb');
let navbg = document.querySelector('.nav_bg');
let twodepth = document.querySelectorAll('.two_depth');





gnb.addEventListener('mouseover', function(){
    navbg.style.display = 'block';
    for(i = 0; i < twodepth.length; i++){
        twodepth[i].style.display = 'block'; 
    }
});

// gnb.addEventListener('mouseout', function(){
//     navbg.style.display = 'none';
//     for (let i = 0; i < twodepth.length; i++) {
//         twodepth[i].style.display = 'none'; 
//     }
// });

navbg.addEventListener('mouseover', function(){
    navbg.style.display = 'block';
    for (let i = 0; i < twodepth.length; i++) {
        twodepth[i].style.display = 'block'; 
    }
});

navbg.addEventListener('mouseout', function(){
    navbg.style.display = 'none';
    for (let i = 0; i < twodepth.length; i++) {
        twodepth[i].style.display = 'none'; 
    }
});



}


