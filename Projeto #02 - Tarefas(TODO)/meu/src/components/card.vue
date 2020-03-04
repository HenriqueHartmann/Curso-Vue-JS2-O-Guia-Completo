<template>
	<div class="cards">
		<div :class="{card: todo.status == 0, carddone: todo.status == 100}" v-for="todo in todos" :key="todo.id">
			<button class="delete-button" @click="destroyTarefa(todo)">X</button>
			<div class="card-content" @click="endTarefa(todo)">
				<span class="text-todo">
					<template v-if="todo.status == 100"><strike>{{ todo.name }}</strike></template>
					<template v-else>{{ todo.name }}</template>
				</span>
			</div>
        </div>
	</div>
</template>

<script>
export default {
	props: {
		todos: {
			type: Array
		}
	}, 
	methods: {
		endTarefa: function(tarefa) {
			if (tarefa.status == 0){
				tarefa.status = "100"
			}else {
				tarefa.status = "0"
			}
		},
		destroyTarefa: function(tarefa) {
			this.todos.splice(this.todos.indexOf(tarefa), 1)
		}
	}
}
</script>

<style>
	.cards {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-auto-rows: auto;
		grid-gap: 1rem;
	}

	.card {
		width: 300px;
		height: 100px;
		border-left: 10px solid #9D002C;
		border-radius: 5px;
		background: #D41935;
		text-align: center;
		word-wrap: break-word;
	}

	.card:hover {
		cursor: pointer;
	}

	.carddone {
		width: 300px;
		height: 100px;
		border-left: 10px solid #00871B;
		border-radius: 5px;
		background: #19D43E;
		text-align: center;
		word-wrap: break-word;
	}

	.carddone:hover {
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

	.card-content {
		line-height: 80px;
	}

	.text-todo {
		font-size: 25px;
		font-weight: 300;
	}
</style>