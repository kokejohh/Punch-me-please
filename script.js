let times = 0;
document.onkeydown = function (e) {
    if (e.repeat) return;
    times += 1;
    numberOfPunch.innerHTML = times;

    document.body.classList.add('idle');
    if (img0.classList.contains('first')) {
        img0.classList.remove('standby');
        img0.classList.add('punch', 'p_left');
    } else {
        img2.classList.remove('standby');
        img2.classList.add('punch', 'p_right');
    }
    img0.classList.toggle('first');
}


document.onkeyup = function (e) {
    img0.classList.remove('punch', 'p_left');
    img0.classList.add('standby');
    img2.classList.remove('punch', 'p_right');
    img2.classList.add('standby');
    document.body.classList.remove('idle');
}

if ('ontouchstart' in window) {
    document.ontouchstart = function (e) {
        if (e.repeat) return;
        times += 1;
        numberOfPunch.innerHTML = times;

        document.body.classList.add('idle');
        if (img0.classList.contains('first')) {
            img0.classList.remove('standby');
            img0.classList.add('punch', 'p_left');
        } else {
            img2.classList.remove('standby');
            img2.classList.add('punch', 'p_right');
        }
        img0.classList.toggle('first');
    }

    document.ontouchend = function (e) {
        img0.classList.remove('punch', 'p_left');
        img0.classList.add('standby');
        img2.classList.remove('punch', 'p_right');
        img2.classList.add('standby');
        document.body.classList.remove('idle');
    }

} else {
    document.onmousedown = function (e) {
        if (e.repeat) return;
        times += 1;
        numberOfPunch.innerHTML = times;

        document.body.classList.add('idle');
        if (img0.classList.contains('first')) {
            img0.classList.remove('standby');
            img0.classList.add('punch', 'p_left');
        } else {
            img2.classList.remove('standby');
            img2.classList.add('punch', 'p_right');
        }
        img0.classList.toggle('first');
    }

    document.onmouseup = function (e) {
        img0.classList.remove('punch', 'p_left');
        img0.classList.add('standby');
        img2.classList.remove('punch', 'p_right');
        img2.classList.add('standby');
        document.body.classList.remove('idle');
    }
}
