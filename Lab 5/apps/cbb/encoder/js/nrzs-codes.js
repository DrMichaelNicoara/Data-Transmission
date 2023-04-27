function getNRZSencoding(bits) {
    var result = [];
    var lastLevel = 0;
    var symbol = '▁▁▁';

    for (var i = 0; i < bits.length; i++) {
        var bitValue = parseInt(bits[i].value);

        if (bitValue == 0) {
            if (lastLevel == 0) {
                symbol = '∣▔▔';
                lastLevel = 1;
            }
            else if (lastLevel == 1) {
                symbol = '∣▁▁';
                lastLevel = 0;
            }
        }
        else {
            if (lastLevel == 1) {
                symbol = '▔▔';
            }
            else if (lastLevel == 0) {
                symbol = '▁▁';
            }
        }
        result.push(symbol);
    }

    return result;
}
