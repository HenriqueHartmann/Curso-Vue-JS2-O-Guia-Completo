<template>
	<v-app>
		<MENU />
		<TITLE />
		<CAROUSEL />
		<FOOTER />
	</v-app>
</template>

<script>
//Importação de Componentes de forma Local
import Menu from './components/Menu.vue'
import Title from './components/Title.vue'
import Carousel from './components/Carousel.vue'
import Footer from './components/Footer.vue'

export default {
//Registro de Componentes de forma Local
	components: {
		'MENU': Menu,
		'TITLE': Title,
		'CAROUSEL': Carousel,
		'FOOTER': Footer
	}
}
</script>
