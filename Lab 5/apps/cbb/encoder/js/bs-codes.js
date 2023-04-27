function getBSencoding(bits) {
    var result = [];
    var symbol = '---';
    var lastLevel = 0;

    for (var i = 0; i < bits.length; i++) {
        var bitValue = parseInt(bits[i].value);

        if (bitValue == 1) {
            if (lastLevel == 0) {
                symbol = '∣▔▔';
                lastLevel = 1;
            }
            else {
                symbol = '∣▁▁';
                lastLevel = 0;
            }
        }
        else {
            if (lastLevel == 0) {
                symbol = '∣▔∣▁';
            }
            else {
                symbol = '∣▁∣▔';
            }
        }

        result.push(symbol);
    }

    return result;
}
