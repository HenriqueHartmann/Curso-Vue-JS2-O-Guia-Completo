<template>
    <v-navigation-drawer app>
        <MENU-TOOLBAR />
		<v-divider></v-divider>
        <MENU-LIST />
	</v-navigation-drawer>
</template>

<script>
import ToolbarMenu from './ToolbarMenu.vue'
import ListMenu from './ListMenu.vue'

export default {
    components: {
        'MENU-TOOLBAR':ToolbarMenu, 'MENU-LIST':ListMenu
    } 
}
</script>

<style>

</style>
