<template>
  <header class="navbar">
    <h1 class="logo">EcoVerde</h1>
    <nav>
      <ul>
        <li><a href="#about">Funcionalidad</a></li>
        <li><a href="#uses">Usos</a></li>
        <li><a href="#company">Empresa</a></li>
        <li><a href="#person">A cargo</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2e7d32;
  color: white;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

a:hover {
  text-decoration: underline;
}
</style>
