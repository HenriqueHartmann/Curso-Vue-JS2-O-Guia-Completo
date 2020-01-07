import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

//Importação de Componentes de forma Global
// import Menu from './components/Menu.vue'
// import Title from './components/Title.vue'
// import Carousel from './components/Carousel.vue'
// import Footer from './components/Footer.vue'

Vue.config.productionTip = false

//Registro de Componentes de forma Global
// Vue.component('MENU', Menu)
// Vue.component('TITLE', Title)
// Vue.component('CAROUSEL', Carousel)
// Vue.component('FOOTER', Footer)

new Vue({
  render: h => h(App),
}).$mount('#app')
