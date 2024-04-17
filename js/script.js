//Scaffolding per utilizzo di Vue js
console.log(Vue);
const { createApp } = Vue;

createApp({
    data() {
        return{
            userMessage:"Benvenuto in Vue Js",
            user: "",
            lastName: "",
            image: "./../img/baffi.jpg",
        }
    },
    methods: {
        print: function () {
           this.userMessage =`Benvenuto in Vue Js ${this.user} ${this.lastName}`; 

            this.user = "";
            this.lastName = "";
        },
    },
}).mount("#app");