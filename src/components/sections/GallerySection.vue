<template>
	<section class="gallery" id="gallery">
		<div class="gallery__container">
			<h2 class="gallery__title" v-scroll-reveal="{ origin: 'top', distance: '40px', duration: 1200, delay: 200 }">Galería Vetiver</h2>
			<div class="gallery__grid">
				<div v-for="(img, idx) in images" :key="idx" class="gallery__item" @click="openModal(img)" v-scroll-reveal="{ origin: 'bottom', distance: '30px', duration: 900, delay: 300 + idx*100 }">
					<img :src="img" alt="Vetiver imagen" />
				</div>
			</div>
			<div v-if="modalImg" class="gallery__modal" @click.self="closeModal">
				<img :src="modalImg" alt="Imagen ampliada Vetiver" />
				<button class="gallery__close" @click="closeModal">×</button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'GallerySection',
	data() {
		return {
			images: [
				'/src/assets/images/vetiver-1.jpg',
				'/src/assets/images/vetiver-2.jpg',
				'/src/assets/images/vetiver-3.jpg',
				'/src/assets/images/vetiver-4.jpg',
				'/src/assets/images/vetiver-5.jpg',
				'/src/assets/images/vetiver-6.jpg'
			],
			modalImg: null
		};
	},
	methods: {
		openModal(img) {
			this.modalImg = img;
		},
		closeModal() {
			this.modalImg = null;
		}
	},
	directives: {
		// scroll-reveal se puede implementar con una librería como vue-scroll-reveal
	}
};
</script>

<style scoped>
.gallery {
	background: #BCE0C7;
	padding: 5rem 0 3rem 0;
	width: 100%;
}
.gallery__container {
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
}
.gallery__title {
	font-family: 'Poppins', Inter, sans-serif;
	font-size: 2.2rem;
	color: #2E7D46;
	margin-bottom: 2rem;
	text-align: center;
}
.gallery__grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	gap: 1.5rem;
	width: 100%;
}
.gallery__item {
	background: #fff;
	border-radius: 16px;
	box-shadow: 0 2px 12px #2E7D46;
	overflow: hidden;
	cursor: pointer;
	transition: box-shadow 0.2s, transform 0.2s;
}
.gallery__item:hover {
	box-shadow: 0 4px 24px #2E7D46;
	transform: scale(1.04);
}
.gallery__item img {
	width: 100%;
	height: 180px;
	object-fit: cover;
	transition: transform 0.3s;
}
.gallery__item:hover img {
	transform: scale(1.08);
}
.gallery__modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(44, 62, 80, 0.85);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 999;
}
.gallery__modal img {
	max-width: 80vw;
	max-height: 80vh;
	border-radius: 18px;
	box-shadow: 0 4px 32px #BCE0C7;
}
.gallery__close {
	position: absolute;
	top: 2rem;
	right: 2rem;
	background: #fff;
	color: #2E7D46;
	border: none;
	font-size: 2.5rem;
	border-radius: 50%;
	width: 48px;
	height: 48px;
	cursor: pointer;
	box-shadow: 0 2px 12px #BCE0C7;
	transition: background 0.2s;
}
.gallery__close:hover {
	background: #BCE0C7;
}
@media (max-width: 900px) {
	.gallery__container {
		padding: 0 1rem;
	}
	.gallery__grid {
		gap: 1rem;
	}
	.gallery__item img {
		height: 120px;
	}
}
</style>
<!--
Galería tipo masonry/grid con hover zoom y modal para ver imágenes.
Animaciones scroll reveal y responsividad.
-->