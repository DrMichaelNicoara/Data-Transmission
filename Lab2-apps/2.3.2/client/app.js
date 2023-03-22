var app = new Vue({
    el: '#app',
    data: {
        users: [],
        usersService: null
    },
    created: function () {
        this.usersService = users();
        this.usersService.get().then(response => (this.users = response.data));

        // Create a new user
        this.usersService.post({
            name: "John Doe",
            city: "New York"
        }).then(response => {
            console.log(response.data);

            // Update the new user's city
            const userIndex = this.users.findIndex(user => user.name === "John Doe");
            console.log("Created user index is: " + userIndex);

            this.usersService.put({
                name: "John Doe",
                city: "Los Angeles"
            }, userIndex).then(response => {
                console.log(response.data);
            });

            // Delete the new user
            this.usersService.delete(userIndex).then(response => {
                console.log(response.data);
            });
        });
    },
    methods: {}
});
