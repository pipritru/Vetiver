<template>
	<section class="faq" id="faq">
		<div class="faq__container">
			<h2 class="faq__title" v-scroll-reveal="{ origin: 'top', distance: '40px', duration: 1200, delay: 200 }">Preguntas frecuentes</h2>
			<div class="faq__list">
				<div v-for="(item, idx) in faqs" :key="idx" class="faq__item">
					<button class="faq__question" @click="toggle(idx)">
						{{ item.q }}
						<span class="faq__arrow" :class="{ 'faq__arrow--open': openIdx === idx }">&#9662;</span>
					</button>
					<transition name="fade">
						<div v-if="openIdx === idx" class="faq__answer">
							{{ item.a }}
						</div>
					</transition>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'FAQSection',
	data() {
		return {
			openIdx: null,
			faqs: [
				{ q: '¿El Vetiver es invasivo?', a: 'No, el Vetiver no se propaga por semilla y es considerado seguro para restauración ecológica.' },
				{ q: '¿Cuánto crecen sus raíces?', a: 'Las raíces pueden alcanzar hasta 4 metros de profundidad, estabilizando el suelo.' },
				{ q: '¿Dónde se puede usar Vetiver?', a: 'En control de erosión, bioingeniería, purificación de aguas y productos ecológicos.' },
				{ q: '¿Requiere mucho mantenimiento?', a: 'Es una planta resistente, tolerante a sequía y requiere poco mantenimiento.' }
			]
		};
	},
	methods: {
		toggle(idx) {
			this.openIdx = this.openIdx === idx ? null : idx;
		}
	},
	directives: {
		// scroll-reveal se puede implementar con una librería como vue-scroll-reveal
	}
};
</script>

<style scoped>
.faq {
	background: #F5F0E6;
	padding: 5rem 0 3rem 0;
	width: 100%;
}
.faq__container {
	max-width: 800px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
}
.faq__title {
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 2.2rem;
	color: #2E7D46;
	margin-bottom: 2rem;
	text-align: center;
}
.faq__list {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
}
.faq__item {
	background: rgba(255,255,255,0.7);
	border-radius: 14px;
	box-shadow: 0 2px 12px #BCE0C7;
	padding: 0.5rem 1.2rem;
	transition: box-shadow 0.2s;
}
.faq__item:hover {
	box-shadow: 0 4px 24px #2E7D46;
}
.faq__question {
	width: 100%;
	background: none;
	border: none;
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 1.15rem;
	color: #2E7D46;
	font-weight: 600;
	text-align: left;
	padding: 0.7rem 0;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.faq__arrow {
	font-size: 1.2rem;
	color: #2E7D46;
	transition: transform 0.3s;
}
.faq__arrow--open {
	transform: rotate(180deg);
}
.faq__answer {
	font-family: 'Lato', Roboto, sans-serif;
	font-size: 1rem;
	color: #2A2A2A;
	padding: 0.7rem 0 0.5rem 0.5rem;
	opacity: 0.9;
	transition: opacity 0.3s;
}
.fade-enter-active, .fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}
</style>
<!--
Acordeones minimalistas con animaciones suaves de apertura.
Preguntas frecuentes sobre Vetiver, estilo moderno y responsivo.
-->