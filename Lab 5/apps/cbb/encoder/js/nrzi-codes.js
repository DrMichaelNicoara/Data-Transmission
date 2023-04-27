function get4B5BNRZIencoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i += 4) {
        var nibble = bits[i].value + bits[i + 1].value + bits[i + 2].value + bits[i + 3].value;
        encoded = getCodeTable(nibble);
        result.push(encoded.split('').join(' '));
    }
    return result;
}

function getCodeTable(nibble) {
    var codeTable = {
        '0000': '11110',
        '0001': '01001',
        '0010': '10100',
        '0011': '10101',
        '0100': '01010',
        '0101': '01011',
        '0110': '01110',
        '0111': '01111',
        '1000': '10010',
        '1001': '10011',
        '1010': '10110',
        '1011': '10111',
        '1100': '11010',
        '1101': '11011',
        '1110': '11100',
        '1111': '11101',
    };
    return codeTable[nibble];
}
