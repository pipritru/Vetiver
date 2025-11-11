<template>
  <header class="navbar">
    <div class="container">
      <router-link to="/" class="brand">
        <img :src="logo" alt="Vetiver" class="brand-logo" />
        <h1 class="brand-text">Vetiver</h1>
      </router-link>

      <button class="burger" @click="open = !open" :aria-expanded="open" aria-label="Abrir menú">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <nav :class="{ open }" class="main-nav">
        <ul>
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/about">Acerca de nosotros</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#about' }">Planta</router-link></li>
          <li class="mobile-only"><router-link :to="{ path: '/', hash: '#contact' }">Contáctanos</router-link></li>
        </ul>
      </nav>

      <!-- CTA on the right for desktop -->
      <router-link :to="{ path: '/', hash: '#contact' }" class="cta desktop-only">Contáctanos</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import logo from '../assets/logo vetiver.png'
const open = ref(false)
</script>

<style scoped>
.navbar { position: sticky; top: 0; z-index: 100; background: linear-gradient(90deg,#2e7d32, #1b5e20); }
.container { display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; max-width: 1200px; margin: 0 auto; }
.brand { text-decoration: none; color: white; display: flex; align-items: center; }
.brand-logo { height: 36px; width: auto; margin-right: 8px; display: block; }
.brand-text { font-size: 1.25rem; margin: 0; font-weight: 700; color: #fff; }

.main-nav { display: flex; position: absolute; left: 50%; transform: translateX(-50%); }
.main-nav ul { list-style: none; display: flex; gap: 1.75rem; margin: 0; padding: 0; align-items: center; }
.main-nav a { color: white; text-decoration: none; font-weight: 600; padding: 0.25rem 0.35rem; }
.main-nav a.router-link-active { text-decoration: underline; }

.cta { background: #263238; color: #fff; padding: 0.5rem 0.9rem; border-radius: 24px; text-decoration: none; font-weight: 700; }
.cta:hover { opacity: 0.95; }
.desktop-only { display: inline-block; }
.mobile-only { display: none; }

.burger { display: none; background: transparent; border: 0; flex-direction: column; gap: 4px; padding: 0.25rem; }
.burger .bar { display: block; width: 22px; height: 2px; background: #fff; border-radius: 2px; }

@media (max-width: 800px) {
  .burger { display: flex; }
  .main-nav { position: absolute; right: 1rem; left: auto; top: 64px; background: rgba(14,54,20,0.98); padding: 1rem; border-radius: 8px; transform-origin: top right; transition: transform 150ms ease, opacity 150ms ease; opacity: 0; transform: scale(0.95); pointer-events: none; }
  .main-nav.open { opacity: 1; transform: scale(1); pointer-events: auto; }
  .main-nav ul { flex-direction: column; gap: 0.75rem; }
  .main-nav { transform: none; left: auto; }
  .desktop-only { display: none; }
  .mobile-only { display: block; }
  .brand { gap: 6px; }
}
</style>
