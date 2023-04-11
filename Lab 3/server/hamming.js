function decode(bits) {
    if (bits.length == 8) { // Decoded binary code should be 4 bits
        var z4 = parity(bits[4] + bits[5] + bits[6] + bits[7]);
        var z2 = parity(bits[2] + bits[3] + bits[6] + bits[7]);
        var z1 = parity(bits[1] + bits[3] + bits[5] + bits[7]);
        //var z0 = parity(z1 + z2 + z4 + bits[6]);

        var errorPosition = z1 * 1 + z2 * 2 + z4 * 4;
        var errorDetected = false;
        if (errorPosition != 0) errorDetected = true;
        if (errorDetected) {
            bits[errorPosition] = parity(bits[errorPosition] + 1);
        }
        return { errorCorrected: errorDetected, errorPosition: errorPosition, bits: bits };
    }
    else {
        //var z8 = parity(bits[] + bits[] + bits[] + bits[]);
        var z4 = parity(bits[4] + bits[5] + bits[6] + bits[7]);
        var z2 = parity(bits[2] + bits[3] + bits[6] + bits[7]);
        var z1 = parity(bits[1] + bits[3] + bits[5] + bits[7]);
        //var z0 = parity(z1 + z2 + z4 + bits[8]);

        var errorPosition = z1 * 1 + z2 * 2 + z4 * 4; //+ z8 * 8;
        var errorDetected = false;
        if (errorPosition != 0) errorDetected = true;
        if (errorDetected) {
            bits[errorPosition] = parity(bits[errorPosition] + 1);
        }
        return { errorCorrected: errorDetected, errorPosition: errorPosition, bits: bits };
    }
}

parity = function(number){
	return number % 2;
}

exports.decode = decode;
