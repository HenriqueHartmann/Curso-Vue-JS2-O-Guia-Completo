<template>
    <div class="fullname">
        {{ nome }} {{ sobrenome }}
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            required: true
        },
        sobrenome: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>