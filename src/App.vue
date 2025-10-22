<template>
  <div>
    <Header />
    <AboutPlant />
    <Uses />
    <Benefits />
    <Projects />
    <CompanyInfo />
    <PersonInCharge />
    <ContactForm />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import AboutPlant from './components/AboutPlant.vue'
import Uses from './components/Uses.vue'
import Benefits from './components/Benefits.vue'
import Projects from './components/Projects.vue'
import CompanyInfo from './components/CompanyInfo.vue'
import PersonInCharge from './components/PersonInCharge.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    AboutPlant,
    Uses,
    Benefits,
    Projects,
    CompanyInfo,
    PersonInCharge,
    ContactForm,
    Footer
  }
}
</script>
