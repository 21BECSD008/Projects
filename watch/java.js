function allu(){
let time=new Date();
let h=time.getHours();
let m=time.getMinutes();
let s=time.getSeconds();
let T='AM';
if(h>12){
    h-=12;
    T='PM';
}
if(m<10){
    h='0'+h;
}
if(s<10){
    s='0'+s;
}
let result=h+":"+m+":"+s+" "+T;
document.getElementById('clock').innerHTML=result;
}
setInterval(allu,1000);
allu();
