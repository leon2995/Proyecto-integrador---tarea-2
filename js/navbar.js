let navBar = document.getElementById("menu");

function menu() {
  navBar.innerHTML = `<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/index.html">Inicio</a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"> </span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" aria-current="page">
        <li class="nav-item">
          <a class="navbar-brand"  href="/html/catalogo.html">Catálogo</a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="/html/resenas.html">Reseñas</a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="/html/aboutus.html">Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="/html/contacto.html">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;
}
menu();

