<template>
  <section id="projects" class="section">
    <h2>Proyectos con Vetiver</h2>
    <div class="project">
    <!--<img src="@/assets/vetiver.jpg" alt="Proyecto Vetiver" />-->
      <div class="info">
        <h3>Reforestación de Cuencas en Cundinamarca</h3>
        <p>Proyecto piloto que utiliza Vetiver para la estabilización de laderas y recuperación de suelos.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 2rem;
}

.project {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
}

.project img {
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
}

.info {
  max-width: 500px;
}
</style>
