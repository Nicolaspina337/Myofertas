<router-link to="/comunicaciones">Comunicaciones</router-link>

<template>
 <header>
    <nav class="container">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="navegador">
            <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
            </svg>
            <a class="navbar-brand" id="TITULO">MisOfertas</a>          
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link id="boton_ini" :to="{ name: 'menu'}" > Menu </router-link>
                    </li>
                    ...
                    <li class="nav-item active">
                         <router-link id="productos" :to="{ name: 'valorizaciones'}"> Valorizaciones </router-link>
                    </li>
                    ...
                    <li class="nav-item active">
                       <router-link id="contactos" :to="{ name: 'comunicaciones'}">Comunicaciones</router-link>
                    </li>
                    ...
                    <li class="nav-item active">
                         <router-link id="notificaciones" :to="{ name: 'notificaciones'}">Notificaciones</router-link>
                    </li>
                    ...
                    <li class="nav-item active">
                         <router-link id="boton_ini" :to="{ name: 'administrador'}">Administrador</router-link>
                    </li>
                    ...
                </ul>
                <form class="form-inline">
                  <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" id="buscar">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="boton_busc">Buscar</button>
              </form>
            </div>
        </nav>
    </nav>
    </header>
</template>

<style scoped>
#boton_ini{
font-family: 'lobster', cursive;
font-size: 20px;
color: white;
} 
#productos{
font-family: 'lobster', cursive;
font-size: 20px;
color: white;
}
#contactos{
font-family: 'lobster', cursive;
font-size: 20px;
color: white;
}
#notificaciones{
font-family: 'lobster', cursive;
font-size: 20px;
color: white;
}
#administrador{
font-family: 'lobster', cursive;
font-size: 20px;
color: white;
}
#TITULO{
font-family: 'Lobster', cursive;
font-size: 29px;
color: rgb(43, 49, 48);
}  
#navegador{
background-color:  rgba(71, 100, 146);
}
</style>