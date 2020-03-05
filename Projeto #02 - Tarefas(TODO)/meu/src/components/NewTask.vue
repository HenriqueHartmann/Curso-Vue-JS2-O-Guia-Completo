<template>
	<div class="form">
		<input class="input-task" type="text" v-model="task" maxLength="70" placeholder="Nova Tarefa?">
        <template v-if="task.length >= 2">
            <button class="button-add-task" @click="sendTask">+</button>
        </template>
        <template v-else>
            <button class="button-add-task-disabled">+</button>
        </template>
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
        background: #678EFE;
        text-align: center;
        transition: background .3s ease, border .3s ease, color .3s ease;
    }

    .button-add-task:hover {
        border-color: #275EFE;
        cursor: pointer;
    }
    
    .button-add-task-disabled {
        margin-left: -1px;
        padding: 8px 12px;
        line-height: 23px;
        font-size: 20px;
        color: #fff;
        border: 1px solid #CDD9ED;
        border-radius: 0 6px 6px 0;
        background: rgba(129, 132, 119, 0.5);
        text-align: center;
        transition: background .3s ease, border .3s ease, color .3s ease;
    }
</style>