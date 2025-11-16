<template>
	<section class="root-system" id="roots">
		<div class="root-system__container">
			<div class="root-system__visual" v-scroll-reveal="{ origin: 'bottom', distance: '60px', duration: 1200, delay: 200 }">
				<!--<img src="/src/assets/images/roots-illustration.png" alt="Ilustración de raíces de Vetiver" />-->
			</div>
			<div class="root-system__info" v-scroll-reveal="{ origin: 'top', distance: '60px', duration: 1200, delay: 400 }">
				<h2 class="root-system__title">Sistema de raíces profundo</h2>
				<p class="root-system__desc">
					El Vetiver desarrolla raíces verticales que pueden alcanzar hasta 4 metros de profundidad, estabilizando el suelo y previniendo la erosión.
				</p>
				<div class="root-system__badges">
					<span class="root-system__badge">Raíces verticales</span>
					<span class="root-system__badge">Hasta 4m de profundidad</span>
					<span class="root-system__badge">Prevención de erosión</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'RootSystemSection',
	directives: {
		// scroll-reveal se puede implementar con una librería como vue-scroll-reveal
	}
};
</script>

<style scoped>
.root-system {
	background: linear-gradient(120deg, #2E7D46 60%, #2A2A2A 100%);
	color: #fff;
	padding: 5rem 0 3rem 0;
	width: 100%;
}
.root-system__container {
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	gap: 3rem;
	align-items: center;
	flex-wrap: wrap;
}
.root-system__visual {
	flex: 1 1 320px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.root-system__visual img {
	width: 320px;
	height: auto;
	border-radius: 24px;
	box-shadow: 0 4px 32px #BCE0C7;
	background: #fff;
}
.root-system__info {
	flex: 2 1 400px;
	display: flex;
	flex-direction: column;
	gap: 2rem;
}
.root-system__title {
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 2.2rem;
	color: #BCE0C7;
	margin-bottom: 0.5rem;
}
.root-system__desc {
	font-family: 'Lato', Roboto, sans-serif;
	font-size: 1.15rem;
	color: #F5F0E6;
	opacity: 0.9;
}
.root-system__badges {
	display: flex;
	gap: 1.2rem;
	flex-wrap: wrap;
}
.root-system__badge {
	background: rgba(44, 62, 80, 0.7);
	color: #BCE0C7;
	border-radius: 12px;
	padding: 0.7rem 1.4rem;
	font-size: 1rem;
	font-family: 'Poppins', Inter, sans-serif;
	font-weight: 500;
	box-shadow: 0 2px 12px #2E7D46;
	transition: box-shadow 0.2s, transform 0.2s;
}
.root-system__badge:hover {
	box-shadow: 0 4px 24px #BCE0C7;
	transform: translateY(-2px) scale(1.04);
}
@media (max-width: 900px) {
	.root-system__container {
		flex-direction: column;
		gap: 2rem;
		padding: 0 1rem;
	}
	.root-system__visual img {
		width: 220px;
	}
}
</style>
<!--
Sección sobre el sistema de raíces del Vetiver, fondo oscuro, ilustración visual y badges destacados.
Animaciones scroll reveal y hover en badges.
Estilo moderno, visual y responsivo.
-->