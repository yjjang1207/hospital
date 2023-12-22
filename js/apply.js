window.onload = function() {
    // 체크박스 전체 동의 시 전체 체크됨
    const checkAll = document.querySelector('#apply_all');
    const checkBoxes = document.querySelectorAll('.apply_cont input');

    checkAll.addEventListener('click', function(){
        const isChecked = checkAll.checked;

        if(isChecked){
            for(const checkbox of checkBoxes){
                checkbox.checked = true;
            }
        }
        else {
            for(const checkbox of checkBoxes){
                checkbox.checked = false;
            }
        }
    });

    // 체크박스 하나하나 동의해도 전체 동의에 체크됨
    for(const checkbox of checkBoxes){
        checkbox.addEventListener('click', function(){
            const totalCnt = checkBoxes.length;
            const checkedCnt = document.querySelectorAll('.apply_cont input:checked').length;

            if(totalCnt == checkedCnt){
                checkAll.checked = true;
            } else {
                checkAll.checked = false;
            }
        });
    }

    // 필수 체크박스 체크 시 동의 버튼 활성화
    const checkbox1 = document.getElementById('apply1');
    const checkbox2 = document.getElementById('apply2');
    const button = document.getElementById('agree_btn');

    checkbox1.addEventListener('change', checkCheckBoxes);
    checkbox2.addEventListener('change', checkCheckBoxes);
    checkAll.addEventListener('change', checkCheckBoxes);

    function checkCheckBoxes(){
        if(checkbox1.checked && checkbox2.checked){
            button.disabled = false;
            button.classList.add('btn_active');
            button.classList.remove('btn2');
        } else {
            button.disabled = true;
            button.classList.remove('btn_active');
            button.classList.add('btn2');
        }        
    }

    // button.onclick=()=>{
    //     //if( && ){
    //     location.href="join.html"
    //     //}
    // }

    button.addEventListener('click', function(){
        if(button.disabled == false){
            location.href = "join.html"
        }
    })



}

