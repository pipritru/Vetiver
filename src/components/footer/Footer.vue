<template>
	<footer class="footer">
		<div class="footer__container">
			<div class="footer__brand">Vetiver</div>
			<div class="footer__social">
				<a href="https://twitter.com" target="_blank" aria-label="Twitter" class="footer__icon">
					<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M22 5.92a8.38 8.38 0 01-2.36.65A4.13 4.13 0 0021.4 4.1a8.27 8.27 0 01-2.61 1A4.13 4.13 0 0012 8.13c0 .32.04.64.1.94A11.7 11.7 0 013 4.89a4.13 4.13 0 001.28 5.51A4.07 4.07 0 012.8 9.7v.05a4.13 4.13 0 003.31 4.05c-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08a4.13 4.13 0 003.85 2.86A8.29 8.29 0 012 19.54a11.7 11.7 0 006.29 1.84c7.55 0 11.7-6.26 11.7-11.7 0-.18-.01-.36-.02-.54A8.18 8.18 0 0022 5.92z" fill="#2E7D46"/></svg>
				</a>
				<a href="https://facebook.com" target="_blank" aria-label="Facebook" class="footer__icon">
					<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" fill="#2E7D46"/></svg>
				</a>
				<a href="https://instagram.com" target="_blank" aria-label="Instagram" class="footer__icon">
					<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.398 3.545 1.455 2.488 2.512 2.22 3.685 2.162 4.962.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.326 2.45 1.383 3.507 1.057 1.057 2.23 1.325 3.507 1.383C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.058 2.45-.326 3.507-1.383 1.057-1.057 1.325-2.23 1.383-3.507.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.326-2.45-1.383-3.507C19.398.398 18.225.13 16.948.072 15.668.013 15.259 0 12 0z" fill="#2E7D46"/><circle cx="12" cy="12" r="3.5" fill="#2E7D46"/></svg>
				</a>
			</div>
			<div class="footer__credits">
				© 2025 Vetiver. Página ecológica premium. Desarrollado por Christian Diaz y Julian Betancur.
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer'
};
</script>

<style scoped>
.footer {
	background: rgba(255,255,255,0.85);
	box-shadow: 0 -2px 16px #BCE0C7;
	padding: 2rem 0 1rem 0;
	font-family: 'Lato', Roboto, sans-serif;
	color: #2A2A2A;
	width: 100%;
}
.footer__container {
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.2rem;
}
.footer__brand {
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 1.5rem;
	font-weight: 700;
	color: #2E7D46;
	margin-bottom: 0.5rem;
}
.footer__social {
	display: flex;
	gap: 1.5rem;
}
.footer__icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: #F5F0E6;
	transition: background 0.2s, box-shadow 0.2s;
	box-shadow: 0 2px 8px #BCE0C7;
}
.footer__icon:hover {
	background: #BCE0C7;
	box-shadow: 0 4px 16px #2E7D46;
}
.footer__credits {
	font-size: 0.95rem;
	color: #2A2A2A;
	opacity: 0.7;
	text-align: center;
}
@media (max-width: 768px) {
	.footer__container {
		padding: 0 1rem;
	}
	.footer__social {
		gap: 1rem;
	}
}
</style>
<!--
Footer simple, limpio y profesional. Incluye redes sociales y créditos.
Responsivo y con animaciones suaves en los iconos.
-->