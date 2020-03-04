<template>
	<div class="form">
		<input class="input-todo" type="text" v-model="tarefa" maxLength="70" placeholder="Nova Tarefa?">
        <template v-if="tarefa.length >= 2">
            <button class="button-todo" @click="sendTarefa">+</button>
        </template>
        <template v-else>
            <button class="button-todo-disabled" @click="sendTarefa">+</button>
        </template>
	</div>
</template>

<script>
export default {
    data() {
        return {
            tarefa: ''
        }
    },
    methods: {
        sendTarefa: function() {
            this.$emit('inputData', this.tarefa)
            this.tarefa = ''
        }
    }
}
</script>

<style>
    .input-todo {
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

    .input-todo::placeholder {
        color: #CBD1DC;
    }

    .input-todo:focus {
        outline: none;
        border-color: #275EFE;
    }

    .button-todo {
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

    .button-todo:hover {
        border-color: #275EFE;
        cursor: pointer;
    }
    
    .button-todo-disabled {
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