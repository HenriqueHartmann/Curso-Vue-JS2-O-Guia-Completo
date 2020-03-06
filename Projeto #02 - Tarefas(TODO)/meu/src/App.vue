<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TaskBar :progress="progress" />
		<NewTask @inputData="createTask" />
		<TaskGrid :tasks="tasks" @deleteTask="deleteTask" @toggleStateTask="toggleStateTask" />
	</div>
</template>

<script>
import NewTask from './components/NewTask.vue'
import TaskBar from './components/TaskBar.vue'
import TaskGrid from './components/TaskGrid.vue'

export default {
	components: { NewTask, TaskBar, TaskGrid },
	data() {
		return {
			tasks: [],
		}
	},
	computed: {
		progress: function() {
			const doneTasks = t => t.pending === false
			let qtdDone = this.tasks.filter(doneTasks).length
			let value = qtdDone * 100
			const size = this.tasks.length
			if (size > 0) {
				value = value / size
			}
			return value.toFixed(0)
		}
	},
	methods: {
		createTask: function(task) {
			const sameName = t => t.name === task
			const reallyNew = this.tasks.filter(sameName).length == 0
			if (reallyNew) {
				this.tasks.push({name: task, pending: true})
			}
		},
		deleteTask: function(i) {
			this.tasks.splice(i, 1)
		},
		toggleStateTask: function(i) {
			this.tasks[i].pending = !this.tasks[i].pending
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
