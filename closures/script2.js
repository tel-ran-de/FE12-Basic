let times = function (){
    let counter = 1;
    return function ()
    {
        console.log('function was executed ' + counter++);
    }
}()