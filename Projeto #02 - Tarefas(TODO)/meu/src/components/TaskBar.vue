<template>
	<div class="task-bar">
		<div class="progress-bar" :style="{width: progress + '%'}" />
		<span>{{ progress }}%</span>
	</div>
</template>

<script>
export default {
	props: {
		progress: String
	}
}
</script>

<style>
	.task-bar {
		position: relative;
		width: 70%;
		height: 30px;
		background-color: transparent;
		margin-bottom: 30px;
		text-align: center;
		font-size: 25px;
		border: 2px solid white;
		border-radius: 8px;
	}

	.progress-bar {
		position: absolute;
		margin: 0;
		height: 100%;
		background: #91D622;
		z-index: -1;
	}
</style>