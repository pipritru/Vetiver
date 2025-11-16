<template>
	<section class="contact" id="contact">
		<div class="contact__container">
			<h2 class="contact__title" v-scroll-reveal="{ origin: 'top', distance: '40px', duration: 1200, delay: 200 }">Contacto</h2>
			<div class="contact__cards">
				<div class="contact__card" v-scroll-reveal="{ origin: 'left', distance: '30px', duration: 900, delay: 300 }">
					<span class="contact__card-title">Email</span>
					<span class="contact__card-info">vetiver@ecoplanta.com</span>
				</div>
				<div class="contact__card" v-scroll-reveal="{ origin: 'right', distance: '30px', duration: 900, delay: 400 }">
					<span class="contact__card-title">Teléfono</span>
					<span class="contact__card-info">+57 3x xxx xxxx</span>
				</div>
			</div>
			<form class="contact__form" @submit.prevent="submitForm" v-scroll-reveal="{ origin: 'bottom', distance: '40px', duration: 1200, delay: 500 }">
				<div class="contact__form-group">
					<input type="text" v-model="form.name" placeholder="Nombre" required />
				</div>
				<div class="contact__form-group">
					<input type="email" v-model="form.email" placeholder="Correo electrónico" required />
				</div>
				<div class="contact__form-group">
					<textarea v-model="form.message" placeholder="Mensaje" rows="4" required></textarea>
				</div>
				<button type="submit" class="contact__btn">Enviar mensaje</button>
				<div v-if="sent" class="contact__sent">¡Mensaje enviado!</div>
			</form>
		</div>
	</section>
</template>

<script>
export default {
	name: 'ContactSection',
	data() {
		return {
			form: {
				name: '',
				email: '',
				message: ''
			},
			sent: false
		};
	},
	methods: {
		submitForm() {
			// Aquí iría la lógica para enviar el formulario (API, email, etc.)
			this.sent = true;
			setTimeout(() => { this.sent = false; }, 3000);
			this.form = { name: '', email: '', message: '' };
		}
	},
	directives: {
		// scroll-reveal se puede implementar con una librería como vue-scroll-reveal
	}
};
</script>

<style scoped>
.contact {
	background: #BCE0C7;
	padding: 5rem 0 3rem 0;
	width: 100%;
}
.contact__container {
	max-width: 600px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
}
.contact__title {
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 2.2rem;
	color: #2E7D46;
	margin-bottom: 2rem;
	text-align: center;
}
.contact__cards {
	display: flex;
	gap: 2rem;
	width: 100%;
	justify-content: center;
}
.contact__card {
	background: rgba(255,255,255,0.7);
	border-radius: 14px;
	box-shadow: 0 2px 12px #BCE0C7;
	padding: 1rem 2rem;
	min-width: 160px;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: box-shadow 0.2s, transform 0.2s;
}
.contact__card:hover {
	box-shadow: 0 4px 24px #2E7D46;
	transform: translateY(-2px) scale(1.04);
}
.contact__card-title {
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 1.1rem;
	color: #2E7D46;
	font-weight: 600;
	margin-bottom: 0.3rem;
}
.contact__card-info {
	font-family: 'Lato', Roboto, sans-serif;
	font-size: 1rem;
	color: #2A2A2A;
}
.contact__form {
	background: rgba(255,255,255,0.7);
	border-radius: 12px;
	box-shadow: 0 2px 10px #BCE0C7;
	padding: 2rem 1.2rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	align-items: center;
}
.contact__form-group {
	width: 100%;
}
.contact__form input,
.contact__form textarea {
	width: 100%;
	padding: 0.7rem 1rem;
	border-radius: 12px;
	border: 1px solid #BCE0C7;
	font-family: 'Lato', Roboto, sans-serif;
	font-size: 1rem;
	margin-bottom: 0.5rem;
	background: #fff;
	color: #2A2A2A;
	transition: border 0.2s;
}
.contact__form input:focus,
.contact__form textarea:focus {
	border: 1.5px solid #2E7D46;
	outline: none;
}
.contact__btn {
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
}
.contact__btn:hover {
	background: #BCE0C7;
	color: #2E7D46;
	transform: translateY(-2px) scale(1.04);
}
.contact__sent {
	color: #2E7D46;
	font-size: 1rem;
	margin-top: 0.5rem;
	font-family: 'Poppins', Inter, sans-serif;
}
@media (max-width: 900px) {
	.contact__container {
		padding: 0 1rem;
	}
	.contact__cards {
		flex-direction: column;
		gap: 1rem;
	}
}
</style>
<!--
Formulario limpio, fondos suaves y tarjetas de información de contacto.
Animaciones scroll reveal y hover.
Estilo moderno, visual y responsivo.
-->