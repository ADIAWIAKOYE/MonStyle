var FirstName = document.querySelector('.FirstName');
var Names = document.querySelector('.Names');
var objetMail = document.querySelector('.objetMail');
var message = document.querySelector('.message');
var sFirstName = document.querySelector('.sFirstName');
var sNames = document.querySelector('.sNames');
var sobjetMail = document.querySelector('.sobjetMail');
var smessage = document.querySelector('.smessage');
var smessage = document.querySelector('.smessage');
var btnsubComand_form = document.querySelector('.btnsubComand_form');
var formCommand = document.querySelector('#formCommand');
var com_nom = document.querySelector('#com_nom');
var com_pre = document.querySelector('#com_pre');
var com_obj = document.querySelector('#com_obj');
var com_mes = document.querySelector('#com_mes');
var contains_menu = document.querySelector('.contains_menu');
var icomenu = document.querySelector('#icomenu');
var btnTop = document.querySelector('#btnTop');

function command(id, id2){
    formCommand.classList.toggle('active');
    com_obj.value = "Commande de l'article n° "+id;
    com_mes.value = "Salutations, à vous !\nJ'aimerais commandé(e) ce (cette) "+id2;
    com_nom.focus();
}

btnsubComand_form.addEventListener('click', ()=>{
    var v1 = com_nom.value;
    var v2 = com_pre.value;
    var v3 = com_obj.value;
    var v4 = encodeURIComponent(com_mes.value);
    alert(v4);
    var err = document.querySelector('#errr');
    var verimess = encodeURIComponent("Bonjour, \nJe suis "+v2+" "+v1+"\n\n");
    if(v1!="" && v2!="" && v3!="" && v4!=""){
    window.location = "mailto:adiawiakoye.le10@gmail.com?subject="+v3+"&body="+verimess+v4;
        com_nom.value = "";
        com_pre.value = "";
        com_obj.value = "";
        com_mes.value = "";
        err.innerHTML = "";
        formCommand.classList.toggle('active');
    }
    else{
        err.innerHTML = "Veuillez renseigner tous les champs !";
    }
})

function verifocus(){
    if(FirstName.value!=""){
        sFirstName.setAttribute('style', "transform: translateY(-20px);font-size: 12px;color: rgb(255, 35, 119);font-weight: bold;");
    }
    else{
        sFirstName.removeAttribute('style');
    }
    if(Names.value!=""){
        sNames.setAttribute('style', "transform: translateY(-20px);font-size: 12px;color: rgb(255, 35, 119);font-weight: bold;");
    }
    else{
        sNames.removeAttribute('style');
    }
    if(objetMail.value!=""){
        sobjetMail.setAttribute('style', "transform: translateY(-20px);font-size: 12px;color: rgb(255, 35, 119);font-weight: bold;");
    }
    else{
        sobjetMail.removeAttribute('style');
    }
    if(message.value!=""){
        smessage.setAttribute('style', "transform: translateY(-20px);font-size: 12px;color: rgb(255, 35, 119);font-weight: bold;");
    }
    else{
        smessage.removeAttribute('style');
    }
}

var apply = setInterval(verifocus, 500);

var inputsubmit = document.querySelector('.inputsubmit').addEventListener("click", ()=>{
        var v1 = FirstName.value;
        var v2 = Names.value;
        var v3 = objetMail.value;
        var v4 = encodeURIComponent(message.value);
        var err = document.querySelector('.err');
        var verimess = encodeURIComponent("Bonjour, \nJe suis "+v2+" "+v1+"\n\n");
    if(v1!="" && v2!="" && v3!="" && v4!=""){
        window.location = "mailto:adiawiakoye.le10@gmail.com?subject="+v3+"&body="+verimess+v4;
        FirstName.value = "";
        Names.value = "";
        objetMail.value = "";
        message.value = "";
        err.innerHTML = "";
    }
    else{
        err.innerHTML = "Veuillez renseigner tous les champs !";
    }
})

var contact_us = document.querySelector('.contact_us');
var contains_menu = document.querySelector('.contains_menu');
var figcap = document.querySelectorAll('.figcap');
var maplien = document.querySelector('.maplien');
figcap.forEach(element => {
    element.innerHTML = "Agrandir";
});
contact_us.addEventListener('click', ()=>{
    contact_us.href="tel:+22375468913";
})
contains_menu.addEventListener('click', ()=>{
    contains_menu.classList.toggle('active');
})
icomenu.addEventListener('click', ()=>{
    contains_menu.classList.toggle('active');
})
btnTop.addEventListener('click', ()=>{
    window.location="#";
})
maplien.addEventListener('click', ()=>{
    maplien.href="https://maps.app.goo.gl/ZQLS6ve783UDW41j7";
})

var x;
function detectscrool(){
    x = document.body.scrollTop || document.documentElement.scrollTop;
        if(x>700){
            btnTop.style.bottom = "20px";
        }
        else{
            btnTop.style.bottom = "-400px";
        }
}

var scrolling = setInterval(detectscrool, 500);