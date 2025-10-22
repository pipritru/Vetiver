<template>
  <section id="contact" class="section">
    <h2>Contáctanos</h2>
    <form @submit.prevent="sendMessage">
      <input v-model="name" type="text" placeholder="Tu nombre" required />
      <input v-model="email" type="email" placeholder="Tu correo" required />
      <textarea v-model="message" placeholder="Tu mensaje" required></textarea>
      <button type="submit">Enviar</button>
    </form>
    <p v-if="success" class="success">✅ Mensaje enviado con éxito.</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      success: false,
    };
  },
  methods: {
    sendMessage() {
      // Aquí puedes conectar un backend, un servicio como EmailJS o un endpoint en tu API
      console.log("Mensaje:", this.name, this.email, this.message);
      this.success = true;
      this.name = this.email = this.message = "";
    },
  },
};
</script>

<style scoped>
.section {
  padding: 2rem;
  text-align: center;
  background: #e8f5e9;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
}
input, textarea {
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
}
button {
  background: #2e7d32;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}
button:hover {
  background: #1b5e20;
}
.success {
  color: green;
  margin-top: 1rem;
}
</style>
