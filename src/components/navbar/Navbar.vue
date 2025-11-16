<template>
	<nav :class="['navbar', { 'navbar--scrolled': isScrolled }]">
		<div class="navbar__container">
			<div class="navbar__logo">Vetiver</div>
			<ul class="navbar__links">
				<li><a href="#about">Sobre Vetiver</a></li>
				<li><a href="#benefits">Beneficios</a></li>
				<li><a href="#applications">Aplicaciones</a></li>
				<li><a href="#gallery">Galería</a></li>
				<li><a href="#faq">FAQ</a></li>
				<li><a href="#contact">Contacto</a></li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Navbar',
	data() {
		return {
			isScrolled: false
		};
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll() {
			this.isScrolled = window.scrollY > 50;
		}
	}
};
</script>

<style scoped>
.navbar {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(12px);
	box-shadow: 0 4px 24px rgba(46, 125, 70, 0.08);
	transition: background 0.3s, box-shadow 0.3s;
}
.navbar--scrolled {
	background: rgba(255, 255, 255, 0.85);
	box-shadow: 0 2px 16px rgba(46, 125, 70, 0.18);
}
.navbar__container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
}
.navbar__logo {
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 2rem;
	font-weight: 700;
	color: #2E7D46;
	letter-spacing: 2px;
}
.navbar__links {
	display: flex;
	gap: 2rem;
	list-style: none;
}
.navbar__links a {
	font-family: 'Lato', Roboto, sans-serif;
	color: #2A2A2A;
	text-decoration: none;
	font-size: 1.1rem;
	padding: 0.5rem 1rem;
	border-radius: 8px;
	transition: background 0.2s, color 0.2s;
}
.navbar__links a:hover {
	background: #BCE0C7;
	color: #2E7D46;
}
@media (max-width: 768px) {
	.navbar__container {
		flex-direction: column;
		align-items: flex-start;
	}
	.navbar__links {
		gap: 1rem;
		flex-wrap: wrap;
	}
}
</style>
<!--
Barra de navegación flotante con glassmorphism, sombra suave y animación scroll.
Al hacer scroll, la barra se vuelve más sólida y con sombra marcada.
Responsiva y moderna, inspirada en landing ecológicas premium.
-->