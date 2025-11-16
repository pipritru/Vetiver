<template>
	<section class="about-vetiver" id="about">
		<div class="about-vetiver__container">
			<div class="about-vetiver__image" v-scroll-reveal="{ origin: 'left', distance: '60px', duration: 1200, delay: 200 }">
				<img src="/src/assets/images/logo vetiver.png" alt="Vetiver botánico" />
			</div>
			<div class="about-vetiver__info" v-scroll-reveal="{ origin: 'right', distance: '60px', duration: 1200, delay: 400 }">
				<h2 class="about-vetiver__title">¿Qué es el Vetiver?</h2>
				<p class="about-vetiver__desc">
					El Vetiver (<span class="about-vetiver__latin">Chrysopogon zizanioides</span>) es una planta perenne con raíces profundas, utilizada en proyectos ecológicos y de restauración ambiental por su capacidad de proteger y regenerar suelos.
				</p>
				<div class="about-vetiver__cards">
					<div class="about-vetiver__card" v-scroll-reveal="{ origin: 'bottom', distance: '30px', duration: 900, delay: 600 }">
						<span class="about-vetiver__card-title">Raíz profunda</span>
						<span class="about-vetiver__card-desc">Hasta 4 metros</span>
					</div>
					<div class="about-vetiver__card" v-scroll-reveal="{ origin: 'bottom', distance: '30px', duration: 900, delay: 700 }">
						<span class="about-vetiver__card-title">No invasiva</span>
						<span class="about-vetiver__card-desc">No se propaga por semilla</span>
					</div>
					<div class="about-vetiver__card" v-scroll-reveal="{ origin: 'bottom', distance: '30px', duration: 900, delay: 800 }">
						<span class="about-vetiver__card-title">Tolerancia extrema</span>
						<span class="about-vetiver__card-desc">Resiste sequía y erosión</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'AboutVetiver',
	directives: {
		// scroll-reveal se puede implementar con una librería como vue-scroll-reveal
	}
};
</script>

<style scoped>
.about-vetiver {
	background: #F5F0E6;
	padding: 5rem 0 3rem 0;
	width: 100%;
}
.about-vetiver__container {
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	gap: 3rem;
	align-items: center;
	flex-wrap: wrap;
}
.about-vetiver__image {
	flex: 1 1 320px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.about-vetiver__image img {
	width: 320px;
	height: auto;
	border-radius: 24px;
	box-shadow: 0 4px 32px #BCE0C7;
	background: #fff;
}
.about-vetiver__info {
	flex: 2 1 400px;
	display: flex;
	flex-direction: column;
	gap: 2rem;
}
.about-vetiver__title {
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 2.2rem;
	color: #2E7D46;
	margin-bottom: 0.5rem;
}
.about-vetiver__desc {
	font-family: 'Lato', Roboto, sans-serif;
	font-size: 1.15rem;
	color: #2A2A2A;
	opacity: 0.9;
}
.about-vetiver__latin {
	font-style: italic;
	color: #BCE0C7;
}
.about-vetiver__cards {
	display: flex;
	gap: 1.5rem;
	flex-wrap: wrap;
}
.about-vetiver__card {
	background: rgba(255,255,255,0.7);
	border-radius: 16px;
	box-shadow: 0 2px 12px #BCE0C7;
	padding: 1.2rem 2rem;
	min-width: 160px;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: box-shadow 0.2s, transform 0.2s;
}
.about-vetiver__card:hover {
	box-shadow: 0 4px 24px #2E7D46;
	transform: translateY(-4px) scale(1.04);
}
.about-vetiver__card-title {
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 1.1rem;
	color: #2E7D46;
	font-weight: 600;
	margin-bottom: 0.3rem;
}
.about-vetiver__card-desc {
	font-family: 'Lato', Roboto, sans-serif;
	font-size: 1rem;
	color: #2A2A2A;
}
@media (max-width: 900px) {
	.about-vetiver__container {
		flex-direction: column;
		gap: 2rem;
		padding: 0 1rem;
	}
	.about-vetiver__image img {
		width: 220px;
	}
}
</style>
<!--
Sección informativa sobre Vetiver, con imagen botánica, texto científico y tarjetas de datos clave.
Animaciones scroll reveal y hover en tarjetas.
Estilo moderno, visual y responsivo.
-->