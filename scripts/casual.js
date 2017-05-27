define(function(){
    var myBoy="Jake";
    return {
        askBoy: function(){
            console.log("What is your name, guy?");
        },
        getAnswer: function () {
            console.log("My name is "+askBoy);
        }
        
    }
}); 