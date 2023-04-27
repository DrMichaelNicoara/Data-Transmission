function getMLT3encoding(bits) {
    var result = [];
    var lastLevel = 0;
    var goingUp = true;
    let symbol = '0';
    for (var i = 0; i < bits.length; i++) {
        if (parseInt(bits[i].value) == 1) {
            if (lastLevel == 0) {
                if (goingUp) {
                    lastLevel = 1;
                    symbol = '+';
                    goingUp = false;
                }
                else {
                    lastLevel = -1;
                    symbol = '-';
                    goingUp = true;
                }
            } else if (lastLevel == 1) {
                lastLevel = -1;
                symbol = '0';
            } else if (lastLevel == -1) {
                lastLevel = 1;
                symbol = '-';
            }
        }
        result.push(symbol);
    }
    return result;
}
