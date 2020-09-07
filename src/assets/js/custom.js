function myTest(){
var directCall = new CustomEvent("virtual page view");
alert('Welcome to custom js');

console.log('Triggering satellite call started');
    setTimeout(() => {_satellite.track('spa-test', { 'name': 'John' }); 
                        console.log('Triggering satellite call completed');}, 5000);


console.log('Triggering custom event started');    
    setTimeout(() => {document.body.dispatchEvent(directCall); 
                        console.log('Triggering custom event completed');}, 5000);
}

function setDim(w,h){
    var inter = setInterval(function(){
        var t = document.querySelector('.right-vid iframe');
        if (t) {
            document.querySelector('.right-vid iframe').width = document.querySelector('.right-vid iframe') ? w : '';
            document.querySelector('.right-vid iframe').height = document.querySelector('.right-vid iframe') ? h : '';
            console.log("called function to set DIM");
            clearInterval(inter);
        }
    },500);
    setTimeout(function(){
        clearInterval(inter);
    },5000)
}
    