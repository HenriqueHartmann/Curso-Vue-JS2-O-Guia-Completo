<template>
	<div class="form">
		<input class="input-todo" v-model="tarefa" placeholder="Nova Tarefa?">
        <button class="button-todo">+</button>
	</div>
</template>

<script>
export default {

}
</script>

<style>
    .input-todo {
        background-color: rgba(0,0,0,0.15);
    }
</style>