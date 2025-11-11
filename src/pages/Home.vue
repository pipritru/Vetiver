<template>
  <div>
    <section class="hero">
      <div class="hero-inner">
        <h2>Vetiver — Plantas que transforman</h2>
        <p>Descubre usos, beneficios y proyectos con Vetiver para un mejor entorno ecológico.</p>
        <div class="actions">
          <router-link :to="{ path: '/', hash: '#contact' }" class="btn">Contactar</router-link>
          <router-link to="/about" class="btn secondary">Acerca</router-link>
        </div>
      </div>
    </section>

    <main class="page-wrap">
      <AboutPlant id="about" />
      <Uses id="uses" />
      <Benefits />
      <Projects />
      <CompanyInfo id="company" />
      <PersonInCharge id="person" />
      <ContactForm id="contact" />
    </main>
  </div>
</template>

<script>
import AboutPlant from '../components/AboutPlant.vue'
import Uses from '../components/Uses.vue'
import Benefits from '../components/Benefits.vue'
import Projects from '../components/Projects.vue'
import CompanyInfo from '../components/CompanyInfo.vue'
import PersonInCharge from '../components/PersonInCharge.vue'
import ContactForm from '../components/ContactForm.vue'

export default {
  name: 'HomePage',
  components: {
    AboutPlant,
    Uses,
    Benefits,
    Projects,
    CompanyInfo,
    PersonInCharge,
    ContactForm
  }
}
</script>

<style scoped>
.hero { background: linear-gradient(180deg, rgba(46,125,50,0.06), rgba(255,255,255,0)); padding: 2.5rem 1rem; }
.hero-inner { max-width: 1000px; margin: 0 auto; text-align: center; padding: 1.5rem; }
.hero h2 { margin: 0 0 0.5rem 0; color: #1b5e20; font-size: 2rem; }
.hero p { margin: 0 0 1rem 0; color: #2d6b3a; }
.actions { display: flex; gap: 1rem; justify-content: center; }
.btn { background: #2e7d32; color: white; padding: 0.6rem 1rem; border-radius: 6px; text-decoration: none; font-weight: 600; }
.btn.secondary { background: transparent; color: #2e7d32; border: 1px solid #2e7d32; }
.page-wrap { max-width: 1100px; margin: 1.25rem auto; padding: 0 1rem; }

@media (max-width: 700px) {
  .hero h2 { font-size: 1.4rem; }
  .actions { flex-direction: column; }
}
</style>
