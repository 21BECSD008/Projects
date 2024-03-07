document.addEventListener('DOMContentLoaded', () => {
    const a = document.querySelector('.range');
    const b = document.querySelector('.dis');
    const co = document.querySelector('.con')
    const txt = document.querySelector('textarea');
    const btn = document.querySelector('.cpy');
    const sel = document.querySelector('.select');
    const bo = document.querySelector('.border');
    const dis = document.querySelector('.disp');
    var v = bo.value, n = 0;
    function border() {
        v = bo.value;
        n = sel.value;
        dis.innerHTML = v + "px";
        co.style.border = v + `px ${n} red`;
        range();
    }
    sel.addEventListener('click', range);
    var z = 0, x = 0;
    function range() {
        z = a.value;
        b.innerText = z + "px";
        co.style.borderRadius = z + "px";
        x = sel.value;
        co.style.border = v + `px ${x} red`;
        txt.innerHTML = `
    border-radius : ${z}px;
    border:${v}px ${x} red;`
    }
    btn.addEventListener('click', () => {
        txt.select();
        document.execCommand('copy');
        alert('Code Copied');
    })
    a.addEventListener('mousemove', range);
    bo.addEventListener('mousemove', border);
})