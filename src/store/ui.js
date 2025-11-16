
import { reactive } from 'vue';

export const uiStore = reactive({
	darkMode: false,
	toggleDark() {
		this.darkMode = !this.darkMode;
		document.body.classList.toggle('dark-mode', this.darkMode);
	},
	scrollY: 0,
	setScrollY(y) {
		this.scrollY = y;
	}
});
