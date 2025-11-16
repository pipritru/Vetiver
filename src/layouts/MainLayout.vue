<template>
	<div class="main-layout">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'MainLayout'
};
</script>

<style scoped>
.main-layout {
	min-height: 100vh;
	width: 100vw;
	font-family: 'Lato', Roboto, sans-serif;
	background: linear-gradient(120deg, #F5F0E6 0%, #BCE0C7 100%);
	color: #2A2A2A;
	transition: background 0.5s;
	overflow-x: hidden;
}
@media (max-width: 900px) {
	.main-layout {
		padding: 0;
	}
}
</style>
<!--
Layout global que envuelve Home.vue, mantiene fondo, tipografía y animaciones consistentes.
-->