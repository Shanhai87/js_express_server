const App = {
    data() {
        return {
            users: [],
            name: "",
            age: ""
        }
    },
    methods: {
        async create() {
            const data = {
                name: this.name,
                age: this.age
            }
            const res = await fetch("/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            this.name = "";
            this.age = "";
            // const newUser = await res.json();
            // this.users.push(newUser);
            // console.log(newUser);
        },
        async getById(id) {
            this.res = await fetch(`/users/${id}`);
            this.users = await res.json();
            console.log("USER");
        },
        // async delete(id) {
        //     await fetch(`/users/${id}`, {method: "DELETE"});
        //     this.users = this.users.filter(s => s.id !== id)
        // }
    },
    async mounted() {
        const res = await fetch("/users");
        this.users = await res.json();
    }
}
Vue.createApp(App).mount("#app");