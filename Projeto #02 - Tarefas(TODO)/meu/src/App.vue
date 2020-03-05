<template>
	<div id="app">
		<h1>Tarefas</h1>
		<BarTODO :percent="percent" />
		<NewTask @inputData="createTask" />
		<TaskGrid :tasks="tasks" />
	</div>
</template>

<script>
import NewTask from './components/NewTask.vue'
import BarTODO from './components/bar.vue'
import TaskGrid from './components/TaskGrid.vue'

export default {
	components: { NewTask, BarTODO, TaskGrid },
	data() {
		return {
			tasks: [],
		}
	},
	computed: {
		size: function() {
			return this.tasks.length
		},
		percent: function() {
			var qtdDone = 0
			for (var i = 0; i < this.size; i++) {
				if(this.tasks[i].pending == false) {
					qtdDone += 1
				}
			}
			var value = 0
			if (this.size == 0) {
				value = (qtdDone * 100) / 1
			} else {
				value = (qtdDone * 100) / this.size
			}
			 
			return value.toFixed(0)
		}
	},
	methods: {
		checkTask: function(task) {
			let occur = false
			if (this.size > 0) {
				for (var i = 0; i < this.size; i++) {
					occur = (this.tasks[i].name == task)
				}
				return occur
			} else {
				return false
			}
		},
		createTask: function(task) {
			if (this.checkTask(task) == false) {
				this.tasks.push({"name":task, "pending": true})
			}
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
