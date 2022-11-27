
    let cielo = document.getElementById('cielo');
    let mar = document.getElementById('mar');
    let text = document.getElementById('text');
    let btn = document.getElementById('btn');
    let suelo = document.getElementById('suelo');
    let header = document.querySelector('header');

    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        cielo.style.top = value * 0.5 + 'px';
        mar.style.top = value * 0 + 'px';
        text.style.marginLeft = value * 4 + 'px';
        text.style.marginTop = value * 1.5 + 'px';
        btn.style.marginLeft = value * 4 + 'px';
        btn.style.marginTop = value * 1.5 + 'px';
        suelo.style.top = value * -0+ 'px';
        header.style.top = value * 0.7 + 'px';

    })
