<template>
<div class="Cuerpo">
    <section class="form-register" style="margin-bottom: 50px;">
        <h4>Crear notificacion</h4>
          <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Titulo notificacion</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
              </div>
          <div class="form-group">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descripcion" style="font-family:'calibri'; font-size: 18px;"></textarea>
          </div>
          <input class="botons" type="submit" value="Enviar">
    </section>
        
    <footer>
      <div class="TitulosDos">
            <h1>
            Contactanos
            </h1>
        </div>
        
        <div class="parallaxUno"> 
        <div class="ListaGeneral">
        <p><br>Ubicacion:</p>
        <ul>
        <li>
        Avenida Grecia #459
        </li>
        <li>
        Ñuñoa, Region Metropolitana
        </li>
        <li>
        Chile
        </li>
        </ul>
        </div>
        <div class="ListaGeneral">
        <p><br>Telefono:</p>
        <ul>
        <li>
        +56287956234
        </li>
        </ul>
        </div>
        <div class="ListaGeneral">
        <p><br>Envienos un correo electronico:</p>
        <ul>
        <li>
        MisOfertas@RetailOfertas.cl
        </li>
        </ul>
        </div>  
          <div class="creadores_web">
          <h6 class="texto_creadores">Desarrollo de paginas web (grupo 7) Duoc uc 2021 </h6>
        </div>
        </div>
    </footer>
</div>
</template>

<style scoped>

.form-register {
  width: 700px;
  background: #24303c;
  padding: 30px;
  margin: auto;
  margin-top: 100px;
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
h4{
    color: white;
}

.parallaxUno {
background-color: rgba(17,24,39);
min-height: 500px; 
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}
.ListaGeneral{
margin: 10px;
font-size: 20px;
margin-bottom: -3px;
padding: 5px;
font-weight: 100;
font-family: 'Lora', serif;
margin-top: -7px;
color: rgb(255, 255, 255);
}
.TitulosDos{
text-align: center;
margin: 0.5px;
color: rgb(255, 255, 255);
font-family: 'Lora', serif;
font-size: 40px;
margin-top: 15px;
background-color:  rgba(71, 100, 146);
}
.creadores_web{
  height: 42px; 
  width: 1902px; 
  margin-top: -0.9em; 
  background-color:  rgba(71, 100, 146, 0.5);
  max-width: 100%;
}
.texto_creadores{
  margin-top: 2em; 
  color: rgb(255, 255, 255);
}
#card_torta{
    max-width: 1750px; 
     margin-top: -6px; 
    margin-left: 20px;
}
</style>