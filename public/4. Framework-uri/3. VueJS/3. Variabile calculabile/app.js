const app = new Vue({
    el: "#app",
    data: {
        x: 0,
        y: 0,
        message: ""
    },
    computed: {
        suma() {
            return Number(this.x) + Number(this.y);
        },
        reversedMessage(){
            return this.message.split("").reverse().join("");
        }
    }
});