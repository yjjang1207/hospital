window.onload = function(){
    let loginBtn = document.querySelector('.login_btn');
    let loginID = document.getElementById('login_id');
    let loginPWD = document.getElementById('login_pwd');

    loginBtn.addEventListener('click', function(){
        if(!loginID.value){
            alert("아이디를 입력해주세요.");
            loginID.focus();
            return false;
        }
        if(!loginPWD.value){
            alert("비밀번호를 입력해주세요.");
            loginPWD.focus();
            return false;
        }
        if(loginID.value.length>0 && loginPWD.value.length>0){
            alert("로그인 되었습니다.");
        }    
    });
}