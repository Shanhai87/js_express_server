const App_user = {
    // props: ['key'],
    data() {
        return {
            user: {},
            id: 0
        }
    },
    methods: {
        async delete() {
            const res = await fetch(`/users/${this.id}`, {method: "DELETE"});
            if (res) {
                this.user = {};
                this.id = 0;
            }
        },
        async update() {
            const data = {
                id: this.id,
                name: this.name,
                age: this.age
            }
            const res = await fetch(`/users/${this.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            this.name = "";
            this.age = "";
        },
    },
    async mounted() {
        this.id = document.getElementById("app_user").getAttribute("data-id");
        // console.log(this.id);
        const res = await fetch(`/users/${this.id}`);
        this.user = await res.json();
    }
}
Vue.createApp(App_user).mount("#app_user");