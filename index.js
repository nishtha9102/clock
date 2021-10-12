setInterval(() => {
    x = new Date();
    htime = x.getHours();
    mtime = x.getMinutes();
    stime = x.getSeconds();
    hrot = 30 * htime + mtime / 2;
    mrot = 6 * mtime;
    srot = 6 * stime;
    hr.style.transform = `rotate(${hrot}deg)`;
    min.style.transform = `rotate(${mrot}deg)`;
    sec.style.transform = `rotate(${srot}deg)`;
}, 1000);

