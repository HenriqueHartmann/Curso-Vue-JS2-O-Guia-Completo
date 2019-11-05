new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(event) {
            alert('Estou te alertando')
        },
        guardaValor(event) {
            this.valor = event.target.value
        }
    }
})