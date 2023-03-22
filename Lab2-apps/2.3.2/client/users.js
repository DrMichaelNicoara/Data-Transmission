function users() {
    get = function () {
        return axios.get("http://localhost:3000/users");
    }

    post = function (user) {
        return axios.post("http://localhost:3000/users", user);
    }

    put = function (user, index) {
        return axios.put(`http://localhost:3000/users/${index}`, user);
    }

    del = function (index) {
        return axios.delete(`http://localhost:3000/users/${index}`);
    }

    return {
        get: get,
        put: put,
        post: post,
        delete: del
    }
}
