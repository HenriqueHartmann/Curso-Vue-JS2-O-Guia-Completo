import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

//Importação de Componentes de forma Global
// import Menu from './components/template/Menu.vue'
// import Toolbar from './components/template/Toolbar.vue'
// import Carousel from './components/widgets/Carousel.vue'
// import Footer from './components/template/Footer.vue'

Vue.config.productionTip = false

//Registro de Componentes de forma Global
// Vue.component('MENU', Menu)
// Vue.component('TOOLBAR', Toolbar)
// Vue.component('CAROUSEL', Carousel)
// Vue.component('FOOTER', Footer)

new Vue({
  render: h => h(App),
}).$mount('#app')
