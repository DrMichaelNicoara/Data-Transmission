var app = new Vue({
    el: '#baseband-encoder',
    data: {
        bits: [],
        encodedBits: [],
        AMIencodedBits: [],
        MLTencodedBits: [],
        NRZIencodedBits: [],
        NRZSencodedBits: [],
        BSencodedBits: [],
        status: '',
        numberOfBits: 16,
        validateBit: validateBit
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){
            this.encodedBits = getManchesterLevelEncoding(this.bits);
            this.AMIencodedBits = getAMIencoding(this.bits);
            this.MLTencodedBits = getMLT3encoding(this.bits);
            this.NRZIencodedBits = get4B5BNRZIencoding(this.bits);
            this.NRZSencodedBits = getNRZSencoding(this.bits);
            this.BSencodedBits = getBSencoding(this.bits);
        }
    }
})

console.log('🍓🥑🍏☕🏆⚽✅🚦');