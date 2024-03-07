var a = document.querySelector('.pro');
a.addEventListener('click',()=>{
    document.querySelector('.innerprofile').classList.toggle('active');
})
function main(){
    var nam = document.getElementById('name').value;
    var pas = document.getElementById('pass').value;
    var form = document.getElementById('act');
    if(nam=='allu' && pas=='allu123'){
        alert('login successfully');
        window.location.assign("mainpage.html");
    }
    else{
        alert('invalid username / password');
        form.action='login.html';
        return false;
    }
}
// function check(){
//     var a = document.getElementById('pass');
//     if(a.type == 'password'){
//         a.type='text';
//     }
//     else{
//         a.type='password';
//     }
// }