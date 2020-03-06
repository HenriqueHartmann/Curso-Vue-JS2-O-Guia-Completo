<template>
	<div class="form">
		<input class="input-task" type="text" v-model="task" maxLength="25" placeholder="Nova Tarefa?">
        <button v-if="task.length >= 5" class="button-add-task free" @click="sendTask">+</button>
        <button v-else class="button-add-task block">+</button>
	</div>
</template>

<script>
export default {
    data() {
        return {
            task: ''
        }
    },
    methods: {
        sendTask: function() {
            this.$emit('inputData', this.task)
            this.task = ''
        }
    }
}
</script>

<style>
    .input-task {
        margin: 0;
        margin-bottom: 30px;
        width: 360px;
        padding: 8px 16px;
        line-height: 20px;
        font-size: 20px;
        color: #99A3BA;
        border: 1px solid #CDD9ED;
        border-radius: 6px 0 0 6px;
        background: rgba(0,0,0,0.15);
    }

    .input-task::placeholder {
        color: #CBD1DC;
    }

    .input-task:focus {
        outline: none;
        border-color: #275EFE;
    }

    .button-add-task {
        margin-left: -1px;
        padding: 8px 12px;
        line-height: 23px;
        font-size: 20px;
        color: #fff;
        border: 1px solid #CDD9ED;
        border-radius: 0 6px 6px 0;
        text-align: center;
        cursor: pointer;
        transition: background .3s ease, border .3s ease, color .3s ease;
    }

    .free {
        background: #678EFE;
    }

    .block {
        background: rgba(129, 132, 119, 0.5);
    }
</style>