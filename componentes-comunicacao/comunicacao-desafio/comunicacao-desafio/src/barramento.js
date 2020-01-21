import Vue from 'vue'

export default new Vue({
    methods: {
        setUser(usuario) {
            this.$emit('selectedUser', usuario)
        },
        selectedUser(callback) {
            this.$on('selectedUser', callback)
        }
    }
})
