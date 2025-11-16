<template>
	<section class="eco-benefits" id="benefits">
		<div class="eco-benefits__container">
			<h2 class="eco-benefits__title" v-scroll-reveal="{ origin: 'top', distance: '40px', duration: 1200, delay: 200 }">Beneficios ecológicos del Vetiver</h2>
			<div class="eco-benefits__grid">
				<div class="eco-benefits__card" v-scroll-reveal="{ origin: 'bottom', distance: '30px', duration: 900, delay: 300 }">
					<span class="eco-benefits__icon">
						<!-- Icono de suelo -->
						<svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" stroke="#2E7D46" stroke-width="2"/><rect x="8" y="20" width="16" height="6" rx="3" fill="#BCE0C7"/></svg>
					</span>
					<span class="eco-benefits__card-title">Protección de suelos</span>
					<span class="eco-benefits__card-desc">Previene la erosión y mejora la estructura del suelo.</span>
				</div>
				<div class="eco-benefits__card" v-scroll-reveal="{ origin: 'bottom', distance: '30px', duration: 900, delay: 400 }">
					<span class="eco-benefits__icon">
						<!-- Icono de agua -->
						<svg width="32" height="32" fill="none" viewBox="0 0 32 32"><ellipse cx="16" cy="24" rx="10" ry="4" fill="#BCE0C7"/><path d="M16 4C18 10 24 14 16 24C8 14 14 10 16 4Z" fill="#2E7D46"/></svg>
					</span>
					<span class="eco-benefits__card-title">Purificación de agua</span>
					<span class="eco-benefits__card-desc">Filtra contaminantes y mejora la calidad del agua.</span>
				</div>
				<div class="eco-benefits__card" v-scroll-reveal="{ origin: 'bottom', distance: '30px', duration: 900, delay: 500 }">
					<span class="eco-benefits__icon">
						<!-- Icono de biodiversidad -->
						<svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" stroke="#2E7D46" stroke-width="2"/><path d="M16 10C18 14 24 14 16 24C8 14 14 14 16 10Z" fill="#BCE0C7"/></svg>
					</span>
					<span class="eco-benefits__card-title">Fomento de biodiversidad</span>
					<span class="eco-benefits__card-desc">Crea hábitats y favorece la vida silvestre.</span>
				</div>
				<div class="eco-benefits__card" v-scroll-reveal="{ origin: 'bottom', distance: '30px', duration: 900, delay: 600 }">
					<span class="eco-benefits__icon">
						<!-- Icono de clima -->
						<svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" rx="8" fill="#BCE0C7"/><path d="M16 8V24" stroke="#2E7D46" stroke-width="2"/></svg>
					</span>
					<span class="eco-benefits__card-title">Regulación climática</span>
					<span class="eco-benefits__card-desc">Ayuda a mitigar el cambio climático y regula la temperatura.</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'EcologicalBenefits',
	directives: {
		// scroll-reveal se puede implementar con una librería como vue-scroll-reveal
	}
};
</script>

<style scoped>
.eco-benefits {
	background: #BCE0C7;
	padding: 5rem 0 3rem 0;
	width: 100%;
}
.eco-benefits__container {
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
}
.eco-benefits__title {
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 2.2rem;
	color: #2E7D46;
	margin-bottom: 2rem;
	text-align: center;
}
.eco-benefits__grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	gap: 2rem;
	width: 100%;
}
.eco-benefits__card {
	background: rgba(255,255,255,0.7);
	border-radius: 18px;
	box-shadow: 0 2px 12px #2E7D46;
	padding: 2rem 1.2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	transition: box-shadow 0.2s, transform 0.2s;
}
.eco-benefits__card:hover {
	box-shadow: 0 4px 24px #2E7D46;
	transform: translateY(-4px) scale(1.04);
}
.eco-benefits__icon {
	margin-bottom: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
}
.eco-benefits__card-title {
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 1.15rem;
	color: #2E7D46;
	font-weight: 600;
}
.eco-benefits__card-desc {
	font-family: 'Lato', Roboto, sans-serif;
	font-size: 1rem;
	color: #2A2A2A;
	text-align: center;
}
@media (max-width: 900px) {
	.eco-benefits__container {
		padding: 0 1rem;
	}
	.eco-benefits__grid {
		gap: 1rem;
	}
}
</style>
<!--
Grid moderno de tarjetas con iconos lineales, animaciones hover y scroll reveal.
Beneficios ecológicos del Vetiver, estilo visual y responsivo.
-->