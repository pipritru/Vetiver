<template>
  <MainLayout>
    <Navbar />
    <HeroVetiver />
    <AboutVetiver />
    <RootSystemSection />
    <EcologicalBenefits />
    <ApplicationsSection />
    <ScientificImpact />
    <GallerySection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import Navbar from '../components/navbar/Navbar.vue';
import HeroVetiver from '../components/hero/HeroVetiver.vue';
import AboutVetiver from '../components/sections/AboutVetiver.vue';
import RootSystemSection from '../components/sections/RootSystemSection.vue';
import EcologicalBenefits from '../components/sections/EcologicalBenefits.vue';
import ApplicationsSection from '../components/sections/ApplicationsSection.vue';
import ScientificImpact from '../components/sections/ScientificImpact.vue';
import GallerySection from '../components/sections/GallerySection.vue';
import FAQSection from '../components/sections/FAQSection.vue';
import ContactSection from '../components/sections/ContactSection.vue';
import Footer from '../components/footer/Footer.vue';

export default {
  name: 'Home',
  components: {
    MainLayout,
    Navbar,
    HeroVetiver,
    AboutVetiver,
    RootSystemSection,
    EcologicalBenefits,
    ApplicationsSection,
    ScientificImpact,
    GallerySection,
    FAQSection,
    ContactSection,
    Footer
  }
};
</script>

<style scoped>
/* El layout y los componentes ya tienen estilos modernos y responsivos. */
</style>
<!--
Página principal que renderiza todas las secciones modernas y animadas.
Usa MainLayout y los nuevos componentes estilizados.
-->
