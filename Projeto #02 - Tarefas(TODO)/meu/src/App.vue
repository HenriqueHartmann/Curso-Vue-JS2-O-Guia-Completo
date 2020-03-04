<template>
	<div id="app">
		<h1 @click="calculaTarefas">Tarefas</h1>
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
			percent: 0
		}
	},
	methods: {
		addTarefa: function(variable) {
			this.todo_list.push({"name":variable, "status": "0"})
		},
		calculaTarefas: function() {
			var qtdDone = 0
			var size = this.todo_list.length
			for (var i = 0; i < size; i++) {
				if(this.todo_list[i].status == "100") {
					qtdDone += 1
				}
			}
			this.percent = (qtdDone * 100) / size
		}
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
