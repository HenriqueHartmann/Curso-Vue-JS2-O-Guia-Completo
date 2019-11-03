new Vue({
    el: '#desafio',
    data: {
        nome: 'Henrique Luiz Hartmann',
        idade: 19,
        imagem: 'https://folhadodia.com/wp-content/uploads/2019/01/jogo-do-dinossauro-google-online.png'
    },
    methods: {
        idadeVezes3: function() {
            return this.idade * 3
        },
        random: function() {
            return Math.random()
        }
    }
})