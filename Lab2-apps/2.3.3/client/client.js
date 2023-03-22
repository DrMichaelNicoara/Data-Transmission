var socket = io.connect('127.0.0.1:8081');

const app = new Vue({
    el: '#app',
    data: {
        messages: [],
        newMessage: ''
    },
    methods: {
        sendMessage() {
            if (this.newMessage !== '') {
                socket.emit('message-from-client', this.newMessage);
                console.log("Sent message to server: " + this.newMessage);
                this.messages.push(`Me: ${this.newMessage}`);
                this.newMessage = '';
            }
        }
    }
});

try {
    socket.on('connect', function (data) {
        socket.emit("message-from-client", "Hello to everyone from " + checkBrowser());
        console.log("client started");
    });

    socket.on('message-from-server', function (message) {
        console.log("Received message from server: " + message);
        app.messages.push(`Stranger: ${message}`);
    });

} catch (err) {
    alert('ERROR: socket.io encountered a problem:\n\n' + err);
}

function checkBrowser() {
    var browser = 'Noname browser';
    if (navigator.userAgent.search("Chrome") > -1) {
        browser = "Chrome";
    }
    if (navigator.userAgent.search("Firefox") > -1) {
        browser = "Firefox";
    }
    return browser;
}
