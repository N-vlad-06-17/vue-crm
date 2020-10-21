import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import Loader from '@/components/App/Loader'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import 'materialize-css/dist/js/materialize.min'
import messagePlagin from '@/utils/message.plugin'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlagin)
Vue.use(Vuelidate)
Vue.filter('date',dateFilter)
Vue.filter('currency',currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
    apiKey: "AIzaSyA_4GFatrwnsremmBe_78Jbaej4uZWdNMs",
    authDomain: "vue-crm-486cc.firebaseapp.com",
    databaseURL: "https://vue-crm-486cc.firebaseio.com",
    projectId: "vue-crm-486cc",
    storageBucket: "vue-crm-486cc.appspot.com",
    messagingSenderId: "637319891720",
    appId: "1:637319891720:web:b4dfe71bb2ef96a90dfabd",
    measurementId: "G-SZF8EX431Z"
  })

let app

firebase.auth().onAuthStateChanged(()=>{
    if(!app){
       app = new Vue({
                router,
                store,
                render: h => h(App)
                }).$mount('#app')
    }
 
})


