window.onload = function () {
  const adImg1 = document.querySelector(".ad_img_1");
  const adImg2 = document.querySelector(".ad_img_2");
  const adImg3 = document.querySelector(".ad_img_3");
  const adImg4 = document.querySelector(".ad_img_4");
  const adImg5 = document.querySelector(".ad_img_5");

  const adBtn1 = document.querySelector(".ad_btn1");
  const adBtn2 = document.querySelector(".ad_btn2");
  const adBtn3 = document.querySelector(".ad_btn3");
  const adBtn4 = document.querySelector(".ad_btn4");
  const adBtn5 = document.querySelector(".ad_btn5");

  let mainImageWrap = document.querySelector(".ad");

  adBtn1.addEventListener("click", function () {
    adImg1.style.display = "flex";
    adImg2.style.display = "none";
    adImg3.style.display = "none";
    adImg4.style.display = "none";
    adImg5.style.display = "none";
    adBtn1.classList.add("active");
    adBtn2.classList.remove("active");
    adBtn3.classList.remove("active");
    adBtn4.classList.remove("active");
    adBtn5.classList.remove("active");
  });

  //

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

  //
};
