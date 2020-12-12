var times = function () {
    var k = 1;
    return function () {
        return k++;
    }
}
