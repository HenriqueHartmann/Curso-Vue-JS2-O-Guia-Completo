<template>
	<div class="bar">
		<!-- <span class="text-percent">{{ percent }}%</span> -->
		<div class="bar-percent" :style="{width: percent + '%',height: '100%', background: '#91D622'}"></div>
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
	.text-percent {
		margin: 0;
		font-size: 25px;
		line-height: 30px;
		background: transparent;
	}
</style>