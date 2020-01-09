<template>
	<v-app>
		<MENU />
		<TOOLBAR />
		<v-content>
			<CAROUSEL />
		</v-content>
		<FOOTER />
	</v-app>
</template>

<script>
//Importação de Componentes de forma Local
import Menu from '@/components/template/Menu.vue'
import Toolbar from '@/components/template/Toolbar.vue'
import Carousel from '@/components/widgets/Carousel.vue'
import Footer from '@/components/template/Footer.vue'

export default {
//Registro de Componentes de forma Local
	components: {
		'MENU': Menu,
		'TOOLBAR': Toolbar,
		'CAROUSEL': Carousel,
		'FOOTER': Footer
	}
}
</script>
