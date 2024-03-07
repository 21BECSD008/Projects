
function allu(){
    const hrs = document.querySelector(".hr");
    const min = document.querySelector(".mi");
    const sec = document.querySelector(".se");
    const time = new Date();
    var se = time.getSeconds()/60;
    var mi = (se+time.getMinutes())/60;
    var hr = (mi+time.getHours())/12;
    hrs.style.setProperty("--rotate",hr*360);
    min.style.setProperty("--rotate",mi*360);
    sec.style.setProperty("--rotate",se*360);
    // console.log(se,mi,hr)
}
allu();
setInterval(allu,1000);