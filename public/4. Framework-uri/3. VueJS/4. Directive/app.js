const app = new Vue({
    el: "#app",
    data: {
        number: 0,
        persons: [
            "Ion Creanga",
            "Mihai Eminescu",
            "Vasile Alecsandri"
        ],
        newPerson: ""
    },
    methods: {
        createPerson(){
            this.persons.push(this.newPerson);
        },
        deletePerson(index){
            this.persons.splice(index, 1);
        }
    }
});