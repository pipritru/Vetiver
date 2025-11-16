<template>
	<section class="scientific-impact" id="impact">
		<div class="scientific-impact__container">
			<h2 class="scientific-impact__title" v-scroll-reveal="{ origin: 'top', distance: '40px', duration: 1200, delay: 200 }">Impacto científico del Vetiver</h2>
			<div class="scientific-impact__grid">
				<div class="scientific-impact__card" v-scroll-reveal="{ origin: 'bottom', distance: '30px', duration: 900, delay: 300 }">
					<span class="scientific-impact__number">+100</span>
					<span class="scientific-impact__label">Estudios publicados</span>
					<span class="scientific-impact__desc">Investigaciones sobre restauración ecológica y bioingeniería.</span>
				</div>
				<div class="scientific-impact__card" v-scroll-reveal="{ origin: 'bottom', distance: '30px', duration: 900, delay: 400 }">
					<span class="scientific-impact__number">+40</span>
					<span class="scientific-impact__label">Países con proyectos</span>
					<span class="scientific-impact__desc">Aplicaciones en Asia, África, América y Oceanía.</span>
				</div>
				<div class="scientific-impact__card" v-scroll-reveal="{ origin: 'bottom', distance: '30px', duration: 900, delay: 500 }">
					<span class="scientific-impact__number">+30</span>
					<span class="scientific-impact__label">Años de uso</span>
					<span class="scientific-impact__desc">Resultados comprobados en restauración ambiental.</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'ScientificImpact',
	directives: {
		// scroll-reveal se puede implementar con una librería como vue-scroll-reveal
	}
};
</script>

<style scoped>
.scientific-impact {
	background: #fff;
	padding: 5rem 0 3rem 0;
	width: 100%;
}
.scientific-impact__container {
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
}
.scientific-impact__title {
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 2.2rem;
	color: #2E7D46;
	margin-bottom: 2rem;
	text-align: center;
}
.scientific-impact__grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	gap: 2rem;
	width: 100%;
}
.scientific-impact__card {
	background: #fff;
	border-radius: 18px;
	box-shadow: 0 2px 12px #BCE0C7;
	padding: 2rem 1.2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	transition: box-shadow 0.2s, transform 0.2s;
}
.scientific-impact__card:hover {
	box-shadow: 0 4px 24px #2E7D46;
	transform: translateY(-4px) scale(1.04);
}
.scientific-impact__number {
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 2.5rem;
	color: #2E7D46;
	font-weight: 700;
}
.scientific-impact__label {
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 1.15rem;
	color: #2A2A2A;
	font-weight: 600;
}
.scientific-impact__desc {
	font-family: 'Lato', Roboto, sans-serif;
	font-size: 1rem;
	color: #2A2A2A;
	text-align: center;
	opacity: 0.85;
}
@media (max-width: 900px) {
	.scientific-impact__container {
		padding: 0 1rem;
	}
	.scientific-impact__grid {
		gap: 1rem;
	}
}
</style>
<!--
Tarjetas blancas con datos cuantitativos y estilo report elegante.
Animaciones scroll reveal y hover en tarjetas.
Estilo moderno, visual y responsivo.
-->