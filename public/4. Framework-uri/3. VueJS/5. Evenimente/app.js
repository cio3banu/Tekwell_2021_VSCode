const app = new Vue({
    el: "#app",
    data: {
       selected: false,
       number: 0
    },
    methods: {
        increaseNumber(){
           this.number++;
        },
        decreaseNumber(){
           this.number--;
        }
    }
});