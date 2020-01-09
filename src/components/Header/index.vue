<template>
<div class="header-component">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand active" href="#">
        <img src="@/image/Logo.png" height="25px">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/pariwisata">Pariwisata</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/restoran">Restoran</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/kuliner">Kuliner</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/transportasi">Transportasi</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Tentang Kami</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Kontak Kami</a>
          </li>

        </ul>

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Masuk</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <button class="btn btn-info btn-daftar" type="submit">
                Daftar
              </button>
            </a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.header-component {
  padding-bottom: 3.75em;
}

.navbar {
  position:fixed;
  z-index: 995;
  width: 100%;
}

.btn-daftar {
  border-radius: 1em;
  padding: 0 1em;
}
</style>
