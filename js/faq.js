window.onload = function () {
  let faq1 = document.querySelectorAll(".faq_1");

  for (var pq of faq1) {
    pq.addEventListener("click", function () {
      hideAll();
      this.classList.add("active");
    });
  }
  function hideAll() {
    for (q of faq1) {
      q.classList.remove("active");
    }
  }

  //

  //   const tabMenu = document.querySelectorAll(".question_top_menu .list_wrap li");
  //   const content = document.querySelectorAll(
  //     ".question_top_menu_wrap .tab_content .cont"
  //   );

  //   let activeCont = "";
  //   function showContent(num) {
  //     content.forEach(function (item) {
  //       item.style.display = "none";
  //     });
  //     content[num].style.display = "block";
  //   }
  //   showContent(0);
  //   for (var i = 0; i < tabMenu.length; i++) {
  //     tabMenu[i].querySelector(".btn").addEventListener("click", function (e) {
  //       e.preventDefault(); //기본설정을 초기화?
  //       for (var j = 0; j < tabMenu.length; j++) {
  //         tabMenu[j].classList.remove("list");
  //         content[j].style.display = "none";
  //       }
  //       this.parentNode.classList.add("list");
  //       activeCont = this.getAttribute("href");
  //       document.querySelector(activeCont).style.display = "block";
  //     });
  //   }

  const content = document.querySelector(".question_inner");
  const content2 = document.querySelector(".use_guide");
  const menu = document.querySelector(".list1");
  const menu2 = document.getSelection(".list2");

  menu.addEventListener("click", function () {
    content.style.display = "block";
    content2.style.display = "none";
  });

  menu2.addEventListener("click", function () {
    content.style.display = "none";
    content2.style.display = "block";
  });
};
