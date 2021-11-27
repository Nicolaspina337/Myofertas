<template>
  <div class="Cuerpo">
    <div>
      <h1 class="TituloUno">Califica tu servicio</h1>
    </div>
    <div class="card">
      <div class="card-header">Centro de valorizaciones</div>
      <div class="card-body">
        <p class="card-text">Ayudanos a mejorar tu experiencia</p>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default"
            >Tu opinión en un título</span
          >
          <input
            v-model="titulo"
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <form>
          <p class="clasificacion">
            <input
              id="radio1"
              type="radio"
              name="estrellas"
              value="5"
              @click="puntuar(5)"
            /><!--
                  --><label for="radio1">★</label
            ><!--
                  --><input
              id="radio2"
              type="radio"
              name="estrellas"
              value="4"
              @click="puntuar(4)"
            /><!--
                  --><label for="radio2">★</label
            ><!--
                  --><input
              id="radio3"
              type="radio"
              name="estrellas"
              value="3"
              @click="puntuar(3)"
            /><!--
                  --><label for="radio3">★</label
            ><!--
                  --><input
              id="radio4"
              type="radio"
              name="estrellas"
              value="2"
              @click="puntuar(2)"
            /><!--
                  --><label for="radio4">★</label
            ><!--
                  --><input
              id="radio5"
              type="radio"
              name="estrellas"
              value="1"
              @click="puntuar(1)"
            /><!--
                  --><label for="radio5">★</label>
          </p>
        </form>

        <div class="input-group">
          <span class="input-group-text">Dejanos tu comentario</span>
          <textarea
            class="form-control"
            v-model="comentario"
            aria-label="With textarea"
          ></textarea>
        </div>

        <div class="input-group mb-3">
          <input
            type="file"
            class="form-control"
            id="inputGroupFile02"
            @change="onFileChange"
          />
          <label class="input-group-text" for="inputGroupFile02">Subir </label>
        </div>

        <button
          type="button"
          class="btn btn-primary btn-lg"
          style="margin: auto"
          @click="publicar()"
        >
          Publicar Valoralizacion
        </button>
      </div>
    </div>

    <footer>
      <div class="TitulosDos">
        <h1>Contactanos</h1>
      </div>

      <div class="parallaxUno">
        <div class="ListaGeneral">
          <p><br />Ubicacion:</p>
          <ul>
            <li>Avenida Grecia #459</li>
            <li>Ñuñoa, Region Metropolitana</li>
            <li>Chile</li>
          </ul>
        </div>
        <div class="ListaGeneral">
          <p><br />Telefono:</p>
          <ul>
            <li>+56287956234</li>
          </ul>
        </div>
        <div class="ListaGeneral">
          <p><br />Envienos un correo electronico:</p>
          <ul>
            <li>MisOfertas@RetailOfertas.cl</li>
          </ul>
        </div>
        <div class="creadores_web">
          <h6 class="texto_creadores">
            Desarrollo de paginas web (grupo 7) Duoc uc 2021
          </h6>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      titulo: "",
      puntuacion: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
      },
      comentario: "",
      archivo: "",
    };
  },
  mounted() {
    console.log("montado");
  },
  computed: {
    suma() {
      return 2 + 2;
    },
    estrella() {
      let seleccionada = 0;
      for (const punto in this.puntuacion) {
        if (this.puntuacion[punto]) {
          seleccionada = punto;
        }
      }
      return seleccionada;
    }
  },
  methods: {
    onFileChange(event) {
      let files = event.target.files || event.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let image = new Image();
      let reader = new FileReader();
      let vm = this;

      reader.onload = (e) => {
        vm.archivo = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    puntuar(valor) {
      for (const punto in this.puntuacion) {
        this.puntuacion[punto] = false;
      }
      this.puntuacion[valor] = true;
    },
    publicar() {
      if (this.esValido()) {
        axios
          .post("/api/valorizaciones/add", {
            titulo: this.titulo,
            estrellas: this.estrella,
            comentario: this.comentario,
            foto: this.archivo,
          })
          .then(respuesta => {
            alert("Se inserto en base de datos");
          })
          .catch((error) => {
            alert(error);
          });
      } else {
        console.log("no enviado");
      }
    },
    esValido() {
      if (this.titulo.trim().length <= 0) {
        alert("Debe ingresar un titulo");
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;1,700&family=Fjalla+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

.Cuerpo {
  background-color: rgb(87, 250, 196);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
#boton_ini {
  font-family: "lobster", cursive;
  font-size: 20px;
  color: white;
}
#productos {
  font-family: "lobster", cursive;
  font-size: 20px;
  color: white;
}
#contactos {
  font-family: "lobster", cursive;
  font-size: 20px;
  color: white;
}
.ListaGeneral {
  margin: 10px;
  font-size: 20px;
  margin-bottom: -3px;
  padding: 5px;
  font-weight: 100;
  font-family: "Lora", serif;
  margin-top: -7px;
  color: rgb(255, 255, 255);
}
#TITULO {
  font-family: "Lobster", cursive;
  font-size: 29px;
  color: rgb(43, 49, 48);
}
.parallaxUno {
  background-color: rgba(17, 24, 39);
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.TitulosDos {
  text-align: center;
  margin: 0.5px;
  color: rgb(255, 255, 255);
  font-family: "Lora", serif;
  font-size: 40px;
  margin-top: 15px;
  background-color: rgba(71, 100, 146);
}
#navegador {
  background-color: rgba(71, 100, 146);
}

.creadores_web {
  height: 42px;
  width: 1902px;
  margin-top: -0.9em;
  background-color: rgba(71, 100, 146, 0.5);
  max-width: 100%;
}
.texto_creadores {
  margin-top: 2em;
  color: rgb(255, 255, 255);
}
.TituloUno {
  text-align: center;
  font-size: 50px;
  font-family: "Lora", serif;
  color: white;
  margin-top: 65px;
}

#form {
  width: 250px;
  margin: 0 auto;
  height: 50px;
}

#form p {
  text-align: center;
}

#form label {
  font-size: 20px;
}

input[type="radio"] {
  display: none;
}

label {
  color: grey;
}

.clasificacion {
  direction: rtl;
  unicode-bidi: bidi-override;
}
.clasificacion label {
  font-size: 30px;
}

label:hover,
label:hover ~ label {
  color: orange;
}

input[type="radio"]:checked ~ label {
  color: orange;
}
</style>