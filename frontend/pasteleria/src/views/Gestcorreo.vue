<template>
  <section class="gestcorreo-component">
    <div class="form-group">
      <label for="para">Para</label>
      <input
        type="email"
        class="form-control"
        id="para"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="para"
      />
    </div>
    <div class="form-group">
      <label for="asunto">Asunto</label>
      <input type="text" class="form-control" id="asunto" v-model="asunto"/>
    </div>
    <div class="form-group">
      <label for="mensaje">Mensaje</label>
      <textarea
        type="text"
        class="form-control"
        id="mensaje"
        placeholder="Escribe aquí tu mensaje"
        rows="10"
        cols="10"
        v-model="mensaje"
      ></textarea>
    </div>
    <button @click="enviarCorreo" class="btn btn-primary">Enviar correo</button>
  </section>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      para: '',
      asunto: '',
      mensaje: '',
    };
  },
  methods: {
    enviarCorreo() {
      let params = {
        para: this.para,
        asunto: this.asunto,
        mensaje: this.mensaje
      };
      const resultado = axios.post('/api/contacto/send', params);
      console.log(resultado);
      alert('Correo enviado');
    }
  }
};
</script>
<style scoped>
.gestcorreo-component {
  max-width: 900px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>