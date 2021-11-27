<template>
  <div class="Cuerpo">
    <section class="form-register" style="margin-bottom: 50px">
      <h1>Opciones de Administrador</h1>
      <button type="button" class="btn btn-info">
        <router-link id="Botones" :to="{ name: 'gestnotifi' }"
          >Crear notificaciones</router-link
        >
      </button>
      <br />
      <br />
      <button type="button" class="btn btn-success">
        <router-link id="Botones" :to="{ name: 'gestcorreo' }"
          >Enviar correos</router-link
        >
      </button>
      <br />
      <br />
      <button type="button" class="btn btn-warning">
        <router-link id="Botones" :to="{ name: 'gestnotifi' }"
          >Administrar datos</router-link
        >
      </button>
    </section>

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
<style scoped>
h1 {
  font-family: "Lora", serif;
  color: white;
}

#Botones {
  color: white;
  font-size: 20px;
}

.form-register {
  width: 700px;
  background: #24303c;
  padding: 30px;
  margin: auto;
  margin-top: 100px;
  border-radius: 4px;
  font-family: "calibri";
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
  font-family: "calibri";
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