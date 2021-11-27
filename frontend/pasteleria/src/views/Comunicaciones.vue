<template>
<div class="Cuerpo">

    <h1 class="TituloUno">
            Comunicación
        </h1>

        <h1 class="subtitulo">
          Comuniquese con nosotros
        </h1>

      <section class="form-register" style="margin-bottom: 50px;">
        <h4>Formulario Registro</h4>
          <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre" v-model="nombres">
          <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo" v-model="correos">
          <input class="controls" type="number" name="numero" id="numero" placeholder="Ingrese su Numero" v-model="contactos">
          <div class="form-group">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Motivo de Solicitud" style="font-family:'calibri'; font-size: 18px;  border: 1px solid #1f53c5;" v-model="descripcion"></textarea>
          </div>
          <input class="botons" type="submit" value="Enviar" @click="publicar()">
      </section>

</div>

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nombres: "",
      correos: "",
      contactos: "",
      descripcion: ""
    };
  },
  mounted() {
    console.log("montado");
  },
  computed: {

  },
  methods: {
    publicar() {
      if (this.esValido()) {
        axios
          .post("/api/comunicaciones/add", {
            nombres: this.nombres,
            correos: this.correos,
            contactos: this.contactos,
            descripcion: this.descripcion,
          })
          .then(respuesta => {
            alert("Solicitud registrada");
          })
          .catch((error) => {
            alert(error);
          });
      } else {
        console.log("Su solicitud no se pudo enviar");
      }
    },
    esValido() {
      if (this.nombres.trim().length <= 0) {
        alert("Debe ingresar un titulo");
        return false;
      }
      return true;
    },
        esValido() {
      if (this.correos.trim().length <= 0) {
        alert("Debe ingresar un titulo");
        return false;
      }
      return true;
    },
        esValido() {
      if (this.contactos.trim().length <= 0) {
        alert("Debe ingresar un titulo");
        return false;
      }
      return true;
    },
        esValido() {
      if (this.descripcion.trim().length <= 0) {
        alert("Debe ingresar un titulo");
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
.Cuerpo{
background-color: rgb(87, 250, 196);
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
}
.TituloUno{
text-align: center;    
font-size: 50px;
font-family:'Lora', serif;
color: white;
margin-top: 65px;
}
.subtitulo{
text-align: center;    
font-size: 45px;
font-family:'Lora', serif;
color: rgb(72, 93, 187);
margin-top: 25px;
}

.form-register {
  width: 400px;
  background: #24303c;
  padding: 30px;
  margin: auto;
  margin-top: 90px;
  border-radius: 4px;
  font-family: 'calibri';
  color: rgb(10, 10, 10);
  box-shadow: 7px 13px 37px #000;
}

.form-register h4 {
  font-size: 22px;
  margin-bottom: 20px;
}

.controls {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 16px;
  border: 1px solid #1f53c5;
  font-family: 'calibri';
  font-size: 18px;
  color: rgb(10, 10, 10);
}

.form-register p {
  height: 40px;
  text-align: center;
  font-size: 18px;
  line-height: 40px;
}

.form-register a {
  color: white;
  text-decoration: none;
}

.form-register a:hover {
  color: white;
  text-decoration: underline;
}

.form-register .botons {
  width: 100%;
  background: #1f53c5;
  border: none;
  padding: 12px;
  color: white;
  margin: 16px 0;
  font-size: 16px;
}


</style>