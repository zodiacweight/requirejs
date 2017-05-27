require(['scripts/common', 'scripts/casual', 'scripts/demanded'], function(common, casual, demanded){
    console.log({'common':common, casual:casual, demanded:demanded});
    /*var content=[],
        main = document.querySelector('main'),
        delay = 1000;
    for(var item in casual){
        if(typeof casual[item]!='function'){
            //console.log(item + ': ', casual.getStuff(item));
            content.push(item + ': ' + casual.getStuff(item));
        }
    }
    console.log(common.getHello());
    var cnt = content.length,
        i = 0,
        intv = setInterval(function(){
            main.innerHTML+='<div>'+content[i]+'</div>';
            if(++i==cnt) {
                clearInterval(intv);
                setTimeout(function(){
                    document.getElementById('main-header').innerHTML+='. <span class="txt-orange">It works!</span>';
                    main.innerHTML+=reqiured.getHello();
                }, delay);
            }
        }, delay); */
});

/*
// файл экспортирующий модуль
 var getHello = function () {
    return 'Hello World, you are a ';
};

module.exports = {
    getHelloFunc: getHello
}

-------------------------------------------
// файл, загружающий (импортирующий) модуль
var commonMod = require('scripts/common');
commonMod.getHelloFunc();

 */