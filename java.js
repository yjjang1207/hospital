const tabMenu = document.querySelectorAll('.tab_menu .list_wrap li');
const contents = document.querySelectorAll('.tab_menu .tab_content .cont');
let activeCont = '';
function showContent(num){
    contents.forEach(function(item){
        item.style.display = 'none';
    });
    contents[num].style.display = 'block';
}
showContent(0);
for(var i = 0; i < tabMenu.length; i++){
    tabMenu[i].querySelector('.btn').addEventListener('click',function(e){
        e.preventDefault();
        for(var j = 0; j < tabMenu.length; j++){
            tabMenu[j].classList.remove('list');
            contents[j].style.display = 'none';
        }
        this.parentNode.classList.add('list');
        activeCont = this.getAttribute('href');
        document.querySelector(activeCont).style.display = 'block';
    });
}

let Qna1 = document.querySelectorAll('.qna1');
let btnCollapse = document.getElementById('btn-collapse');

for(var pq of Qna1){
    pq.addEventListener('click',function(){
        hideAll();
        this.classList.add('active');
    });
}
function hideAll(){
    for(q of Qna1){
        q.classList.remove('active');
    }
}
btnCollapse.addEventListener('click', hideAll);

