<template>
  <section class="notificaciones-component">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Título</th>
          <th scope="col">Descripción</th>
          <th scope="col">Foto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(notificacion, index) in notificaciones" :key="index">
          <th scope="row" v-text="notificacion.titulo_notifi"></th>
          <td v-text="notificacion.descripcion_notifi"></td>
          <td>
            <img :src="notificacion.foto_notifi" />
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      notificaciones: [],
    };
  },
  computed: {},
  mounted() {
    this.obtenerNotificaciones();
  },
  methods: {
    async obtenerNotificaciones() {
      //obtener las notificaciones del api
      const respuesta = await axios.get("/api/gestnotifi/get");
      let datos = respuesta.data;
      datos.map(dato => {
        dato.foto_notifi = dato.foto_notifi.data.map(b => String.fromCharCode(b)).join('')
        return dato;
      })
      this.notificaciones = datos;
    },
  },
};
</script>
<style scoped>
.notificaciones-component {
  padding: 50px 0;
}
</style>