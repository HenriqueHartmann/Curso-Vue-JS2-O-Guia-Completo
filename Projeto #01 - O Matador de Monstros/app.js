new Vue({
    el: '#app',
    data: {
        jogando: false,
        given: 0,
        status: false,
        mesgStatus: '',
        mesgStatusClass: '',
        player: {
          lifeBar: 100,
          styleLifeBar: {
              width: '100%;',
              backgroundColor: 'darkgreen'
          },
          attack: 0
        },
        monster: {
           lifeBar: 100,
           styleLifeBar: {
               width: 'width: 100%;',
               backgroundColor: 'darkgreen'
           },
           attack: 0
        },
        log: false,
        dataLog: []
    },
    methods: {
        move(type) {
            if(type == 0) {
                this.player.attack = Math.floor(Math.random() * 10) + 5
                this.logs(this.player.attack, 'player', 0)
            }else if (type == 1) {
                this.player.attack = Math.floor(Math.random() * 15) + 10
                this.logs(this.player.attack, 'player', 0)
            }else if (type == 2) {
                valueLife = Math.floor(Math.random() * 12) + 6
                this.player.lifeBar += valueLife
                this.logs(valueLife, 'player', 1)
                if (this.player.lifeBar > 100) {
                    this.player.lifeBar = 100
                }
                this.player.attack = 0
            }
            this.monster.lifeBar -= this.player.attack
            if (this.monster.lifeBar <= 20) {
                this.monster.styleLifeBar.backgroundColor = 'red'
            } else {
                this.monster.styleLifeBar.backgroundColor = 'darkgreen'
            }
            this.monster.styleLifeBar.width = `${this.monster.lifeBar}%`
            this.monster.attack = Math.floor(Math.random() * 12) + 6
            this.player.lifeBar -= this.monster.attack
            this.logs(this.monster.attack, 'monster', 0)
            if (this.player.lifeBar <= 20) {
                this.player.styleLifeBar.backgroundColor = 'red'
            } else {
                this.player.styleLifeBar.backgroundColor = 'darkgreen'
            }
            this.player.styleLifeBar.width = `${this.player.lifeBar}%`
            this.gameOver(0)
        },
        gameOver(playing){
            if (playing == 1) {
                this.status = true
                this.jogando = false
                this.mesgStatus = 'Você perdeu!!! :('
                this.mesgStatusClass = 'loser'
            } else {
                if (this.player.lifeBar <= 0) {
                    this.player.lifeBar = 0
                    this.status = true
                    this.jogando = false
                    this.mesgStatus = 'Você perdeu! :('
                    this.mesgStatusClass = 'loser'
                } else if (this.monster.lifeBar <= 0) {
                    this.monster.lifeBar = 0
                    this.status = true
                    this.jogando = false
                    this.mesgStatus = 'Você ganhou! :)'
                    this.mesgStatusClass = 'winner'
                }
            }
        },
        resetStart() {
            if (this.jogando == false && this.status == true) {
                this.monster.lifeBar = `100`
                this.monster.styleLifeBar.backgroundColor = 'darkgreen'
                this.monster.styleLifeBar.width = '100%'
                this.player.lifeBar = `100`
                this.player.styleLifeBar.backgroundColor = 'darkgreen'
                this.player.styleLifeBar.width = '100%'
                this.status = false
                this.mesgStatus = ''
                this.log = false
                this.dataLog = []
                this.jogando = true
            } else {
                this.jogando = true
                this.log = true
            }
        },
        logs(value, profile, move) {
            if (move == 0) {
                if (profile == 'player') {
                    who = 'JOGADOR'
                    against = 'MONSTRO'
                    cor = 'blue'
                } else {
                    who = 'MONSTRO'
                    against = 'JOGADOR'
                    cor = 'red'
                }
                mensagem = {msg: `${who} ATINGIU ${against} COM ${value}.`, style: `background-color: ${cor}`}
            }else {
                mensagem = {msg: `${who} GANHOU FORÇA DE ${value}.`, style: `background-color: blue`}
            }
            this.dataLog.push(mensagem)
        }
    }
});