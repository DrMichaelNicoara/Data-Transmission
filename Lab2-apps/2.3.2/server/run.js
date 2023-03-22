var api = require('./api.js').app;
var users = require('./users.json');

api.get('/', function (request, response) {
    response.json("node.js backend");
});

api.get('/users', function (request, response) {
    response.json(users);
});

api.post('/users', function (request, response) {
    users.push(request.body);
    response.json('User was saved successfully');
});

api.put('/users/:index', function (request, response) {
    users[request.params.index] = request.body;
    response.json('User with index ' + request.params.index + ' was updated');
});

api.delete('/users/:index', function (request, response) {
    users.splice(request.params.index, 1);
    response.json('User with index ' + request.params.index + ' was deleted');
});

api.listen(3000, function () {
    console.log('CORS-enabled web server is listening on port 3000...');
});
