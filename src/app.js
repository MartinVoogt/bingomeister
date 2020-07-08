
import Vue from 'vue'
import App from './App';

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    /*beforeMount: function(){
        this.$store.dispatch("setList");
    }*/
}).$mount("#bingo");