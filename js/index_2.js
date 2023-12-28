window.onload = function () {
  //notice
  const tabBtn1 = document.querySelector(".tab_btn1");
  const tabBtn2 = document.querySelector(".tab_btn2");
  const tabBtn3 = document.querySelector(".tab_btn3");
  const tabBtn4 = document.querySelector(".tab_btn4");

  const tabInner1 = document.querySelector(".eulji_news");
  const tabInner2 = document.querySelector(".eulji_qna");
  const tabInner3 = document.querySelector(".eulji_employment");
  const tabInner4 = document.querySelector(".eulji_bid");

  const tabItem1 = document.querySelector(".tab_item1");
  const tabItem2 = document.querySelector(".tab_item2");
  const tabItem3 = document.querySelector(".tab_item3");
  const tabItem4 = document.querySelector(".tab_item4");

  tabBtn1.addEventListener("click", function () {
    tabInner1.style.display = "block";
    tabInner2.style.display = "none";
    tabInner3.style.display = "none";
    tabInner4.style.display = "none";

    tabItem1.classList.add("tab_active");
    tabItem2.classList.remove("tab_active");
    tabItem3.classList.remove("tab_active");
    tabItem4.classList.remove("tab_active");
  });
  tabBtn2.addEventListener("click", function () {
    tabInner1.style.display = "none";
    tabInner2.style.display = "block";
    tabInner3.style.display = "none";
    tabInner4.style.display = "none";

    tabItem1.classList.remove("tab_active");
    tabItem2.classList.add("tab_active");
    tabItem3.classList.remove("tab_active");
    tabItem4.classList.remove("tab_active");
  });
  tabBtn3.addEventListener("click", function () {
    tabInner1.style.display = "none";
    tabInner2.style.display = "none";
    tabInner3.style.display = "block";
    tabInner4.style.display = "none";

    tabItem1.classList.remove("tab_active");
    tabItem2.classList.remove("tab_active");
    tabItem3.classList.add("tab_active");
    tabItem4.classList.remove("tab_active");
  });
  tabBtn4.addEventListener("click", function () {
    tabInner1.style.display = "none";
    tabInner2.style.display = "none";
    tabInner3.style.display = "none";
    tabInner4.style.display = "block";

    tabItem1.classList.remove("tab_active");
    tabItem2.classList.remove("tab_active");
    tabItem3.classList.remove("tab_active");
    tabItem4.classList.add("tab_active");
  });

  //doctor
  // $(function () {
  //   let doctor_width = $(".doctor div").width();

  //   $(".arrow button").click(function () {
  //     let idxd = $(this).index();
  //     console.log(idxd);
  //     $(".doctor ul").animate({ left: -doctor_width * idxd });
  //   });

  //   $(".doctor_wrap, .doctor").width(doctor_width);

  //   let doctor_len = $(".doctor li").length;
  //   $(".doctor ul").width(doctor_width * doctor_len);
  // });

  //miniad
  $(function () {
    let img_width = $(".ad_inner img").width();

    $(".ad_btn li").click(function () {
      let idx = $(this).index();
      console.log(idx);
      $(".ad_inner ul").animate({ left: -img_width * idx });
    });

    $(".ad, .ad_inner").width(img_width);

    let item_len = $(".ad_inner li").length;
    $(".ad_inner ul").width(img_width * item_len);
  });

  //miniad btn
  const adBtn1 = document.querySelector(".ad_btn1");
  const adBtn2 = document.querySelector(".ad_btn2");
  const adBtn3 = document.querySelector(".ad_btn3");
  const adBtn4 = document.querySelector(".ad_btn4");
  const adBtn5 = document.querySelector(".ad_btn5");

  adBtn1.addEventListener("click", function () {
    document.querySelector(".ad_btn1 > img").src = "../images/circle_c.png";
    document.querySelector(".ad_btn2 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn3 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn4 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn5 > img").src = "../images/circle_w.png";
  });
  adBtn2.addEventListener("click", function () {
    document.querySelector(".ad_btn1 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn2 > img").src = "../images/circle_c.png";
    document.querySelector(".ad_btn3 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn4 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn5 > img").src = "../images/circle_w.png";
  });
  adBtn3.addEventListener("click", function () {
    document.querySelector(".ad_btn1 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn2 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn3 > img").src = "../images/circle_c.png";
    document.querySelector(".ad_btn4 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn5 > img").src = "../images/circle_w.png";
  });
  adBtn4.addEventListener("click", function () {
    document.querySelector(".ad_btn1 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn2 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn3 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn4 > img").src = "../images/circle_c.png";
    document.querySelector(".ad_btn5 > img").src = "../images/circle_w.png";
  });
  adBtn5.addEventListener("click", function () {
    document.querySelector(".ad_btn1 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn2 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn3 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn4 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn5 > img").src = "../images/circle_c.png";
  });
  //이플릿
};
