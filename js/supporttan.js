var yincang= document.querySelector("#supneirong")
var element = document.querySelector('#supsou')
var  flag=1;
element.addEventListener('click',function (e) {
    yincang.style.display="block";
})

document.body.addEventListener('click',function (e) {
    if (e.target.id!='supsou'){
        yincang.style.display='none';
    }
})


