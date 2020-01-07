<template>
    <v-navigation-drawer app>
        <MENU-TITLE />
		<v-divider></v-divider>
        <MENU-LIST />
	</v-navigation-drawer>
</template>

<script>
import TitleMenu from './TitleMenu.vue'
import ListMenu from './ListMenu.vue'

export default {
    components: {
        'MENU-TITLE':TitleMenu, 'MENU-LIST':ListMenu
    } 
}
</script>

<style>

</style>
