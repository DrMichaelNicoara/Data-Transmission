function getAMIencoding(bits) {
    var result = [];
    var lastLevel = 0;
    for (var i = 0; i < bits.length; i++) {
        let symbol = '0';
        if (parseInt(bits[i].value) == 1) {
            lastLevel = lastLevel > 0 ? -1 : 1;
            symbol = lastLevel == 1 ? '+' : '-';
        }
        result.push(symbol);
    }
    return result;
}
