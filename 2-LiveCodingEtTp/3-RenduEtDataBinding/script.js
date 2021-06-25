const app = new Vue({
    el: '#app',
    name: 'LocalStorage',
    data: {
        name: "",
    },
    mounted() {
        if (localStorage.name) {
            this.name = localStorage.name;
        }
    },
    watch: {
        name(newName) {
            localStorage.name = newName;
        }
    },
    methods: {
        valider() {
            var newName = document.getElementById("name").value;
            localStorage.name = newName;
            this.name = newName;
        },
        effacer() {
            localStorage.name = "";
            this.name = "";
        }
    }
})