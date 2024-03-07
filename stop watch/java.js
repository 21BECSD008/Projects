const sta = document.querySelector('.start');
const sto = document.querySelector('.stop');
const res = document.querySelector('.reset');
sta.classList.remove('str');
sto.classList.remove('stp');
var hr=se=mi=ms=0,allu;
sta.addEventListener('click',()=>{
    sta.classList.add('str');
    sto.classList.remove('stp');
    allu = setInterval(()=>{
        ms++;
        if(ms==100){
            se++;
            ms=0;
        }
        if(se==60){
            mi++;
            se=0;
        }
        if(mi==60){
            hr++;
        }
        time();
    },10)
})
sto.addEventListener('click',()=>{
    sta.classList.remove('str');
    sto.classList.add('stp');
    clearInterval(allu);
    time();
})
res.addEventListener('click',()=>{
    sta.classList.remove('str');
    sto.classList.remove('stp');
    clearInterval(time);
    hr=se=mi=ms=0;
    time();
})
function time(){
    ahr=hr<10?'0'+hr:hr;
    ami=mi<10?'0'+mi:mi;
    ase=se<10?'0'+se:se;
    ams=ms<10?'0'+ms:ms;
    document.querySelector('.hrs').innerHTML = ahr;
    document.querySelector('.min').innerHTML = ami;
    document.querySelector('.sec').innerHTML = ase;
    document.querySelector('.mil').innerHTML = ams;
}