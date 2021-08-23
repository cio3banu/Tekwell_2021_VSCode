const app = new Vue({
    el: "#app",
    data: {
       number: 0
    },
    computed: {
       color(){
          if(this.number > 0){
             return "green";
          }
          if(this.number < 0){
            return "red";
         }
         return "yellow";
       }
    }
});