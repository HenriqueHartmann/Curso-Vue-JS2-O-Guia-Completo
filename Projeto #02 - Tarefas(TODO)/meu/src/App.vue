<template>
	<div id="app">
		<h1>Tarefas</h1>
		<BarTODO :percent="percent" />
		<FormTODO @inputData="addTarefa" />
		<CardTODO :todos="todo_list" />
	</div>
</template>

<script>
import FormTODO from './components/form.vue'
import BarTODO from './components/bar.vue'
import CardTODO from './components/card.vue'

export default {
	components: { FormTODO, BarTODO, CardTODO },
	data() {
		return {
			todo_list: [],
		}
	},
	computed: {
		percent: function() {
			var qtdDone = 0
			var size = this.todo_list.length
			for (var i = 0; i < size; i++) {
				if(this.todo_list[i].status == "100") {
					qtdDone += 1
				}
			}
			if (size == 0) {
				size = 1
			}
			var value = (qtdDone * 100) / size
			return value.toFixed(0)
		}
	},
	methods: {
		addTarefa: function(variable) {
			this.todo_list.push({"name":variable, "status": "0"})
		},
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
