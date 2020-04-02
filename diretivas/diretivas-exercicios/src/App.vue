<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'Usando diretiva <strong>v-text</strong>'"></p>
		<hr>
		<p v-destaque:fundo.atrasar="'lightgreen'">Usando diretiva personalizada</p>
		<p v-destaque.atrasar="color">Usando diretiva personalizada</p>
		<hr>
		<p v-destaque-local:fundo.atrasar.alternar="'lightblue'">Usando diretiva personalizada</p>
		<p v-destaque-local.atrasar="color2">Usando diretiva personalizada</p>
	</div>
</template>

<script>
export default {
	components: {},
	directives: {
		'destaque-local': {
			bind(el, binding) {
				const aplicarCor = cor => {
					if(binding.arg === 'fundo'){
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let atraso = 0
				if(binding.modifiers['atrasar']) atraso = 3000

				const color1 = binding.value
				const color2 = '#FFAC4B'
				let colorAtual = color1

				setTimeout(() => {
					if(binding.modifiers['alternar']) {
						setInterval(() => {
							colorAtual = colorAtual === color1 ? color2 : color1
							aplicarCor(colorAtual)
						}, 1000)
					} else {
						aplicarCor(binding.value)
					}
				}, atraso)
			}
		}
	},
	data() {
		return {
			color: 'lightblue',
			color2: 'red'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
