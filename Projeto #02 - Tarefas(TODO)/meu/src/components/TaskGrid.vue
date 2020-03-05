<template>
	<div class="grid-container">
		<div 
			:class="{'grid-item': task.pending == true, 'grid-item-done': task.pending == false}"
			v-for="task in tasks" :key="task.id"
		>
			<button class="delete-button" @click="deleteTask(task)">X</button>
			<div class="grid-item-content" @click="endTask(task)">
				<span class="text-todo">
					<template v-if="task.pending">{{ task.name }}</template>
					<template v-else><strike>{{ task.name }}</strike></template>
				</span>
			</div>
        </div>
	</div>
</template>

<script>
export default {
	props: {
		tasks: { type: Array, required: true }
	}, 
	methods: {
		endTask: function(task) {
			if (task.pending == false){
				task.pending = true
			}else {
				task.pending = false
			}
		},
		deleteTask: function(task) {
			this.tasks.splice(this.tasks.indexOf(task), 1)
		}
	}
}
</script>

<style>
	.grid-container {
		display: inline-grid;
		grid-template-columns: repeat(5, 1fr);
		grid-auto-rows: auto;
		grid-gap: 1rem;
	}

	.grid-item {
		margin-left: auto;
		width: 300px;
		height: 100px;
		border-left: 10px solid #9D002C;
		border-radius: 5px;
		background: #D41935;
		text-align: center;
		word-wrap: break-word;
		user-select: none;
	}

	.grid-item:hover {
		cursor: pointer;
	}

	.grid-item-done {
		width: 300px;
		height: 100px;
		border-left: 10px solid #00871B;
		border-radius: 5px;
		background: #19D43E;
		text-align: center;
		word-wrap: break-word;
		user-select: none;
	}

	.grid-item-done:hover {
		cursor: pointer;
	}

	.delete-button {
		text-align: center;
		font-size: 10px;
		width: 20px;
		height: 18px;
		border: 1px solid rgba(0, 0, 0, 0.4);
		border-radius: 100%;
		background: rgba(0, 0, 0, 0.3);
		color: #fff;
		float: right;
		margin: 0;
		margin-top: 5px;
		margin-right: 5px;
		transition: background .3s ease, border .3s ease, color .3s ease;
	}

	.delete-button:hover {
		cursor: pointer;
		background: #6C70FF;
		width: 22px;
		height: 20px;
		font-size: 11px;
	}

	.grid-item-content {
		line-height: 80px;
	}

	.text-todo {
		font-size: 25px;
		font-weight: 300;
	}
</style>