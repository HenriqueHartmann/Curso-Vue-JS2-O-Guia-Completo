<template>
	<div class="bar">
		<div class="progress-bar" :style="{width: percent + '%'}" />
		<div class="text-bar">
			<span>{{ percent }}%</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		percent: Number
	}
}
</script>

<style>
	.bar {
		width: 70%;
		height: 30px;
		position: relative;
		background-color: transparent;
		margin-bottom: 30px;
		text-align: center;
		border: 2px solid white;
		border-radius: 5px;
	}

	.progress-bar {
		margin: 0;
		height: 100%;
		background: #91D622;
		position: absolute;
		z-index: -10;
	}
	
	.text-bar {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 4;
	}

	.text-bar span {
		text-align: center;
		font-size: 25px;
	}
</style>