window.onload = function(){
    // 탑배너
    let close = document.querySelector('.close');
    let closeToday = document.querySelector('.close_today');
    let topbanner = document.querySelector('.top_banner_wrap')

    close.addEventListener('click', function(){
        topbanner.style.display = 'none';
    });
    closeToday.addEventListener('click', function(){
        topbanner.style.display = 'none';
    });





    // 바로가기메뉴-예약
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

     // 초기 상태 설정
    checkCheckBox();

    checkbox.addEventListener('change' ,checkCheckBox);
    pname.addEventListener('input', checkCheckBox);
    ptel.addEventListener('input', checkCheckBox);
    psymptom.addEventListener('input', checkCheckBox);

    function checkCheckBox(){
        if(
            pname.value.length > 0 &&
            ptel.value.length > 0 &&
            psymptom.value.length > 0 &&
            checkbox.checked
        ){
            reservationBtn.disabled = false;
            reservationBtn.classList.add('new_reservation_btn_active');
            reservationBtn.classList.remove('new_reservation_btn');
        } else {
            reservationBtn.disabled = true;
            reservationBtn.classList.remove('new_reservation_btn_active');
            reservationBtn.classList.add('new_reservation_btn');

        }
    }





    
    // 언어설정
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



    // GNB호버 설정

    let gnb = document.querySelector('.gnb');
    let navbg = document.querySelector('.nav_bg');
    let twodepth = document.querySelectorAll('.two_depth');
    let topmenu = document.querySelector('.top_menu');
    let logo = document.querySelector('.logo');





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

    topmenu.addEventListener('mouseout', function(){
        navbg.style.display = 'none';
        for (let i = 0; i < twodepth.length; i++) {
            twodepth[i].style.display = 'none'; 
        }
    });
    logo.addEventListener('mouseout', function(){
        navbg.style.display = 'none';
        for (let i = 0; i < twodepth.length; i++) {
            twodepth[i].style.display = 'none'; 
        }
    });
    logo.addEventListener('mouseover', function(){
        navbg.style.display = 'none';
        for (let i = 0; i < twodepth.length; i++) {
            twodepth[i].style.display = 'none'; 
        }
    });




    // 메인광고이미지
    let mainBtn1 = document.querySelector('.main_image_btn1');
    let mainBtn2 = document.querySelector('.main_image_btn2');
    let mainBtn3 = document.querySelector('.main_image_btn3');
    let mainBtn4 = document.querySelector('.main_image_btn4');
    let mainBtn5 = document.querySelector('.main_image_btn5');
    let mainBtn6 = document.querySelector('.main_image_btn6');

    let mainImage1 = document.querySelector('.main_image1');
    let mainImage2 = document.querySelector('.main_image2');
    let mainImage3 = document.querySelector('.main_image3');
    let mainImage4 = document.querySelector('.main_image4');
    let mainImage5 = document.querySelector('.main_image5');
    let mainImage6 = document.querySelector('.main_image6');

    // let main = document.querySelectorAll('.main_image > ul > li');
    // console.log(main);

    let mainImageWrap = document.querySelector('.main_image_wrap');

    

    mainBtn1.addEventListener('click', function(){
        mainImage2.style.display = 'none';
        mainImage3.style.display = 'none';
        mainImage4.style.display = 'none';
        mainImage5.style.display = 'none';
        mainImage6.style.display = 'none';
        mainImage1.style.display = 'flex';
        mainImageWrap.classList.add('main_image_background1');
        mainBtn1.classList.add('active');
        mainBtn2.classList.remove('active');
        mainBtn3.classList.remove('active');
        mainBtn4.classList.remove('active');
        mainBtn5.classList.remove('active');
        mainBtn6.classList.remove('active');
    });
    mainBtn2.addEventListener('click', function(){
        mainImage1.style.display = 'none';
        mainImage3.style.display = 'none';
        mainImage4.style.display = 'none';
        mainImage5.style.display = 'none';
        mainImage6.style.display = 'none';
        mainImage2.style.display = 'flex';
        mainImageWrap.classList.add('main_image_background2');

        mainBtn2.classList.add('active');
        mainBtn1.classList.remove('active');
        mainBtn3.classList.remove('active');
        mainBtn4.classList.remove('active');
        mainBtn5.classList.remove('active');
        mainBtn6.classList.remove('active');
    });
    mainBtn3.addEventListener('click', function(){
        mainImage1.style.display = 'none';
        mainImage2.style.display = 'none';
        mainImage4.style.display = 'none';
        mainImage5.style.display = 'none';
        mainImage6.style.display = 'none';
        mainImage3.style.display = 'flex';
        mainImageWrap.classList.add('main_image_background3');

        mainBtn3.classList.add('active');
        mainBtn2.classList.remove('active');
        mainBtn1.classList.remove('active');
        mainBtn4.classList.remove('active');
        mainBtn5.classList.remove('active');
        mainBtn6.classList.remove('active');
    });
    mainBtn4.addEventListener('click', function(){
        mainImage2.style.display = 'none';
        mainImage3.style.display = 'none';
        mainImage1.style.display = 'none';
        mainImage5.style.display = 'none';
        mainImage6.style.display = 'none';
        mainImage4.style.display = 'flex';
        mainImageWrap.classList.add('main_image_background4');

        mainBtn4.classList.add('active');
        mainBtn2.classList.remove('active');
        mainBtn2.classList.remove('active');
        mainBtn3.classList.remove('active');
        mainBtn1.classList.remove('active');
        mainBtn5.classList.remove('active');
        mainBtn6.classList.remove('active');
    });
    mainBtn5.addEventListener('click', function(){
        mainImage2.style.display = 'none';
        mainImage3.style.display = 'none';
        mainImage4.style.display = 'none';
        mainImage1.style.display = 'none';
        mainImage6.style.display = 'none';
        mainImage5.style.display = 'flex';
        mainImageWrap.classList.add('main_image_background5');

        mainBtn5.classList.add('active');
        mainBtn2.classList.remove('active');
        mainBtn3.classList.remove('active');
        mainBtn4.classList.remove('active');
        mainBtn1.classList.remove('active');
        mainBtn6.classList.remove('active');
    });
    mainBtn6.addEventListener('click', function(){
        mainImage2.style.display = 'none';
        mainImage3.style.display = 'none';
        mainImage4.style.display = 'none';
        mainImage5.style.display = 'none';
        mainImage1.style.display = 'none';
        mainImage6.style.display = 'flex';
        mainImageWrap.classList.add('main_image_background6');

        mainBtn6.classList.add('active');
        mainBtn2.classList.remove('active');
        mainBtn2.classList.remove('active');
        mainBtn2.classList.remove('active');
        mainBtn3.classList.remove('active');
        mainBtn4.classList.remove('active');
        mainBtn5.classList.remove('active');
        mainBtn1.classList.remove('active');
    });









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


