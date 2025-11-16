<template>
	<section class="hero">
		<div class="hero__bg" />
		<div class="hero__content" v-scroll-reveal="{ origin: 'top', distance: '40px', duration: 1200, delay: 200 }">
			<h1 class="hero__title">Vetiver: La Planta que Protege y Regenera la Tierra</h1>
			<p class="hero__subtitle">Soluciones ecológicas para el futuro, inspiradas en la naturaleza.</p>
			<div class="hero__actions">
				<a href="#about" class="hero__btn">Conoce Vetiver</a>
				<a href="#contact" class="hero__btn hero__btn--outline">Contacto</a>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'HeroVetiver',
	directives: {
		// scroll-reveal se puede implementar con una librería como vue-scroll-reveal
	}
};
</script>

<style scoped>
.hero {
	position: relative;
	min-height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	background: linear-gradient(120deg, #BCE0C7 0%, #F5F0E6 100%);
}
.hero__bg {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url('/src/assets/images/logo vetiver.png');
	background-size: cover;
	background-position: center;
	opacity: 0.25;
	filter: blur(2px);
	z-index: 1;
	animation: parallax 12s linear infinite alternate;
}
@keyframes parallax {
	0% { transform: scale(1) translateY(0); }
	100% { transform: scale(1.05) translateY(-20px); }
}
.hero__content {
	position: relative;
	z-index: 2;
	text-align: center;
	padding: 2rem 1rem;
	color: #2A2A2A;
}
.hero__title {
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 2.8rem;
	font-weight: 800;
	color: #2E7D46;
	margin-bottom: 1.2rem;
	letter-spacing: 1px;
	text-shadow: 0 2px 24px #BCE0C7;
}
.hero__subtitle {
	font-family: 'Lato', Roboto, sans-serif;
	font-size: 1.3rem;
	color: #2A2A2A;
	margin-bottom: 2rem;
	opacity: 0.85;
}
.hero__actions {
	display: flex;
	gap: 1.5rem;
	justify-content: center;
}
.hero__btn {
	background: #2E7D46;
	color: #fff;
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 1.1rem;
	padding: 0.8rem 2.2rem;
	border-radius: 32px;
	border: none;
	box-shadow: 0 2px 16px #BCE0C7;
	cursor: pointer;
	transition: background 0.3s, transform 0.3s;
	text-decoration: none;
}
.hero__btn:hover {
	background: #BCE0C7;
	color: #2E7D46;
	transform: translateY(-2px) scale(1.04);
}
.hero__btn--outline {
	background: transparent;
	color: #2E7D46;
	border: 2px solid #2E7D46;
	box-shadow: none;
}
.hero__btn--outline:hover {
	background: #2E7D46;
	color: #fff;
}
@media (max-width: 768px) {
	.hero__title {
		font-size: 2rem;
	}
	.hero__subtitle {
		font-size: 1rem;
	}
	.hero__actions {
		flex-direction: column;
		gap: 1rem;
	}
}
</style>
<!--
Hero principal con imagen de fondo, título grande, subtítulo ecológico y botones animados.
Animación parallax en el fondo y scroll reveal en el contenido.
Estilo moderno, visual y responsivo.
-->