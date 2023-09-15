fetch('./json/data.json').then(res => res.json()).then(data => {

    let times = 0;
    let index = 0;

    document.onkeydown = e => fn_pressdown(e);

    document.onkeyup = e => fn_pressup(e);

    if ('ontouchstart' in window) {
        document.ontouchstart = e => fn_pressdown(e);
        document.ontouchend = e => fn_pressup(e);
    } else {
        document.onmousedown = e => fn_pressdown(e);
        document.onmouseup = e => fn_pressup(e);
    }

    function fn_pressdown(e) {
        if (e.repeat) return;

        if (data[index]?.score === times) {
            alias.innerHTML = 'ฉายา ' + data[index].alias;
            img1.src = './img/' + data[index].pic;
            index++;
        }
        times += 1;
        numberOfPunch.innerHTML = times + '/' + (data[index]?.score ?? '∞');

        let sd = new Audio('./sound.mp3');
        sd.volume = 0.1;
        sd.play();
        container.classList.add('idle');
        if (img0.classList.contains('first')) {
            img0.classList.remove('standby');
            img0.classList.add('punch', 'p_left');
        } else {
            img2.classList.remove('standby');
            img2.classList.add('punch', 'p_right');
        }
        img0.classList.toggle('first');

        if (times % 3 == 0) {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            let bgColor = `rgb(${red}, ${green}, ${blue})`;
            document.body.style.backgroundColor = bgColor;
        }
    }

    function fn_pressup(e) {
        img0.classList.remove('punch', 'p_left');
        img0.classList.add('standby');
        img2.classList.remove('punch', 'p_right');
        img2.classList.add('standby');
        container.classList.remove('idle');
    }
});
