<template>
    <div class="task" :class="stateClass" @click="$emit('toggleStateTask')">
        <span @click.stop="$emit('deleteTask')">X</span>
		<p>{{ task.name }}</p>
    </div>
</template>

<script>
export default {
    props: {
        task: { type: Object, required: true }
    },
    computed: {
        stateClass() {
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    },
}
</script>

<style>
    .task {
        position: relative;
		margin-left: auto;
		width: 350px;
		height: 150px;
        padding: 10px;
		border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
		user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
	}

	.pending {
		border-left: 12px solid #9D002C;
		background: #D41935;
	}

	.done {
        color: #DDD;
		border-left: 12px solid #00871B;
		background: #19D43E;
		text-decoration: line-through;
	}

    .task span {
        position: absolute;
        cursor: pointer;
        top: 10px;
        right: 10px;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.3);
        font-size: 0.9rem;
        font-weight: 600;
        display: flex;
        justify-content: center;
    }

	.task span:hover {
		background: rgba(0, 0, 0, 0.5);
        transition: background .2s ease;
	}
</style>
