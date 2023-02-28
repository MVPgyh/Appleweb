var zuoid = document.getElementById("zuojt");
var youid = document.getElementById("youjt");
var diyi = document.getElementById("diyi")
var dier = document.getElementById("dier")
var disan = document.getElementById("disan")
var disi = document.getElementById("disi")
var diwu = document.getElementById("diwu")
var diliu = document.getElementById("diliu")
var diqi = document.getElementById("diqi")
var diba = document.getElementById("diba")
var list = [diyi, dier, disan, disi, diwu, diliu, diqi, diba]

for (let i = 0; i < list.length; i++) {
    list[i].style.left = (i * 360) + "px"
}
var index = 0;

zuoid.style.visibility = "hidden"


zuoid.addEventListener('click', function () {
    index++
    for (let i = 0; i < list.length; i++) {
        if (index === 0 ) {
            zuoid.style.visibility = "hidden";
        }else {
            youid.style.visibility="visible"
        }
        var s1 = list[i].style.transform;
        var reg1 = /(translateX\()(-?\d+)(px\))/;
        result1 = parseInt(reg1.exec(s1)[2])
        list[i].style.transform = "translateX(" + (result1 + 360) + "px)"
    }
});

youid.addEventListener('click', function () {


    index--
    for (let i = 0; i < list.length; i++) {
        if (index === 0 ) {
            zuoid.style.visibility = "hidden";
        }else {
            if (index === -5) {
                youid.style.visibility="hidden"
            }
            zuoid.style.visibility = "visible";
        }
        //通过正则获取平移量
        var s = list[i].style.transform;
        var reg = /(translateX\()(-?\d+)(px\))/;
        result = parseInt(reg.exec(s)[2])
        list[i].style.transform = "translateX(" + (result - 360) + "px)"
    }


})

