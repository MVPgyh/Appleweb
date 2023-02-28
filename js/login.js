function check(i) {
    return (i < 10) ? ("0" + i) : i;
}

function showtime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    var element = document.querySelector("#data")
    M = check(month);
    d = check(day);
    h = check(hour);
    m = check(minute);
    s = check(second);
    element.innerHTML = year + '-' + M + '-' + d + '&nbsp;&nbsp;' + h + ':' + m + ':' + s;
}

setInterval("showtime()", 1000);
var etips = document.querySelector(".etips")
var user = document.querySelector("#user");
var pass = document.querySelector("#pass");
var usrimg = document.querySelector(".useimg");
user.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (user.value === "aimin") {
            etips.style.display = "none"
            pass.style.visibility = "visible";
            usrimg.style.transform="translateY(47px)"
        } else {
            etips.style.display = "block"
        }
    }
})


usrimg.addEventListener('click', function (e) {

    if (user.value === "123456") {
        etips.style.display = "none"
        pass.style.visibility = "visible";
        usrimg.style.transform="translateY(47px)"
    } else {
        etips.style.display = "block"
    }

})

