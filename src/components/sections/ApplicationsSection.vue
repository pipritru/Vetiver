<template>
	<section class="applications" id="applications">
		<div class="applications__container">
			<h2 class="applications__title" v-scroll-reveal="{ origin: 'top', distance: '40px', duration: 1200, delay: 200 }">Aplicaciones del Vetiver</h2>
			<div class="applications__rows">
				<div class="applications__row" v-scroll-reveal="{ origin: 'left', distance: '60px', duration: 1200, delay: 300 }">
					<div class="applications__img">
						<!--<img src="/src/assets/images/vetiver-bioengineering.jpg" alt="Bioingeniería con Vetiver" />-->
					</div>
					<div class="applications__info">
						<h3>Bioingeniería y control de erosión</h3>
						<p>El Vetiver se utiliza para estabilizar taludes, riberas y suelos vulnerables, evitando deslizamientos y pérdida de tierra fértil.</p>
					</div>
				</div>
				<div class="applications__row applications__row--reverse" v-scroll-reveal="{ origin: 'right', distance: '60px', duration: 1200, delay: 400 }">
					<div class="applications__img">
					    <!--<img src="/src/assets/images/vetiver-water.jpg" alt="Purificación de agua con Vetiver" />-->
					</div>
					<div class="applications__info">
						<h3>Purificación de aguas</h3>
						<p>Sus raíces filtran contaminantes y mejoran la calidad del agua en humedales y sistemas de tratamiento natural.</p>
					</div>
				</div>
				<div class="applications__row" v-scroll-reveal="{ origin: 'left', distance: '60px', duration: 1200, delay: 500 }">
					<div class="applications__img">
						<!--<img src="/src/assets/images/vetiver-crafts.jpg" alt="Artesanías y productos con Vetiver" />-->
					</div>
					<div class="applications__info">
						<h3>Artesanías y productos ecológicos</h3>
						<p>Las hojas y raíces de Vetiver se emplean en la elaboración de productos artesanales, aceites y materiales sostenibles.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'ApplicationsSection',
	directives: {
		// scroll-reveal se puede implementar con una librería como vue-scroll-reveal
	}
};
</script>

<style scoped>
.applications {
	background: #F5F0E6;
	padding: 5rem 0 3rem 0;
	width: 100%;
}
.applications__container {
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
}
.applications__title {
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 2.2rem;
	color: #2E7D46;
	margin-bottom: 2rem;
	text-align: center;
}
.applications__rows {
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	width: 100%;
}
.applications__row {
	display: flex;
	gap: 2.5rem;
	align-items: center;
	background: rgba(255,255,255,0.7);
	border-radius: 18px;
	box-shadow: 0 2px 12px #BCE0C7;
	padding: 2rem 1.2rem;
	transition: box-shadow 0.2s, transform 0.2s;
}
.applications__row:hover {
	box-shadow: 0 4px 24px #2E7D46;
	transform: translateY(-4px) scale(1.02);
}
.applications__row--reverse {
	flex-direction: row-reverse;
}
.applications__img {
	flex: 1 1 320px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.applications__img img {
	width: 260px;
	height: auto;
	border-radius: 16px;
	box-shadow: 0 2px 16px #BCE0C7;
	background: #fff;
}
.applications__info {
	flex: 2 1 400px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
.applications__info h3 {
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 1.3rem;
	color: #2E7D46;
	margin-bottom: 0.3rem;
}
.applications__info p {
	font-family: 'Lato', Roboto, sans-serif;
	font-size: 1.05rem;
	color: #2A2A2A;
	opacity: 0.9;
}
@media (max-width: 900px) {
	.applications__container {
		padding: 0 1rem;
	}
	.applications__row, .applications__row--reverse {
		flex-direction: column;
		gap: 1.2rem;
		padding: 1.2rem 0.5rem;
	}
	.applications__img img {
		width: 180px;
	}
}
</style>
<!--
Sección de aplicaciones del Vetiver, alternancia imagen/texto, fotos grandes y títulos claros.
Animaciones scroll reveal y hover en filas.
Estilo moderno, visual y responsivo.
-->