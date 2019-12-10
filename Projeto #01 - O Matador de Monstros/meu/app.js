new Vue({
    el: '#app',
    data: {
        jogando: false,
        given: 0,
        status: false,
        playerLifeBar: 100,
        monsterLifeBar: 100,
        logs: []
    },
    methods: {
        move(type) {
            heal = 0
            attackPlayer = 0
            attackMonster = Math.round(Math.random() * (12 - 6) + 6)
            this.playerLifeBar -= attackMonster
            if(type == 0) {
                attackPlayer = Math.round(Math.random() * (10 - 5) + 5)
            }else if (type == 1) {
                attackPlayer = Math.round(Math.random() * (15 - 10) + 10)
            }else if (type == 2) {
                heal = Math.round(Math.random() * (15 - 7) + 7)
                this.playerLifeBar += heal
                if (this.playerLifeBar > 100) this.playerLifeBar = 100
            }
            this.monsterLifeBar -= attackPlayer

            this.mesgLogs('player', attackPlayer, heal)
            this.mesgLogs('monster', attackMonster, 0)
            this.gameOver(0)
        },
        gameOver(playing) {
            if (playing == 1) {
                this.jogando = false
            } else {
                if (this.playerLifeBar < 0) this.playerLifeBar = 0
                if (this.monsterLifeBar < 0) this.monsterLifeBar = 0
                dif = this.playerLifeBar - this.monsterLifeBar
                if (this.monsterLifeBar == 0 && dif > 0) {
                    this.status = true
                    this.jogando = false
                } else if (this.playerLifeBar == 0 && dif <= 0){
                    this.status = true
                    this.jogando = false

                }
            }
        },
        resetStart() {
            this.monsterLifeBar = 100
            this.playerLifeBar = 100
            this.status = false
            this.mesgStatus = ''
            this.logs = []
            this.jogando = true
        },
        mesgLogs(profile, atk, heal) {
            if (atk > 0 || profile == 'monster') {
                if (profile == 'player') {
                    mensagem = {msg: `JOGADOR ATINGIU MONSTRO COM ${atk}.`, style: `background-color: #4253afaa`}
                } else {
                    mensagem = {msg: `MONSTRO ATINGIU JOGADOR COM ${atk}.`, style: `background-color: #e51c23aa`}
                }
            }else if (profile == 'player') {
                mensagem = {msg: `JOGADOR GANHOU FORÇA DE ${heal}.`, style: `background-color: #4253afaa`}
            }
            this.logs.unshift(mensagem)
        }
    }
});